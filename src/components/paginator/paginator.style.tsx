import Styled from 'styled-components';

import { COLOR_GRAY_DARK } from '../../utils/values';

export const PaginatorContainer = Styled.div`
  display: flex;

  div {
    margin: 0px 32px;
  }

  * {
    color: ${COLOR_GRAY_DARK};
  }
`;
