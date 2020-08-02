import Styled from 'styled-components';

import {
  BORDER_RADIUS_FULL,
  BORDER_RADIUS_MEDIUM,
  BORDER_RADIUS_SMALL,
  COLOR_BLACK_8,
  COLOR_GRAY_LIGHT,
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
  MEDIA_SM,
  TEXT_NORMAL
} from '../../../utils/values';

const DEFAULT_CONTAINER_PADDING = '8px 0px';
const DEFAULT_CONTAINER_WIDTH = '100%';

const DEFAULT_STATE_INDICATOR_COLOR = COLOR_RED;

const ACTIVE_STATE_INDICATOR_COLOR = COLOR_GREEN;

const getActiveIndicatorBGColor = (active?: boolean): string => active ? ACTIVE_STATE_INDICATOR_COLOR : DEFAULT_STATE_INDICATOR_COLOR;

const getContainerPadding = (padding?: string): string => padding ? padding : DEFAULT_CONTAINER_PADDING;
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

export const ImageCardContainer = Styled.div<{ padding?: string, width?: string }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  position: relative;

  border-radius: ${BORDER_RADIUS_MEDIUM};

  width: ${({ width }): string => getContainerWidth(width)};

  :hover ${ClipboardContainer} {
    opacity: 1;
    transition: 0.25s ease;
    visibility: visible;
  }

  ${MEDIA_SM} {
    height: 112px;
    
    padding: ${({ padding }): string => getContainerPadding(padding)};
  }
`;

export const ImageContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 96px;
  justify-content: center;
  margin: 0px 0px 8px 0px;
  width: 96px;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};

  ${MEDIA_SM} {
    margin: 0px 16px 0px 0px;
  }
`;

export const ImageMiddleContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;
  justify-content: space-around;
  position: relative;
  width: calc(100% - 56px);

  > div:first-child {
    margin-bottom: 4px;
  }

  p {
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${MEDIA_SM} {
    width: calc(100% - 168px);

    > div:first-child {
      margin-bottom: 16px;
    }
  }
`;

export const ImageSecondaryTextContainer = Styled.div``;

export const ImageFinalContainer = Styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 96px;
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
