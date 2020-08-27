import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const DEFAULT_BODY_HEIGHT = 'auto';

const EMPTY_BODY_HEIGHT = 'calc(100% - 112px)';

const getBodyheight = (empty?: boolean): string => empty ? EMPTY_BODY_HEIGHT : DEFAULT_BODY_HEIGHT;

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

export const BodyContainer = Styled(Row) <{ empty: boolean }>`
  align-items: center;

  min-height: ${({ empty }): string => getBodyheight(empty)};
`;

export const ImageColumn = Styled(Column)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
