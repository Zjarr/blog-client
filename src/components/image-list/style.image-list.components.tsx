import Styled from 'styled-components';

import { BORDER_RADIUS_MEDIUM, COLOR_WHITE } from '../../lib/values';

export const ImageListContainer = Styled.div`
  bottom: 16px;
  left: 16px;
  position: absolute;
  right: 16px;
  top: 16px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};
`;

export const ListContainer = Styled.div`
  bottom: 0;
  position: absolute;
`;

export const TitleContainer = Styled.div`
  padding: 24px 24px 48px;
  width: 100%;
`;

