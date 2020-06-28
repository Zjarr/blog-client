import Styled from 'styled-components';

import { BORDER_RADIUS_BIG_INNER } from '../../../utils/values';

export const ImageListContainer = Styled.div`
  height: 100%;
  overflow-y: scroll;

  border-bottom-left-radius: ${BORDER_RADIUS_BIG_INNER};
  border-top-left-radius: ${BORDER_RADIUS_BIG_INNER};
`;
