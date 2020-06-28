import Styled from 'styled-components';

import { COLOR_BLACK, COLOR_BLACK_0, COLOR_PURPLE, COLOR_WHITE, TEXT_NORMAL, TEXT_SMALL } from '../../../utils/values';

const CIRCLE_CONTAINER_BORDER_RADIUS = '100%';
const CIRCLE_CONTAINER_FLEX_DIRECTION = 'column';
const CIRCLE_CONTAINER_HEIGHT = '56px';
const CIRCLE_CONTAINER_PADDING = '0px';
const CIRCLE_CONTAINER_TEXT_ALIGN = 'center';
const CIRCLE_CONTAINER_TEXT_SIZE = TEXT_SMALL;
const CIRCLE_CONTAINER_WIDTH = '56px';

const CIRCLE_ICON_COLOR = COLOR_PURPLE;
const CIRCLE_ICON_MARGIN = '0 0 4px';

const DEFAULT_CONTAINER_BORDER_RADIUS = '0px';
const DEFAULT_CONTAINER_FLEX_DIRECTION = 'row';
const DEFAULT_CONTAINER_HEIGHT = '48px';
const DEFAULT_CONTAINER_PADDING = '0px 32px';
const DEFAULT_CONTAINER_TEXT_SIZE = TEXT_NORMAL;
const DEFAULT_CONTAINER_TEXT_ALIGN = 'flex-start';
const DEFAULT_CONTAINER_WIDTH = '100%';

const DEFAULT_ICON_COLOR = COLOR_WHITE;
const DEFAULT_ICON_MARGIN = '0 16px 0 0';

const getContainerIndicatorColor = (active?: boolean, shape?: string): string => {
  if (shape === 'circle') {
    return COLOR_BLACK_0;
  }

  return active ? COLOR_PURPLE : COLOR_BLACK_0;
};

const getContainerBorderRadius = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_BORDER_RADIUS : DEFAULT_CONTAINER_BORDER_RADIUS;
const getContainerFlexDirection = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_FLEX_DIRECTION : DEFAULT_CONTAINER_FLEX_DIRECTION;
const getContainerHeight = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_HEIGHT : DEFAULT_CONTAINER_HEIGHT;
const getContainerPadding = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_PADDING : DEFAULT_CONTAINER_PADDING;
const getContainerTextAlign = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_TEXT_ALIGN : DEFAULT_CONTAINER_TEXT_ALIGN;
const getContainerTextSize = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_TEXT_SIZE : DEFAULT_CONTAINER_TEXT_SIZE;
const getContainerWidth = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_WIDTH : DEFAULT_CONTAINER_WIDTH;

const getIconColor = (active?: boolean): string => active ? CIRCLE_ICON_COLOR : DEFAULT_ICON_COLOR;
const getIconMargin = (shape?: string): string => shape === 'circle' ? CIRCLE_ICON_MARGIN : DEFAULT_ICON_MARGIN;

export const MenuButtonContainer = Styled.button<{
  active?: boolean,
  shape?: string
}>`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0;
  overflow: hidden;
  position: relative;
  transition: 0.25s ease;

  background-color: ${COLOR_BLACK};
  border: 2px solid ${COLOR_BLACK};
  color: ${COLOR_WHITE};

  border-radius: ${({ shape }): string => getContainerBorderRadius(shape)};
  flex-direction: ${({ shape }): string => getContainerFlexDirection(shape)};
  font-size: ${({ shape }): string => getContainerTextSize(shape)};
  height: ${({ shape }): string => getContainerHeight(shape)};
  justify-content: ${({ shape }): string => getContainerTextAlign(shape)};
  padding: ${({ shape }): string => getContainerPadding(shape)};
  width: ${({ shape }): string => getContainerWidth(shape)};

  i {
    color: ${({ active }): string => getIconColor(active)};
    margin: ${({ shape }): string => getIconMargin(shape)};
  }

  :before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    transition: 0.25s ease;
    width: 4px;

    background-color: ${({ active, shape }): string => getContainerIndicatorColor(active, shape)};
  }

  :focus,
  :hover {
    outline: none;
    text-decoration: none;
  }

  :disabled {
    cursor: not-allowed;
  }
`;
