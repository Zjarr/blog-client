import Styled from 'styled-components';

import { BORDER_RADIUS_BIG, COLOR_BLACK, COLOR_WHITE, COLOR_GRAY_DARK } from '../../utils/values';

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

export const TopContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const TopButtonContainer = Styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
  padding: 0 32px;
  width: 100%;
`;

export const MiddleButtonContainer = Styled.div`
  margin-bottom: 24px;
`;

export const BottomContainer = Styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  position: fixed;
  width: 208px;

  background-color: ${COLOR_BLACK};
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

export const BodyContainer = Styled.div`
  height: 100%;
  overflow: hidden;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(100% - 208px);

  background-color: ${COLOR_WHITE};
  border-bottom-left-radius: ${BORDER_RADIUS_BIG};
  border-top-left-radius: ${BORDER_RADIUS_BIG};
`;
