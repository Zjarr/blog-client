import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const DEFAULT_BODY_ALIGN = 'initial';
const DEFAULT_BODY_HEIGHT = 'auto';

const EMPTY_BODY_ALIGN = 'center';
const EMPTY_BODY_HEIGHT = 'calc(100% - 112px)';
const EMPTY_CONTAINER_PADDING = '16px';

const getBodyAlign = (empty?: boolean): string => empty ? EMPTY_BODY_ALIGN : DEFAULT_BODY_ALIGN;
const getBodyHeight = (empty?: boolean): string => empty ? EMPTY_BODY_HEIGHT : DEFAULT_BODY_HEIGHT;

const getContainerPadding = (initial: string, empty?: boolean): string => empty ? EMPTY_CONTAINER_PADDING : initial;

export const DetailContainer = Styled.div<{ empty?: boolean }>`
  height: 100%;
  overflow-y: auto;

  padding: ${({ empty }): string => getContainerPadding('16px 16px 80px', empty)};

  ${MEDIA_SM} {
    padding: ${({ empty }): string => getContainerPadding('16px 16px 96px', empty)};
  }

  ${MEDIA_XL} {
    padding: ${({ empty }): string => getContainerPadding('16px 16px 112px', empty)};
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
