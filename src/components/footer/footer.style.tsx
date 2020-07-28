import Styled from 'styled-components';

import { MEDIA_SM, MEDIA_XL } from '../../utils/values';

export const FooterContainer = Styled.div`
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  position: fixed;
  right: 0;

  button:not(first-child) {
    margin-left: 16px;
  }

  ${MEDIA_SM} {
    padding: 24px;
  }

  ${MEDIA_XL} {
    padding: 32px;
  }
`;
