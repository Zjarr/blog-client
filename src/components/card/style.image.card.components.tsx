import Styled from 'styled-components';

import { COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM, COLOR_GREEN, COLOR_RED } from '../../lib/values';

const DEFAULT_CONTAINER_WIDTH = '100%';
const DEFAULT_STATE_INDICATOR_COLOR = COLOR_RED;

const ACTIVE_STATE_INDICATOR_COLOR = COLOR_GREEN;

const getActiveIndicatorBGColor = (active?: boolean): string => active ? ACTIVE_STATE_INDICATOR_COLOR : DEFAULT_STATE_INDICATOR_COLOR;

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

export const ImageCardContainer = Styled.div<{ width?: string }>`
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 112px;
  padding: 8px 16px;
  position: relative;

  width: ${({ width }): string => getContainerWidth(width)};
`;

export const ImageContainer = Styled.div`
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-shrink: 0;
  height: 96px;
  justify-content: center;
  margin-right: 16px;
  width: 96px;

  background-color: ${COLOR_GRAY_LIGHT};
`;

export const ImageMiddleContainer = Styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 48px;
  min-width: 0;
  position: relative;

  p {
    overflow: hidden;
    margin-bottom: 0;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${COLOR_BLACK};
  }
`;

export const ImageSecondaryTextContainer = Styled.div`
  p {
    margin-bottom: 0;

    color: ${COLOR_GRAY_MEDIUM};
  }
`;

export const ImageFinalContainer = Styled.div`
  position: absolute;
  height: 100%;
  right: 16px;

  a,
  button {
    bottom: 4px;
    right: -16px;
    position: absolute;
  }
`;

export const ImageStateIndicator = Styled.div<{ active?: boolean }>`
  border-radius: 100%;
  height: 8px;
  position: absolute;
  right: 0px;
  top: 22px;
  width: 8px;

  background-color: ${({ active }): string => getActiveIndicatorBGColor(active)};
`;
