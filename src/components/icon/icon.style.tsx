import Styled from 'styled-components';

import { COLOR_BLACK } from '../../utils/values';

const DEFAULT_ICON_COLOR = COLOR_BLACK;
const DEFAULT_ICON_SIZE = '16px';

const getIconColor = (color?: string): string => color ? color : DEFAULT_ICON_COLOR;
const getIconSize = (size?: string): string => size ? size : DEFAULT_ICON_SIZE;

export const IconContainer = Styled.i<{ color?: string, family?: string, size?: string }>`
  align-items: center;
  direction: ltr;
  display: flex;
  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  line-height: 1;
  letter-spacing: normal;
  text-rendering: optimizeLegibility;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;

  color: ${({ color }): string => getIconColor(color)};
  font-size: ${({ size }): string => getIconSize(size)};
  height: ${({ size }): string => getIconSize(size)};
  width: ${({ size }): string => getIconSize(size)};
`;
