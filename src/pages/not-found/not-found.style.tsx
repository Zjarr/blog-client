import Styled from 'styled-components';

import { COLOR_WHITE, COLOR_PURPLE } from '../../utils/values';

export const NotFoundContainer = Styled.div`
  height: 100vh;
  width: 100%;

  background-color: ${COLOR_WHITE};
`;

export const BodyContainer = Styled.div`
  bottom: 0;
  height: 280px;
  margin: auto;
  padding-left: 128px;
  position: absolute;
  top: 240px;
`;

export const TextContainer = Styled.div`
  margin-bottom: 32px;
`;

export const Title = Styled.h1`
  font-size: 80px;
  margin-bottom: 32px;

  color: ${COLOR_PURPLE};
`;

export const ButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WavesContainer = Styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const WaveImage = Styled.img.attrs<{ right: number, top: number }>(({ right, top }) => ({
  style: {
    transform: `translate(${right}px, ${top}px)`
  }
})) <{ right: number, top: number }>`
  height: calc(100% + 20px);
  object-fit: cover;
  position: absolute;
  right: -10px;
  top: -10px;
  width: auto;
`;
