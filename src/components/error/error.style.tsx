import Styled from 'styled-components';

import { COLOR_RED, TEXT_SMALL } from '../../utils/values';

export const ErrorText = Styled.p`
  animation: 0.25s show-error;
  bottom: -20px;
  left: 12px;
  margin-bottom: 0;
  position: absolute;

  color: ${COLOR_RED};
  font-size: ${TEXT_SMALL};

  @keyframes show-error {
    from {
      bottom: -24px;
      opacity: 0;
    }

    to {
      bottom: -20px;
      opacity: 1;
    }
  }
`;
