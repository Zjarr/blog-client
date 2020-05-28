import styled from 'styled-components';

import { COLOR_GRAY_0 } from '../../lib/values';

const DEFAULT_MARGIN = '0 0 4px 12px';

const getTextColor = (color?: string): string => color ? color : COLOR_GRAY_0;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const Label = styled.label<{ color?: string, margin?: string }>`
  font-family: Proxima Nova Bold;
  font-size: 16px;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};
`;
