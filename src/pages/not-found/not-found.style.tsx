import Styled from 'styled-components';

import { COLOR_PURPLE, COLOR_WHITE, MEDIA_LG, MEDIA_MD, MEDIA_SM } from '../../utils/values';

export const NotFoundContainer = Styled.div`
  height: 100vh;
  width: 100%;

  background-color: ${COLOR_WHITE};
`;

export const BodyContainer = Styled.div`
  bottom: 80px;
  height: 280px;
  margin: auto;
  max-width: 246px;
  padding-left: 32px;
  position: absolute;

  ${MEDIA_SM} {
    height: 232px;
    max-width: 100%;
    padding-left: 64px;
  }

  ${MEDIA_LG} {
    padding-left: 128px;
  }
`;

export const TextContainer = Styled.div`
  margin-bottom: 16px;
`;

export const Title = Styled.h1`
  font-size: 80px;
  margin-bottom: 0px;

  color: ${COLOR_PURPLE};
`;

export const ButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WavesContainer = Styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: -128px;
  top: 0;

  ${MEDIA_SM} {
    right: -64px;
  }

  ${MEDIA_MD} {
    right: 0px;
  }
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
