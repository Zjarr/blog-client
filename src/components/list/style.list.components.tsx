import Styled from 'styled-components';

import Col from 'react-bootstrap/Col';

export const CardContainer = Styled(Col)`
  margin-bottom: 32px;
`;

export const ListContainer = Styled.div`
  position: relative;
  margin-bottom: 64px;
`;

export const SearchContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
  width: 100%;

  input {
    margin-right: 32px;
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
