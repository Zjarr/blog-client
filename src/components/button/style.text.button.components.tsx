import styled from 'styled-components';

import { alpha, darken } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, TEXT_NORMAL } from '../../lib/values';

const COLOR_TRANSPARENT = alpha(COLOR_BLACK_1, 0);

const DEFAULT_ALIGN = 'center';
const DEFAULT_SIZE = '48px';

const ICON_MARGIN_RIGHT = '8px';
const ICON_NO_MARGIN_RIGHT = '0px';
const ICON_SIZE = '24px';

const getTextColor = (color?: string, disabled?: boolean): string => {
  if (disabled) {
    return color ? alpha(color, 0.5) : alpha(COLOR_BLACK_0, 0.5);
  };

  return color ? color : COLOR_BLACK_0;
};

const getAlign = (align?: string): string => align ? align : DEFAULT_ALIGN;
const getHoverTextColor = (color?: string): string => color ? darken(color, 25) : COLOR_BLACK_0;
const getIconMarginRight = (iconOnly?: boolean): string => iconOnly ? ICON_NO_MARGIN_RIGHT : ICON_MARGIN_RIGHT;
const getIconSize = (iconSize?: string): string => iconSize ? iconSize : ICON_SIZE;
const getSize = (size?: string): string => size ? size : DEFAULT_SIZE;
const getTextSize = (textSize?: string): string => textSize ? textSize : TEXT_NORMAL;

export const TextButtonContainer = styled.button<{
  align?: string;
  color?: string;
  disabled: boolean;
  height?: string;
  iconOnly: boolean;
  iconSize?: string;
  textSize?: string;
  width?: string;
}>`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
  padding: 8px;
  position: relative;

  background-color: ${COLOR_TRANSPARENT};
  border: 2px solid ${COLOR_TRANSPARENT};

  color: ${({ color }): string => getTextColor(color)};
  font-size: ${({ textSize }): string => getTextSize(textSize)};
  height: ${({ height }): string => getSize(height)};
  justify-content: ${({ align }): string => getAlign(align)};
  width: ${({ width }): string => getSize(width)};

  :hover {
    color: ${({ color }): string => getHoverTextColor(color)};
  }

  :disabled {
    cursor: not-allowed;

    border-color: ${COLOR_TRANSPARENT};
    color: ${({ color, disabled }): string => getTextColor(color, disabled)};
  }

  i {
    margin-right: ${({ iconOnly }): string => getIconMarginRight(iconOnly)};
    font-size: ${({ iconSize }): string => getIconSize(iconSize)};
  }
`;
