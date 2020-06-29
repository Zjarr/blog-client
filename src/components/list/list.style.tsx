import Styled from 'styled-components';

import { Column } from '../column';

export const ListContainer = Styled.div`
  padding-bottom: 40px;
  position: relative;
  height: 100%;
`;

export const SearchContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
  padding-right: 32px;
  width: 100%;

  div {
    width: 400px;
  }
`;

export const CardContainer = Styled(Column)`
  margin-bottom: 32px;
`;

export const PaginatorContainer = Styled.div`
  bottom: 8px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  padding-right: 16px;
  width: 100%;
`;
