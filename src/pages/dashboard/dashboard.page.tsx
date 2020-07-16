import React from 'react';
import { useParams } from 'react-router-dom';

import Logo from '../../assets/images/logo-white.png';
import { MenuButton } from '../../components/button';
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
  SidebarContainer,
  TopButtonContainer,
  TopContainer
} from './dashboard.style';

import { DashboardSwitch } from './dashboard.switch';

export const DashboardPage: React.FC<IDashboardPage> = () => {
  const navigateTo = useNavigateTo();
  const { action, param, section } = useParams();

  return (
    <DashboardContainer>
      <SidebarContainer>
        <TopContainer>
          <Image shape={'circle'} height={'120px'} width={'120px'} src={''} />

          <TopButtonContainer>
            <MenuButton
              active={section === 'profile'}
              icon={'person'}
              onClick={(): void => navigateTo('/admin/profile')}
              shape={'circle'}>Profile</MenuButton>
            <MenuButton
              icon={'power_settings_new'}
              shape={'circle'}>Log out</MenuButton>
          </TopButtonContainer>
        </TopContainer>

        <MiddleButtonContainer>
          <MenuButton
            active={section === 'dashboard'}
            onClick={(): void => navigateTo('/admin/dashboard')}
            icon={'home'}>Dashboard</MenuButton>
        </MiddleButtonContainer>

        <MiddleButtonContainer>
          <LabelText>Author</LabelText>

          <MenuButton
            active={section === 'blogs'}
            onClick={(): void => navigateTo('/admin/blogs')}
            icon={'book'}>Blogs</MenuButton>
          <MenuButton
            active={section === 'categories'}
            onClick={(): void => navigateTo('/admin/categories')}
            icon={'category'}>Categories</MenuButton>
          <MenuButton
            active={section === 'images'}
            onClick={(): void => navigateTo('/admin/images')}
            icon={'image'}>Images</MenuButton>
        </MiddleButtonContainer>

        <BottomContainer>
          <LogoImg src={Logo} />

          <InfoContainer>
            <Info>Admin Panel</Info>
            <Info>v.1.3.3</Info>
          </InfoContainer>
        </BottomContainer>
      </SidebarContainer>

      <BodyContainer>
        <DashboardSwitch action={action} param={param} section={section} />
      </BodyContainer>
    </DashboardContainer>
  );
};

interface IDashboardPage { }
