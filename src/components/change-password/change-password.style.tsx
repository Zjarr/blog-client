import Styled from 'styled-components';

import { BORDER_RADIUS_MEDIUM, COLOR_WHITE } from '../../utils/values';

export const ButtonContainer = Styled.div`
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  left: 0;
  padding: 16px;
  position: absolute;
  right: 0;
`;

export const PasswordContainer = Styled.div`
  padding: 0 16px;
`;

export const TitleContainer = Styled.div`
  padding: 24px 24px 40px;
`;

export const ChangePasswordContainer = Styled.div`
  height: 480px;
  position: relative;
  width: 480px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};
`;
