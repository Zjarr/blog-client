import Styled from 'styled-components';

import { BORDER_RADIUS_MEDIUM, COLOR_WHITE, MEDIA_LG } from '../../utils/values';

export const ButtonContainer = Styled.div`
  bottom: 32px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 32px;

  ${MEDIA_LG} {
    bottom: 16px;
    position: absolute;
    right: 16px;
  }
`;

export const PasswordContainer = Styled.div`
  padding: 0 16px;
`;

export const TitleContainer = Styled.div`
  padding: 16px 68px 16px 16px;

  ${MEDIA_LG} {
    padding: 24px;
  }
`;

export const ChangePasswordContainer = Styled.div`
  height: calc(100% - 32px);
  overflow: auto;
  padding-bottom: 56px;
  position: relative;
  width: calc(100% - 32px);

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};

  ${MEDIA_LG} {
    height: 480px;
    width: 480px;
  }
`;
