import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../column';

const DEFAULT_CARDS_LIST_CONTAINER_HEIGHT = 'auto';

const EMPTY_CARDS_LIST_CONTAINER_HEIGHT = 'calc(100% - 40px)';

const getCardsListContainerHeight = (empty?: boolean): string => empty ? EMPTY_CARDS_LIST_CONTAINER_HEIGHT : DEFAULT_CARDS_LIST_CONTAINER_HEIGHT;

export const ListContainer = Styled.div`
  padding-bottom: 40px;
  position: relative;
  height: 100%;
`;

export const SearchContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
  width: 100%;

  div {
    width: 400px;
  }
`;

export const CardsListContainer = Styled(Row) <{ empty?: boolean }>`
  height: ${({ empty }): string => getCardsListContainerHeight(empty)};
`;

export const CardContainer = Styled(Column)`
  margin-bottom: 32px;
`;

export const PaginatorContainer = Styled.div`
  bottom: 8px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`;

export const EmptyListContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = Styled.div`
  height: 300px;
  margin-bottom: 16px;
  width: 300px;
`;

export const RocketImage = Styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const TextContainer = Styled.div`
  * {
    text-align: center;
    width: 100%;
  }
`;
