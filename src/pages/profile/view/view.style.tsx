import Styled from 'styled-components';

import { Column } from '../../../components/column';

import { COLOR_GRAY_DARK, TEXT_BIG } from '../../../utils/values';

export const ViewContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 112px;
  overflow-y: scroll;
  text-align: center;
`;

export const ContentContainer = Styled(Column)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const BasicInfoContainer = Styled.div`
  margin-top: 32px;
`;

export const SocialContainer = Styled.div`
  display: flex;
  margin-bottom: 48px;

  button {
    margin: 0px 16px;
  }
`;

export const AdvancedInfoContainer = Styled.div`
  max-width: 480px;
`;

export const ButtonContainer = Styled.div`
  bottom: 32px;
  display: flex;
  position: fixed;
  right: 32px;

  button:last-child {
    margin-left: 16px;
  }
`;

export const InfoContainer = Styled.div`
  margin-bottom: 32px;
`;

export const Label = Styled.p`
  font-family: Proxima Nova Bold;
  margin-bottom: 4px;

  color: ${COLOR_GRAY_DARK};
`;

export const Info = Styled.p``;

export const Name = Styled.p`
  font-family: Proxima Nova Bold;
  margin-bottom: 16px;

  font-size: ${TEXT_BIG};
`;
