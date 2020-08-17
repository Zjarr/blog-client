import Row from 'react-bootstrap/esm/Row';
import Styled from 'styled-components';

import { Column } from '../../../components/column';
import { MEDIA_SM, MEDIA_XL } from '../../../utils/values';

export const CategoryListContainer = Styled.div`
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

export const BodyContainer = Styled(Row)`
  min-height: 0;

  ${MEDIA_XL} {
    min-height: calc(100% - 112px);
  }
`;

export const ListContainer = Styled(Column)`
  order: 1;

  ${MEDIA_XL} {
    order: 0;
  }
`;

export const FilterContainer = Styled(Column)`
  order: 0;
`;
