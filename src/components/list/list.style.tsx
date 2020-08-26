import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../column';

export const ListContainer = Styled(Row)`
  align-content: flex-start;
  height: 100%;
  position: relative;
  width: 100%;
`;

export const CardContainer = Styled(Column)`
  margin-bottom: 32px;
`;
