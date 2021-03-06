import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, BORDER_RADIUS_SMALL, COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_RED, COLOR_WHITE } from '../../utils/values';

const CIRCLE_IMAGE_CONTAINER_BORDER_RADIUS = BORDER_RADIUS_FULL;

const DEFAULT_IMAGE_CONTAINER_BORDER_RADIUS = BORDER_RADIUS_SMALL;
const DEFAULT_IMAGE_CONTAINER_SIZE = '96px';

const DEFAULT_IMAGE_BORDER_RADIUS = BORDER_RADIUS_FULL;
const DEFAULT_IMAGE_HEIGHT = '100%';
const DEFAULT_IMAGE_OBJECT_FIT = 'cover';
const DEFAULT_IMAGE_WIDTH = '100%';
const DEFAULT_UPDATE_BUTTON_OPACITY = '1';

const NO_IMAGE_BORDER_RADIUS = BORDER_RADIUS_SMALL;
const NO_IMAGE_HEIGHT = '65%';
const NO_IMAGE_OBJECT_FIT = 'container';
const NO_IMAGE_WIDTH = 'auto';
const NO_UPDATE_BUTTON_OPACITY = '0';

const getContainerBorderRadius = (shape?: string): string => shape === 'circle' ?
  CIRCLE_IMAGE_CONTAINER_BORDER_RADIUS :
  DEFAULT_IMAGE_CONTAINER_BORDER_RADIUS;

const getContainerSize = (size?: string): string => size ? size : DEFAULT_IMAGE_CONTAINER_SIZE;

const getImageBorderRadius = (noImg?: boolean): string => noImg ? NO_IMAGE_BORDER_RADIUS : DEFAULT_IMAGE_BORDER_RADIUS;
const getImageHeight = (noImg?: boolean): string => noImg ? NO_IMAGE_HEIGHT : DEFAULT_IMAGE_HEIGHT;
const getImageObjectFit = (noImg?: boolean): string => noImg ? NO_IMAGE_OBJECT_FIT : DEFAULT_IMAGE_OBJECT_FIT;
const getImageWidth = (noImg?: boolean): string => noImg ? NO_IMAGE_WIDTH : DEFAULT_IMAGE_WIDTH;

const getUpdateButtonOpacity = (updatable?: boolean): string => updatable ? DEFAULT_UPDATE_BUTTON_OPACITY : NO_UPDATE_BUTTON_OPACITY;

export const ImageUpdateButton = Styled.button<{ shape: string }>`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 100%;
  justify-content: center;
  padding: 16px;
  position: absolute;
  width: 100%;

  background-color: ${COLOR_BLACK};
  color: ${COLOR_WHITE};

  border-radius: ${({ shape }): string => getContainerBorderRadius(shape)};

  :disabled {
    display: none;
  }
`;

export const ImageContainer = Styled.div<{
  height?: string,
  shape: string,
  updatable: boolean,
  width?: string
}>`
  align-items: center;
  display: flex;
  height: var(--image-container-height);
  justify-content: center;
  position: relative;
  width: var(--image-container-width);

  background-color: ${COLOR_GRAY_LIGHT};

  border-radius: ${({ shape }): string => getContainerBorderRadius(shape)};
  --image-container-height: ${({ height }): string => getContainerSize(height)};
  --image-container-width: ${({ width }): string => getContainerSize(width)};

  ${ImageUpdateButton} {
    opacity: 0;
    transition: 0.25s ease;
  }

  :hover ${ImageUpdateButton} {
    transition: 0.25s ease;

    opacity: ${({ updatable }): string => getUpdateButtonOpacity(updatable)};
  }
`;

export const ImageErrorBorder = Styled.div`
  height: calc(var(--image-container-height) + 20px);
  position: absolute;
  width: calc(var(--image-container-width) + 20px);

  border: 4px solid ${COLOR_RED};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const Img = Styled.img<{ noImg?: boolean }>`
  border-radius: ${({ noImg }): string => getImageBorderRadius(noImg)};
  height: ${({ noImg }): string => getImageHeight(noImg)};
  object-fit: ${({ noImg }): string => getImageObjectFit(noImg)};
  width: ${({ noImg }): string => getImageWidth(noImg)};
`;
