import Styled from 'styled-components';

import { COLOR_GRAY_DARK } from '../../lib/values';

export const PaginatorContainer = Styled.div`
  display: flex;

  div {
    margin: 0px 48px;
  }

  * {
    color: ${COLOR_GRAY_DARK};
  }
`;
