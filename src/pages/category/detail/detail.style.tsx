import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

export const DetailContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 80px;
  overflow-y: auto;

  ${MEDIA_SM} {
    padding: 16px 16px 96px;
  }

  ${MEDIA_XL} {
    padding: 16px 16px 112px;
  }
`;

export const BodyContainer = Styled(Row)``;
