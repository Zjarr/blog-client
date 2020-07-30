import React from 'react';
import { useParams } from 'react-router-dom';

import Logo from '../../assets/images/logo-white.png';
import { MenuButton } from '../../components/button';
import { MobileButton } from '../../components/button/mobile';
import { Image } from '../../components/image';
import { LabelText } from '../../components/text';
import { useNavigateTo } from '../../utils/hooks';

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

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const { action, param, section } = useParams();
  const navigateTo = useNavigateTo();

  const handleSidebarButtonClick = (route?: string): void => {
    if (route) navigateTo(route);

    return toggleSidebar();
  };

  const toggleSidebar = (): void => {
    return setMenuOpen(!menuOpen);
  };

  return (
    <DashboardContainer>
      <SidebarContainer>
        <TopContainer menuOpen={menuOpen}>
          <Image shape={'circle'} height={'140px'} width={'140px'} src={''} />

          <TopButtonContainer>
            <MenuButton
              active={section === 'profile'}
              icon={'person'}
              onClick={(): void => handleSidebarButtonClick('/admin/profile')}
              shape={'circle'}>Profile</MenuButton>
            <MenuButton
              icon={'power_settings_new'}
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
            <Info>v.1.3.3</Info>
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
