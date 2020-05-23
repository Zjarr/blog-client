import styled from 'styled-components';

export const IconContainer = styled.i<{ color?: string, size?: string }>`
  color: ${({ color }): string => color ? color : 'inherit'};
  direction: ltr;
  display: inline-block;
  font-family: Material Icons;
  font-size: ${({ size }): string => size ? size : '16px'};
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  letter-spacing: normal;
  text-rendering: optimizeLegibility;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;
`;
