import Styled from 'styled-components';

import { BORDER_RADIUS_BIG, COLOR_BLACK, COLOR_GRAY_DARK, COLOR_WHITE, MEDIA_XL } from '../../utils/values';

const DEFAULT_BODY_CONTAINER_BORDER_RADIUS = '0px';
const DEFAULT_BODY_CONTAINER_LEFT = '0px';

const MENU_OPEN_BODY_CONTAINER_BORDER_RADIUS = `${BORDER_RADIUS_BIG} 0px 0px ${BORDER_RADIUS_BIG}`;
const MENU_OPEN_BODY_CONTAINER_LEFT = '208px';

const getBodyContainerBorderRadius = (menuOpen: boolean): string => menuOpen ?
  MENU_OPEN_BODY_CONTAINER_BORDER_RADIUS :
  DEFAULT_BODY_CONTAINER_BORDER_RADIUS;

const getBodyContainerLeft = (menuOpen: boolean): string => menuOpen ?
  MENU_OPEN_BODY_CONTAINER_LEFT :
  DEFAULT_BODY_CONTAINER_LEFT;

const getSidebarAnimation = (menuOpen: boolean): string => `
  transition: 0.25s ease;

  opacity: ${menuOpen ? '1' : '0'};
  transform: ${menuOpen ? 'scale(1)' : 'scale(0.8)'};

  ${MEDIA_XL} {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DashboardContainer = Styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100%;

  background-color: ${COLOR_BLACK};
`;

export const SidebarContainer = Styled.div`
  height: calc(100% - 98px);
  left: 0;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  width: 208px;
`;

export const TopContainer = Styled.div<{ menuOpen: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  
  ${({ menuOpen }): string => getSidebarAnimation(menuOpen)};
`;

export const TopButtonContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  padding: 0 32px;
  width: 100%;
`;

export const MiddleButtonContainer = Styled.div<{ menuOpen: boolean }>`
  margin-bottom: 24px;

  ${({ menuOpen }): string => getSidebarAnimation(menuOpen)};
`;

export const BottomContainer = Styled.div<{ menuOpen: boolean }>`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  position: fixed;
  width: 208px;

  background-color: ${COLOR_BLACK};
  box-shadow: 0 0 16px 16px ${COLOR_BLACK};

  ${({ menuOpen }): string => getSidebarAnimation(menuOpen)};
`;

export const LogoImg = Styled.img`
  height: 32px;
  margin-bottom: 8px;
  width: 32px;
`;

export const InfoContainer = Styled.div`
  text-align: center;
`;

export const Info = Styled.p`
  font-size: 14px;
  margin-bottom: 0;

  color: ${COLOR_GRAY_DARK};
`;

export const MobileMenuButtonContainer = Styled.div`
  display: block;
  left: 28px;
  position: absolute;
  top: 60px;
  z-index: 1;

  ${MEDIA_XL} {
    display: none;
  }
`;

export const BodyContainer = Styled.div<{ menuOpen: boolean }>`
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: 0.25s ease;
  width: 100%;

  background-color: ${COLOR_WHITE};

  border-radius: ${({ menuOpen }): string => getBodyContainerBorderRadius(menuOpen)};
  left: ${({ menuOpen }): string => getBodyContainerLeft(menuOpen)};

  ${MEDIA_XL} {
    left: 208px;
    width: calc(100% - 208px);

    border-radius: ${BORDER_RADIUS_BIG} 0px 0px ${BORDER_RADIUS_BIG};
  }
`;
