import Row from 'react-bootstrap/Row';
import Styled from 'styled-components';

import { Column } from '../column';
import { MEDIA_MD, MEDIA_XL } from '../../utils/values';

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

export const CardsListContainer = Styled(Row)`
  height: auto;
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
  height: 160px;
  margin: 0px 0px 16px;
  width: 160px;

  ${MEDIA_MD} {
    height: 240px;
    width: 240px;
  }

  ${MEDIA_XL} {
    height: 320px;
    margin: 80px 0px 16px;
    width: 320px;
  }
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
