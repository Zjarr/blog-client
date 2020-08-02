import Styled from 'styled-components';

import { COLOR_WHITE, MEDIA_SM } from '../../utils/values';

export const LoginContainer = Styled.div`
  height: 100%;
  position: absolute;
  width: 100%;

  background-color: ${COLOR_WHITE};
`;

export const FormContainer = Styled.div`
  bottom: 0;
  height: 248px;
  left: 16px;
  margin: auto;
  position: absolute;
  right: 16px;
  top: 0;
  width: auto;

  ${MEDIA_SM} {
    left: 0;
    right: 0;
    width: 480px;
  }
`;

export const ButtonsContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
`;
