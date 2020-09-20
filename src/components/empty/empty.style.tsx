import Styled from 'styled-components';

const DEFAULT_HEIGHT = '100%';

const getContainerHeight = (height?: string): string => height || DEFAULT_HEIGHT;

export const EmptyContainer = Styled.div<{ height?: string }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  height: ${({ height }): string => getContainerHeight(height)};
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
