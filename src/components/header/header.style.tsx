import Styled from 'styled-components';

import { MEDIA_XL } from '../../utils/values';

export const HeaderContainer = Styled.div`
  height: 80px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding-left: 64px;
  position: relative;

  ${MEDIA_XL} {
    padding-left: 0px;
  }
`;

export const TitleContainer = Styled.div`
  bottom: 0;
  padding-left: 16px;
  position: absolute;
`;
