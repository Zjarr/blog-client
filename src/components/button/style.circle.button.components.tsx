import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_PURPLE_0, COLOR_WHITE_0, COLOR_WHITE_1, TEXT_SMALL } from '../../lib/values';

const COLOR_INHERIT = 'inherit';
const COLOR_TRANSPARENT = alpha(COLOR_BLACK_1, 0);

const DEFAULT_SIZE = '48px';

const ICON_MARGIN_BOTTOM = '2px';
const ICON_NO_MARGIN_BOTTOM = '0px';
const ICON_SIZE = '24px';

const getTextColor = (color?: string, disabled?: boolean): string => {
  if (disabled) {
    return color ? alpha(COLOR_WHITE_0, 0.5) : alpha(COLOR_BLACK_0, 0.5);
  };

  return color ? COLOR_WHITE_0 : COLOR_BLACK_0;
};

const getBackgroundColor = (color?: string): string => color ? color : COLOR_WHITE_1;
const getHoverBorderColor = (color?: string): string => color ? color : COLOR_BLACK_0;
const getHoverTextColor = (color?: string): string => color ? color : COLOR_BLACK_0;
const getIconColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : COLOR_INHERIT;
const getIconMarginBottom = (iconOnly?: boolean): string => iconOnly ? ICON_NO_MARGIN_BOTTOM : ICON_MARGIN_BOTTOM;
const getIconSize = (iconSize?: string): string => iconSize ? iconSize : ICON_SIZE;
const getSize = (size?: string): string => size ? size : DEFAULT_SIZE;
const getTextSize = (textSize?: string): string => textSize ? textSize : TEXT_SMALL;

export const CircleButtonContainer = styled.button<{
  active?: boolean;
  color?: string;
  disabled: boolean;
  height?: string;
  iconOnly: boolean;
  iconSize?: string;
  textSize?: string;
  width?: string;
}>`
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: .125s;

  border: 2px solid ${COLOR_TRANSPARENT};

  background-color: ${({ color }): string => getBackgroundColor(color)};
  color: ${({ color }): string => getTextColor(color)};
  font-size: ${({ textSize }): string => getTextSize(textSize)};
  height: ${({ height }): string => getSize(height)};
  width: ${({ width }): string => getSize(width)};

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
    margin-bottom: ${({ iconOnly }): string => getIconMarginBottom(iconOnly)};
    color: ${({ active }): string => getIconColor(active)};
    font-size: ${({ iconSize }): string => getIconSize(iconSize)};
  }
`;
