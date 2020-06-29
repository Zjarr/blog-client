import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

export const RoleListContainer = Styled.div`
  height: 100%;
  padding: 16px;
  overflow-y: scroll;
`;

export const ListContainer = Styled(Row)`
  min-height: calc(100% - 112px);
`;
