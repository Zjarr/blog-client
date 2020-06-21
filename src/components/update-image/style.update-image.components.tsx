import Styled from 'styled-components';

import { Image } from '../image';
import { Text } from '../text';

import { COLOR_GRAY_LIGHT, COLOR_PURPLE, COLOR_WHITE } from '../../lib/values';

const DEFAULT_IMAGE_CONTAINER_BORDER_COLOR = COLOR_GRAY_LIGHT;

const ACTIVE_IMAGE_CONTAINER_BORDER_COLOR = COLOR_PURPLE;

const getImageContainerBorderColor = (active: boolean): string => active ? ACTIVE_IMAGE_CONTAINER_BORDER_COLOR : DEFAULT_IMAGE_CONTAINER_BORDER_COLOR;

export const ButtonContainer = Styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 16px;
  position: absolute;
  right: 0;
`;

export const ImageContainer = Styled.div<{ active: boolean }>`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: 240px;
  justify-content: center;
  margin: auto;
  transition: 0.25s ease;
  width: 240px;

  border: 4px solid ${({ active }): string => getImageContainerBorderColor(active)};

  :hover {
    transition: 0.25s ease;

    border-color: ${COLOR_PURPLE}; 
  }
`;

export const ImageInput = Styled.input`
  display: none;
`;

export const ImageLabel = Styled.label`
  border-radius: 100%;
  cursor: pointer;
  height: 220px;
  margin-bottom: 0;
  width: 220px;

  background-color: ${COLOR_GRAY_LIGHT};
`;

export const ImageResult = Styled(Image)`
  height: 220px;
  pointer-events: none;
  position: absolute;
  width: 220px;
`;

export const ImageText = Styled(Text)`
  pointer-events: none;
  position: absolute;
`;

export const TitleContainer = Styled.div`
  padding: 16px 16px 48px;
`;

export const UpdateImageContainer = Styled.div`
  border-radius: 10px;
  height: 480px;
  position: relative;
  width: 480px;

  background-color: ${COLOR_WHITE};
`;
