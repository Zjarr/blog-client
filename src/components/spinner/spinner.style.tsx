import Styled from 'styled-components';

import { alpha } from '../../utils/functions';
import { COLOR_WHITE, COLOR_WHITE_3 } from '../../utils/values';

const DEFAULT_CONTAINER_BORDER_RADIUS = '8px';
const DEFAULT_CONTAINER_COLOR = COLOR_WHITE_3;
const DEFAULT_CONTAINER_HEIGHT = '8px';
const DEFAULT_CONTAINER_WIDTH = '100%';

const DEFAULT_SPINNER_COLOR = COLOR_WHITE;

const getBorderRadius = (height?: string): string => height ? height : DEFAULT_CONTAINER_BORDER_RADIUS;

const getContainerColor = (color?: string): string => color ? alpha(color, 0.3) : DEFAULT_CONTAINER_COLOR;
const getContainerHeight = (height?: string): string => height ? height : DEFAULT_CONTAINER_HEIGHT;
const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getSpinnerColor = (color?: string): string => color ? color : DEFAULT_SPINNER_COLOR;

export const SpinnerContainer = Styled.div<{
  color?: string,
  height?: string,
  width?: string
}>`
  overflow: hidden;
  position: relative;
  z-index: 1;

  background-color: ${({ color }): string => getContainerColor(color)};
  border-radius: ${({ height }): string => getBorderRadius(height)};
  height: ${({ height }): string => getContainerHeight(height)};
  width: ${({ width }): string => getContainerWidth(width)};
`;

export const SpinnerBody = Styled.div<{ height?: string, color?: string }>`
  animation: spinner-slide 2s infinite;
  height: 100%;
  left: -50%;
  position: absolute;
  width: 50%;

  background-color: ${({ color }): string => getSpinnerColor(color)};
  border-radius: ${({ height }): string => getBorderRadius(height)};

  @keyframes spinner-slide {
    from {
      left: -50%;
    }

    to {
      left: 100%;
    }
  }
`;
