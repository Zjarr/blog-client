import Styled from 'styled-components';

import { Column } from '../column';

export const CardContainer = Styled(Column)`
  margin-bottom: 32px;
`;

export const ListContainer = Styled.div`
  margin-bottom: 48px;
  position: relative;
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

export const PaginatorContainer = Styled.div`
  bottom: -64px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
  padding-right: 16px;
  position: absolute;
  width: 100%;
`;
