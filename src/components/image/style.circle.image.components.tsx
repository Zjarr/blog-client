import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_WHITE } from '../../lib/values';

const DEFAULT_IMAGE_CONTAINER_SIZE = '96px';

const DEFAULT_IMAGE_HEIGHT = '100%';
const DEFAULT_UPDATE_BUTTON_OPACITY = '1';
const DEFAULT_UPDATE_BUTTON_VISIBILITY = 'visible';

const NO_IMAGE_HEIGHT = '65%';
const NO_UPDATE_BUTTON_OPACITY = '0';
const NO_UPDATE_BUTTON_VISIBILITY = 'hidden';

const getContainerSize = (size?: string): string => size ? size : DEFAULT_IMAGE_CONTAINER_SIZE;

const getImageSize = (noImg?: boolean): string => noImg ? NO_IMAGE_HEIGHT : DEFAULT_IMAGE_HEIGHT;

const getUpdateButtonOpacity = (updatable?: boolean): string => updatable ? DEFAULT_UPDATE_BUTTON_OPACITY : NO_UPDATE_BUTTON_OPACITY;
const getUpdateButtonVisibility = (updatable?: boolean): string => updatable ? DEFAULT_UPDATE_BUTTON_VISIBILITY : NO_UPDATE_BUTTON_VISIBILITY;

export const CircleImageUpdateButton = Styled.button`
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
`;

export const CircleImageContainer = Styled.div<{
  height?: string,
  updatable: boolean,
  width?: string
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};

  height: ${({ height }): string => getContainerSize(height)};
  width: ${({ width }): string => getContainerSize(width)};

  ${CircleImageUpdateButton} {
    opacity: 0;
    transition: 0.25s ease;
    visibility: hidden;

    border-radius: ${BORDER_RADIUS_FULL};
  }

  :hover ${CircleImageUpdateButton} {
    transition: 0.25s ease;

    opacity: ${({ updatable }): string => getUpdateButtonOpacity(updatable)};
    visibility: ${({ updatable }): string => getUpdateButtonVisibility(updatable)};
  }
`;

export const CircleImage = Styled.img<{ noImg?: boolean }>`
  object-fit: cover;

  height: ${({ noImg }): string => getImageSize(noImg)};
  width: ${({ noImg }): string => getImageSize(noImg)};
`;
