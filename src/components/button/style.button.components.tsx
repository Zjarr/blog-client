import styled from 'styled-components';

import { alpha, darken, lighten } from '../../lib/functions';
import { ColorBlack0, ColorBlack1, ColorPurple0, TextNormal, TextSmall } from '../../lib/values';

const getActiveColor = (backgroundColor?: string, disabled?: boolean): string => {
  if (disabled) {
    return backgroundColor ? backgroundColor : alpha(ColorBlack1, 0);
  }

  return backgroundColor ? darken(backgroundColor, 5) : alpha(ColorBlack1, 0.1);
};

const getHoverColor = (backgroundColor?: string, disabled?: boolean): string => {
  if (disabled) {
    return backgroundColor ? backgroundColor : alpha(ColorBlack1, 0);
  }

  return backgroundColor ? lighten(backgroundColor, 5) : alpha(ColorBlack1, 0);
};

const getTextColor = (color?: string, disabled?: boolean): string => {
  if (disabled) {
    return color ? alpha(color, 0.8) : alpha(ColorBlack0, 0.5);
  }

  return color ? color : ColorBlack0;
};

const getActive = (active?: boolean): string => active ? ColorPurple0 : 'inherit';
const getActiveIndicatorColor = (active?: boolean): string => active ? ColorPurple0 : 'transparent';
const getBackgroundColor = (backgroundColor?: string): string => backgroundColor ? backgroundColor : alpha(ColorBlack1, 0);
const getMarginBottom = (iconOnly?: boolean): string => iconOnly ? '0px' : '4px';
const getMarginRight = (iconOnly?: boolean): string => iconOnly ? '0px' : '8px';
const getPaddingLeft = (paddingLeft?: string): string => paddingLeft ? paddingLeft : '8px';
const getSize = (size?: string): string => size ? size : '48px';
const getAlign = (align?: string): string => align ? align : 'center';
const getWidth = (size?: string): string => size ? size : 'auto';

const BaseButtonContainer = styled.button<{
  active?: boolean;
  align?: string;
  background?: string;
  color?: string;
  disabled: boolean;
  iconOnly: boolean;
  paddingLeft?: string;
  size?: string;
  type?: string;
  width?: string;
}>`
  align-items: center;
  border: none;
  display: flex;
  font-family: Proxima Nova Regular;
  font-size: ${TextNormal};
  padding: 8px 16px;
  position: relative;
  transition: 0.125s ease-in;

  background-color: ${({ background }): string => getBackgroundColor(background)};
  color: ${({ color, disabled }): string => getTextColor(color, disabled)};
  justify-content: ${({ align }): string => getAlign(align)};

  :hover {
    background-color: ${({ background, disabled }): string => getHoverColor(background, disabled)};
    transition: 0.125s ease-in;
  }

  :active {
    background-color: ${({ background, disabled }): string => getActiveColor(background, disabled)};
    transition: 0.125s ease-in;
  }
`;

export const CircleButtonContainer = styled(BaseButtonContainer)`
  border-radius: 100%;
  flex-direction: column;

  font-size: ${TextSmall};
  height: ${({ size }): string => getSize(size)};
  width: ${({ size }): string => getSize(size)};

  i {
    color: ${({ active }): string => getActive(active)};
    margin-bottom: ${({ iconOnly }): string => getMarginBottom(iconOnly)};
  }
`;

export const SquareButtonContainer = styled(BaseButtonContainer)`
  border-radius: 10px;

  height: ${({ size }): string => getSize(size)};
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
    color: ${({ active }): string => getActive(active)};
    margin-right: ${({ iconOnly }): string => getMarginRight(iconOnly)};
  }
`;
