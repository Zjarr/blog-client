import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const DEFAULT_BODY_ALIGN = 'initial';
const DEFAULT_BODY_HEIGHT = 'auto';

const EMPTY_BODY_ALIGN = 'center';
const EMPTY_BODY_HEIGHT = 'calc(100% - 112px)';

const getBodyAlign = (empty?: boolean): string => empty ? EMPTY_BODY_ALIGN : DEFAULT_BODY_ALIGN;
const getBodyHeight = (empty?: boolean): string => empty ? EMPTY_BODY_HEIGHT : DEFAULT_BODY_HEIGHT;

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
  align-items: ${({ empty }): string => getBodyAlign(empty)};
  min-height: ${({ empty }): string => getBodyHeight(empty)};
`;

export const ImageColumn = Styled(Column)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
