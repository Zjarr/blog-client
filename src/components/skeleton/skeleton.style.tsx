import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, COLOR_BLACK_0, COLOR_BLACK_1, COLOR_GRAY_LIGHT } from '../../utils/values';

const DEFAULT_CONTAINER_BORDER = BORDER_RADIUS_FULL;
const DEFAULT_CONTAINER_HEIGHT = '100%';
const DEFAULT_CONTAINER_MARGIN = '0px';
const DEFAULT_CONTAINER_WIDTH = '100%';

const getContainerBorder = (border?: string): string => border ? border : DEFAULT_CONTAINER_BORDER;
const getContainerHeight = (height?: string): string => height ? height : DEFAULT_CONTAINER_HEIGHT;
const getContainerMargin = (margin?: string): string => margin ? margin : DEFAULT_CONTAINER_MARGIN;
const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

export const SkeletonContainer = Styled.div<{ border?: string, height?: string, margin?: string, width?: string }>`
  overflow: hidden;
  position: relative;

  background-color: ${COLOR_GRAY_LIGHT};

  border-radius: ${({ border }): string => getContainerBorder(border)};
  height: ${({ height }): string => getContainerHeight(height)};
  margin: ${({ margin }): string => getContainerMargin(margin)};
  width: ${({ width }): string => getContainerWidth(width)};

  :after {
    animation: 2s skeleton-load infinite;
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;

    background-color: ${COLOR_BLACK_0};
  }

  @keyframes skeleton-load {
    0% {
      background-color: ${COLOR_BLACK_0};
    }

    50% {
      background-color: ${COLOR_BLACK_1};
    }

    100% {
      background-color: ${COLOR_BLACK_0};
    }
  }
`;
