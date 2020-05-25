import styled from 'styled-components';

import { alpha, darken, lighten } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_PURPLE_0, TEXT_NORMAL, TEXT_SMALL } from '../../lib/values';

const DEFAULT_ICON_ACTIVE_COLOR = 'inherit';
const DEFAULT_ICON_BOTTOM_MARGIN = '4px';
const DEFAULT_ICON_RIGHT_MARGIN = '8px';
const DEFAULT_LEFT_RIGHT_PADDING = '16px';
const DEFAULT_SIZE = '48px';
const DEFAULT_TEXT_ALIGN = 'center';
const DEFAULT_TOP_BOTTOM_PADDING = '8px';
const NO_MARGIN = '0px';

const getActiveColor = (backgroundColor?: string, disabled?: boolean): string => {
  if (disabled) {
    return backgroundColor ? backgroundColor : alpha(COLOR_BLACK_1, 0);
  }

  return backgroundColor ? darken(backgroundColor, 10) : alpha(COLOR_BLACK_1, 0.1);
};

const getHoverColor = (backgroundColor?: string, disabled?: boolean): string => {
  if (disabled) {
    return backgroundColor ? backgroundColor : alpha(COLOR_BLACK_1, 0);
  }

  return backgroundColor ? lighten(backgroundColor, 10) : alpha(COLOR_BLACK_1, 0);
};

const getTextColor = (color?: string, disabled?: boolean): string => {
  if (disabled) {
    return color ? alpha(color, 0.8) : alpha(COLOR_BLACK_0, 0.5);
  }

  return color ? color : COLOR_BLACK_0;
};

const getActiveIndicatorColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : alpha(COLOR_BLACK_1, 0);
const getAlign = (align?: string): string => align ? align : DEFAULT_TEXT_ALIGN;
const getBackgroundColor = (backgroundColor?: string): string => backgroundColor ? backgroundColor : alpha(COLOR_BLACK_1, 0);
const getHeight = (height?: string): string => height ? height : DEFAULT_SIZE;
const getIconActiveColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : DEFAULT_ICON_ACTIVE_COLOR;
const getIconSize = (iconSize?: string): string => iconSize ? iconSize : TEXT_NORMAL;
const getMarginBottom = (iconOnly?: boolean): string => iconOnly ? NO_MARGIN : DEFAULT_ICON_BOTTOM_MARGIN;
const getMarginRight = (iconOnly?: boolean): string => iconOnly ? NO_MARGIN : DEFAULT_ICON_RIGHT_MARGIN;
const getPaddingLeft = (paddingLeft?: string): string => paddingLeft ? paddingLeft : DEFAULT_LEFT_RIGHT_PADDING;
const getTextSize = (fontSize?: string): string => fontSize ? fontSize : TEXT_NORMAL;
const getWidth = (width?: string): string => width ? width : DEFAULT_SIZE;

const BaseButtonContainer = styled.button<{
  active?: boolean;
  align?: string;
  background?: string;
  color?: string;
  disabled: boolean;
  fontSize?: string;
  height?: string;
  iconOnly: boolean;
  iconSize?: string;
  paddingLeft?: string;
  type?: string;
  width?: string;
}>`
  align-items: center;
  border: none;
  display: flex;
  font-family: Proxima Nova Regular;
  padding: ${DEFAULT_TOP_BOTTOM_PADDING} ${DEFAULT_LEFT_RIGHT_PADDING};
  position: relative;
  transition: 0.05s ease-in;

  background-color: ${({ background }): string => getBackgroundColor(background)};
  color: ${({ color, disabled }): string => getTextColor(color, disabled)};
  font-size: ${({ fontSize }): string => getTextSize(fontSize)};
  justify-content: ${({ align }): string => getAlign(align)};

  :hover {
    background-color: ${({ background, disabled }): string => getHoverColor(background, disabled)};
    transition: 0.05s ease-in;
  }

  :active {
    background-color: ${({ background, disabled }): string => getActiveColor(background, disabled)};
    transition: 0.05s ease-in;
  }

  i {
    color: ${({ active }): string => getIconActiveColor(active)};
    font-size: ${({ iconSize }): string => getIconSize(iconSize)};
  }
`;

export const CircleButtonContainer = styled(BaseButtonContainer)`
  border-radius: 100%;
  flex-direction: column;

  font-size: ${TEXT_SMALL};
  height: ${({ height }): string => getHeight(height)};
  width: ${({ width }): string => getWidth(width)};

  i {
    margin-bottom: ${({ iconOnly }): string => getMarginBottom(iconOnly)};
  }
`;

export const SquareButtonContainer = styled(BaseButtonContainer)`
  border-radius: 10px;

  height: ${({ height }): string => getHeight(height)};
  padding-left: ${({ paddingLeft }): string => getPaddingLeft(paddingLeft)};
  width: ${({ width }): string => getWidth(width)};

  :before {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    width: 4px;

    background-color: ${({ active }): string => getActiveIndicatorColor(active)};
  }

  i {
    margin-right: ${({ iconOnly }): string => getMarginRight(iconOnly)};
  }
`;
