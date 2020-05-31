import styled from 'styled-components';

const DEFAULT_ICON_COLOR = 'inherit';
const DEFAULT_ICON_SIZE = '16px';

const getIconColor = (color?: string): string => color ? color : DEFAULT_ICON_COLOR;
const getIconSize = (size?: string): string => size ? size : DEFAULT_ICON_SIZE;

export const IconContainer = styled.i<{ color?: string, size?: string }>`
  align-items: center;
  color: ${({ color }): string => getIconColor(color)};
  direction: ltr;
  display: flex;
  font-family: Material Icons;
  font-size: ${({ size }): string => getIconSize(size)};
  font-style: normal;
  font-weight: normal;
  height: ${({ size }): string => getIconSize(size)};
  justify-content: center;
  line-height: 1;
  letter-spacing: normal;
  text-rendering: optimizeLegibility;
  text-transform: none;
  white-space: nowrap;
  width: ${({ size }): string => getIconSize(size)};
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;
`;
