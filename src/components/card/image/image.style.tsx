import Styled from 'styled-components';

import {
  BORDER_RADIUS_FULL,
  BORDER_RADIUS_MEDIUM,
  BORDER_RADIUS_SMALL,
  COLOR_BLACK,
  COLOR_BLACK_8,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MEDIUM,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
  TEXT_NORMAL
} from '../../../utils/values';

const DEFAULT_CONTAINER_WIDTH = '100%';
const DEFAULT_STATE_INDICATOR_COLOR = COLOR_RED;

const ACTIVE_STATE_INDICATOR_COLOR = COLOR_GREEN;

const getActiveIndicatorBGColor = (active?: boolean): string => active ? ACTIVE_STATE_INDICATOR_COLOR : DEFAULT_STATE_INDICATOR_COLOR;

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

export const ClipboardContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  left: 0;
  opacity: 0;
  padding: 8px 16px;
  position: absolute;
  transition: 0.25s ease;
  visibility: hidden;
  width: 100%;

  background-color: ${COLOR_BLACK_8};
  border-radius: ${BORDER_RADIUS_MEDIUM};
`;

export const ImageCardContainer = Styled.div<{ width?: string }>`
  align-items: center;
  display: flex;
  height: 112px;
  overflow: hidden;
  padding: 8px 16px;
  position: relative;

  border-radius: ${BORDER_RADIUS_MEDIUM};

  width: ${({ width }): string => getContainerWidth(width)};

  :hover ${ClipboardContainer} {
    opacity: 1;
    transition: 0.25s ease;
    visibility: visible;
  }
`;

export const ImageContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 96px;
  justify-content: center;
  margin-right: 16px;
  width: 96px;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const ImageMiddleContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  position: relative;
  width: calc(100% - 168px);

  p {
    margin-bottom: 0;
    overflow: hidden;
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
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 56px;

  button {
    margin-bottom: -4px;
    margin-right: -16px;
  }
`;

export const ImageStateIndicator = Styled.div<{ active?: boolean }>`
  height: 8px;
  margin-top: 14px;
  width: 8px;

  border-radius: ${BORDER_RADIUS_FULL};

  background-color: ${({ active }): string => getActiveIndicatorBGColor(active)};
`;

export const URLContainer = Styled.div`
  align-items: center;
  display: flex;
  font-family: Proxima Nova Regular;
  height: 48px;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0px 48px 0px 16px;
  position: relative;
  transition: 0.25s ease;
  width: 100%;

  border: 2px solid ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};
  color: ${COLOR_WHITE};

  div:first-child {
    width: 100%;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  button {
    position: absolute;
    right: -2px;
    top: -2px;
  }
`;
