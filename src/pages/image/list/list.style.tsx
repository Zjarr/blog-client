import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const CENTER_ITEMS_ALIGNMENT = 'flex-start';

const DEFAULT_ITEMS_ALIGNMENT = 'center';

const EMPTY_CONTAINER_PADDING = '16px';

const getItemsAlignment = (empty?: boolean): string => empty ? CENTER_ITEMS_ALIGNMENT : DEFAULT_ITEMS_ALIGNMENT;

const getContainerPadding = (initial: string, empty?: boolean): string => empty ? EMPTY_CONTAINER_PADDING : initial;

export const ImageListContainer = Styled.div<{ empty?: boolean }>`
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

export const BodyContainer = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 112px);

  ${MEDIA_XL} {
    flex-direction: row;
  }
`;

export const ListContainer = Styled(Column) <{ empty?: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  order: 1;

  align-items: ${({ empty }): string => getItemsAlignment(empty)};

  ${MEDIA_XL} {
    order: 0;
  }
`;

export const FilterContainer = Styled(Column)`
  order: 0;
`;
