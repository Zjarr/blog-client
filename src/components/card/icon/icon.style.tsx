import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM } from '../../../utils/values';

const DEFAULT_CONTAINER_WIDTH = '100%';

const DEFAULT_TEXT_CONTAINER_HEIGHT = '32px';
const DEFAULT_TEXT_CONTAINER_MARGIN_RIGHT = '64px';

const ICON_TITLE_TEXT_CONTAINER_HEIGHT = '56px';
const DISABLED_TEXT_CONTAINER_MARGIN_RIGHT = '0px';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getTextContainerHeight = (icon?: string, title?: string): string =>
  icon || title ? ICON_TITLE_TEXT_CONTAINER_HEIGHT : DEFAULT_TEXT_CONTAINER_HEIGHT;

const getTextContainerMarginRight = (disabled?: boolean): string =>
  disabled ? DISABLED_TEXT_CONTAINER_MARGIN_RIGHT : DEFAULT_TEXT_CONTAINER_MARGIN_RIGHT;

export const IconCardContainer = Styled.div<{ width?: string }>`
  align-items: center;
  display: flex;
  min-height: 64px;
  overflow: hidden;
  padding: 8px 4px;
  position: relative;

  width: ${({ width }): string => getContainerWidth(width)};
`;

export const IconContainer = Styled.div`
  align-items: center;
  flex-shrink: 0;
  display: flex;
  height: 56px;
  justify-content: center;
  margin-right: 16px;
  width: 56px;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const IconTextContainer = Styled.div<{ disabled?: boolean, icon?: string }>`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  height: ${({ icon, title }): string => getTextContainerHeight(icon, title)};
  margin-right: ${({ disabled }): string => getTextContainerMarginRight(disabled)};

  div:first-child {
    p {
      color: ${COLOR_BLACK};
    }
  }

  p {
    margin-top: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${COLOR_GRAY_MEDIUM};
  }
`;

export const IconButtonContainer = Styled.div`
  position: absolute;
  right: 0px;
`;
