import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

const CENTER_ITEMS_ALIGNMENT = 'flex-start';

const DEFAULT_ITEMS_ALIGNMENT = 'center';

const getItemsAlignment = (empty?: boolean): string => empty ? CENTER_ITEMS_ALIGNMENT : DEFAULT_ITEMS_ALIGNMENT;

export const BlogListContainer = Styled.div`
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
