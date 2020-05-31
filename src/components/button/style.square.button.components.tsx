import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_PURPLE_0, COLOR_WHITE_0, COLOR_WHITE_1, TEXT_NORMAL } from '../../lib/values';

const COLOR_INHERIT = 'inherit';
const COLOR_TRANSPARENT = alpha(COLOR_BLACK_1, 0);

const DEFAULT_ALIGN = 'center';
const DEFAULT_PADDING = '14px';
const DEFAULT_SIZE = '48px';

const ICON_MARGIN_RIGHT = '10px';
const ICON_NO_MARGIN_RIGHT = '0px';
const ICON_SIZE = '16px';

const MENU_PADDING = '48px';

const getTextColor = (color?: string, disabled?: boolean): string => {
  if (disabled) {
    return color ? alpha(COLOR_WHITE_0, 0.5) : alpha(COLOR_BLACK_0, 0.5);
  };

  return color ? COLOR_WHITE_0 : COLOR_BLACK_0;
};

const getAlign = (align?: string): string => align ? align : DEFAULT_ALIGN;
const getBackgroundColor = (color?: string): string => color ? color : COLOR_WHITE_1;
const getHoverBorderColor = (color?: string): string => color ? color : COLOR_BLACK_0;
const getHoverTextColor = (color?: string): string => color ? color : COLOR_BLACK_0;
const getIconColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : COLOR_INHERIT;
const getIconMarginRight = (iconOnly?: boolean): string => iconOnly ? ICON_NO_MARGIN_RIGHT : ICON_MARGIN_RIGHT;
const getIconSize = (iconSize?: string): string => iconSize ? iconSize : ICON_SIZE;
const getIndicatorColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : COLOR_TRANSPARENT;
const getPadding = (menu?: boolean): string => menu ? MENU_PADDING : DEFAULT_PADDING;
const getSize = (size?: string): string => size ? size : DEFAULT_SIZE;
const getTextSize = (textSize?: string): string => textSize ? textSize : TEXT_NORMAL;

export const SquareButtonContainer = styled.button<{
  active?: boolean;
  align?: string;
  color?: string;
  disabled: boolean;
  height?: string;
  iconOnly: boolean;
  iconSize?: string;
  menu?: boolean;
  textSize?: string;
  width?: string;
}>`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 8px 16px;
  position: relative;
  transition: .125s;

  border: 2px solid ${COLOR_TRANSPARENT};

  background-color: ${({ color }): string => getBackgroundColor(color)};
  color: ${({ color }): string => getTextColor(color)};
  font-size: ${({ textSize }): string => getTextSize(textSize)};
  height: ${({ height }): string => getSize(height)};
  justify-content: ${({ align }): string => getAlign(align)};
  padding-left: ${({ menu }): string => getPadding(menu)};
  width: ${({ width }): string => getSize(width)};

  :before {
    content: '';
    background-color: ${({ active }): string => getIndicatorColor(active)};
    height: 100%;
    left: 0;
    position: absolute;
    width: 5px;
  }

  :hover {
    transition: .125s;
    
    background-color: ${COLOR_WHITE_0};

    border-color: ${({ color }): string => getHoverBorderColor(color)};
    color: ${({ color }): string => getHoverTextColor(color)};
  }

  :disabled {
    cursor: not-allowed;

    border-color: ${COLOR_TRANSPARENT};

    background-color: ${({ color }): string => getBackgroundColor(color)};
    color: ${({ color, disabled }): string => getTextColor(color, disabled)};
  }

  i {
    margin-right: ${({ iconOnly }): string => getIconMarginRight(iconOnly)};
    color: ${({ active }): string => getIconColor(active)};
    font-size: ${({ iconSize }): string => getIconSize(iconSize)};
  }
`;
