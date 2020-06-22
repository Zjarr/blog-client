import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, BORDER_RADIUS_SMALL, COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_WHITE, TEXT_NORMAL, TEXT_SMALL } from '../../lib/values';

const CIRCLE_CONTAINER_BORDER_RADIUS = BORDER_RADIUS_FULL;
const CIRCLE_CONTAINER_FLEX_DIRECTION = 'column';
const CIRCLE_CONTAINER_PADDING = '0px';
const CIRCLE_CONTAINER_TEXT_SIZE = TEXT_SMALL;

const CIRCLE_ICON_MARGIN = '0 0 2px';

const DEFAULT_CONTAINER_BORDER_RADIUS = BORDER_RADIUS_SMALL;
const DEFAULT_CONTAINER_FLEX_DIRECTION = 'row';
const DEFAULT_CONTAINER_PADDING = '0px 16px';
const DEFAULT_CONTAINER_SIZE = '48px';
const DEFAULT_CONTAINER_TEXT_ALIGN = 'center';
const DEFAULT_CONTAINER_TEXT_SIZE = TEXT_NORMAL;

const DEFAULT_ICON_MARGIN = '0 16px 0 0';

const NO_MARGIN = '0px';

const getContainerBackgroundColor = (color?: string, disabled?: boolean, hover?: boolean): string => {
  if (disabled || hover) {
    return COLOR_WHITE;
  }

  return color ? color : COLOR_GRAY_LIGHT;
};

const getContainerBorderColor = (color?: string, disabled?: boolean, hover?: boolean): string => {
  if (disabled) {
    return COLOR_GRAY_LIGHT;
  }

  if (hover) {
    return color ? color : COLOR_BLACK;
  }

  return color ? color : COLOR_GRAY_LIGHT;
};

const getContainerTextColor = (color?: string, disabled?: boolean, hover?: boolean): string => {
  if (disabled) {
    return COLOR_GRAY_LIGHT;
  }

  if (hover) {
    return COLOR_BLACK;
  }

  return color ? COLOR_WHITE : COLOR_BLACK;
};

const getContainerBorderRadius = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_BORDER_RADIUS : DEFAULT_CONTAINER_BORDER_RADIUS;
const getContainerFlexDirection = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_FLEX_DIRECTION : DEFAULT_CONTAINER_FLEX_DIRECTION;
const getContainerPadding = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_PADDING : DEFAULT_CONTAINER_PADDING;
const getContainerSize = (size?: string): string => size ? size : DEFAULT_CONTAINER_SIZE;
const getContainerTextAlign = (align?: string): string => align ? align : DEFAULT_CONTAINER_TEXT_ALIGN;
const getContainerTextSize = (shape?: string): string => shape === 'circle' ? CIRCLE_CONTAINER_TEXT_SIZE : DEFAULT_CONTAINER_TEXT_SIZE;

const getIconMargin = (iconOnly?: boolean, shape?: string): string => {
  if (iconOnly) {
    return NO_MARGIN;
  }

  return shape === 'circle' ? CIRCLE_ICON_MARGIN : DEFAULT_ICON_MARGIN;
};

export const ColorButtonContainer = Styled.button<{
  align?: string,
  color?: string,
  disabled?: boolean,
  height?: string,
  iconOnly?: boolean,
  shape?: string,
  width?: string
}>`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0;
  transition: 0.25s ease;

  background-color: ${({ color, disabled }): string => getContainerBackgroundColor(color, disabled)};
  border: 2px solid ${({ color, disabled }): string => getContainerBorderColor(color, disabled)};
  border-radius: ${({ shape }): string => getContainerBorderRadius(shape)};
  color: ${({ color, disabled }): string => getContainerTextColor(color, disabled)};
  flex-direction: ${({ shape }): string => getContainerFlexDirection(shape)};
  font-size: ${({ shape }): string => getContainerTextSize(shape)};
  height: ${({ height }): string => getContainerSize(height)};
  justify-content: ${({ align }): string => getContainerTextAlign(align)};
  padding: ${({ shape }): string => getContainerPadding(shape)};
  width: ${({ width }): string => getContainerSize(width)};

  i {
    margin: ${({ iconOnly, shape }): string => getIconMargin(iconOnly, shape)};
  }

  :hover {
    text-decoration: none;
    transition: 0.25s ease;

    background-color: ${({ color, disabled }): string => getContainerBackgroundColor(color, disabled, true)};
    border-color: ${({ color, disabled }): string => getContainerBorderColor(color, disabled, true)};
    color: ${({ color, disabled }): string => getContainerTextColor(color, disabled, true)};
  }

  :disabled {
    cursor: not-allowed;
  }
`;
