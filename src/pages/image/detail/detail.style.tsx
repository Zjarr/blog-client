import Styled from 'styled-components';

import { Column } from '../../../components/column';

export const DetailContainer = Styled.div`
  height: 100%;
  padding: 16px 16px 112px;
  overflow-y: scroll;
`;

export const BodyContainer = Styled.div``;

export const ImageColumn = Styled(Column)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
