import Styled from 'styled-components';

import { BORDER_RADIUS_MEDIUM, COLOR_WHITE, MEDIA_LG } from '../../utils/values';

export const ImageListContainer = Styled.div`
  bottom: 16px;
  left: 16px;
  overflow-y: auto;
  position: absolute;
  right: 16px;
  top: 16px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};
`;

export const ListContainer = Styled.div`
  padding: 16px;
`;

export const TitleContainer = Styled.div`
  padding: 16px 68px 16px 16px;

  ${MEDIA_LG} {
    padding: 24px;
  }
`;
