import React from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

import Logo from '../../assets/images/logo-white.png';
import { MenuButton } from '../../components/button';
import { MobileButton } from '../../components/button/mobile';
import { Image } from '../../components/image';
import { LabelText } from '../../components/text';
import { UserContext } from '../../contexts';
import { useNavigateTo } from '../../utils/hooks';

import { useSystemQuery, useUserQuery } from './dashboard.graphql';
import {
  BodyContainer,
  BottomContainer,
  DashboardContainer,
  Info,
  InfoContainer,
  LogoImg,
  MiddleButtonContainer,
  MobileMenuButtonContainer,
  SidebarContainer,
  TopButtonContainer,
  TopContainer
} from './dashboard.style';
import { DashboardSwitch } from './dashboard.switch';

const {
  REACT_APP_COOKIE_DOMAIN,
  REACT_APP_COOKIE_PATH
} = process.env;

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const { action, param, section } = useParams();
  const [, , removeCookie] = useCookies();
  const navigateTo = useNavigateTo();

  const { user, updateUser } = React.useContext(UserContext);

  const {
    error: systemQueryError,
    data: systemQueryData,
    loading: systemQueryLoading
  } = useSystemQuery();

  const {
    error: userQueryError,
    data: userQueryData,
    loading: userQueryLoading
  } = useUserQuery(user!);

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [system, setSystem] = React.useState<string>('');
  const [image, setImage] = React.useState<string>('');

  const handleSidebarButtonClick = (route?: string): void => {
    if (route) navigateTo(route);

    return toggleSidebar();
  };

  const handleLogOutClick = (): void => {
    const cookieOptions = {
      domain: REACT_APP_COOKIE_DOMAIN,
      path: REACT_APP_COOKIE_PATH
    };

    removeCookie('authorization', cookieOptions);
    updateUser(null);

    return navigateTo('/admin');
  };

  const toggleSidebar = (): void => {
    return setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    if (systemQueryError) {
      return setSystem(':(');
    }

    if (systemQueryLoading) {
      return setSystem('v-.-.-');
    }

    if (systemQueryData) {
      return setSystem(systemQueryData.system.version);
    }
  }, [systemQueryData, systemQueryLoading, systemQueryError]);

  React.useEffect(() => {
    if (userQueryError || userQueryLoading) {
      return setImage('');
    }

    if (userQueryData) {
      return setImage(userQueryData.user.user?.image!);
    }
  }, [userQueryData, userQueryLoading, userQueryError]);

  return (
    <DashboardContainer>
      <SidebarContainer>
        <TopContainer menuOpen={menuOpen}>
          <Image shape={'circle'} height={'140px'} width={'140px'} src={image} />

          <TopButtonContainer>
            <MenuButton
              active={section === 'profile'}
              icon={'person'}
              onClick={(): void => handleSidebarButtonClick('/admin/profile')}
              shape={'circle'}>Profile</MenuButton>
            <MenuButton
              icon={'power_settings_new'}
              onClick={(): void => handleLogOutClick()}
              shape={'circle'}>Log out</MenuButton>
          </TopButtonContainer>
        </TopContainer>

        <MiddleButtonContainer menuOpen={menuOpen}>
          <MenuButton
            active={section === 'dashboard'}
            onClick={(): void => handleSidebarButtonClick('/admin/dashboard')}
            icon={'home'}>Dashboard</MenuButton>
        </MiddleButtonContainer>

        <MiddleButtonContainer menuOpen={menuOpen}>
          <LabelText>Author</LabelText>

          <MenuButton
            active={section === 'blogs'}
            onClick={(): void => handleSidebarButtonClick('/admin/blogs')}
            icon={'book'}>Blogs</MenuButton>
          <MenuButton
            active={section === 'categories'}
            onClick={(): void => handleSidebarButtonClick('/admin/categories')}
            icon={'category'}>Categories</MenuButton>
          <MenuButton
            active={section === 'images'}
            onClick={(): void => handleSidebarButtonClick('/admin/images')}
            icon={'image'}>Images</MenuButton>
        </MiddleButtonContainer>

        <BottomContainer menuOpen={menuOpen}>
          <LogoImg src={Logo} />

          <InfoContainer>
            <Info>Admin Panel</Info>
            <Info>{system}</Info>
          </InfoContainer>
        </BottomContainer>
      </SidebarContainer>

      <BodyContainer menuOpen={menuOpen}>
        <MobileMenuButtonContainer>
          <MobileButton open={menuOpen} onClick={toggleSidebar} />
        </MobileMenuButtonContainer>

        <DashboardSwitch action={action} param={param} section={section} />
      </BodyContainer>
    </DashboardContainer>
  );
};

interface IDashboardPage { }
