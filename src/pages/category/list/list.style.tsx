import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

export const CategoryListContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 112px;
  overflow-y: scroll;
`;

export const ListContainer = Styled(Row)`
  min-height: calc(100% - 112px);
`;
