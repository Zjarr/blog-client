import Styled from 'styled-components';

import { COLOR_PURPLE } from '../../utils/values';

export const NotFoundContainer = Styled.div`
  height: 100%;
  width: 100%;
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
  position: absolute;
  right: 0;
  top: 0;
`;

export const WavesImage = Styled.img`
  height: 100%;
  object-fit: cover;
  width: auto;
`;
