import Styled from 'styled-components';

import { BORDER_RADIUS_BIG, COLOR_BLACK, COLOR_WHITE, COLOR_GRAY_DARK, TEXT_NORMAL } from '../../utils/values';

export const DashboardContainer = Styled.div`
  height: 100vh;
  width: 100%;

  background-color: ${COLOR_BLACK};
`;

export const SidebarContainer = Styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 240px;
`;

export const TopContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
`;

export const TopButtonContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  padding: 0 32px;
  width: 100%;
`;

export const MiddleButtonContainer = Styled.div`
  margin-bottom: 32px;
`;

export const BottomContainer = Styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  position: absolute;
  width: 100%;
`;

export const LogoImg = Styled.img`
  height: 48px;
  margin-bottom: 16px;
  width: 48px;
`;

export const InfoContainer = Styled.div`
  text-align: center;
`;

export const Info = Styled.p`
  margin-bottom: 0;

  color: ${COLOR_GRAY_DARK};
  font-size: ${TEXT_NORMAL};
`;

export const BodyContainer = Styled.div`
  height: 100%;
  right: 0;
  padding: 16px;
  position: absolute;
  top: 0;
  width: calc(100% - 240px);

  background-color: ${COLOR_WHITE};
  border-bottom-left-radius: ${BORDER_RADIUS_BIG};
  border-top-left-radius: ${BORDER_RADIUS_BIG};
`;
