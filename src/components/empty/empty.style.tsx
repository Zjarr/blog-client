import Styled from 'styled-components';

export const EmptyContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const ImageContainer = Styled.div`
  height: 180px;
  margin: 0px 0px 16px;
  width: 180px;
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
