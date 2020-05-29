import styled from 'styled-components';

import { COLOR_BLACK_0 } from '../../lib/values';

const DEFAULT_MARGIN = '0px';

const getTextColor = (color?: string): string => color ? color : COLOR_BLACK_0;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const TitleContainer = styled.h1<{ color?: string, margin?: string }>`
  font-family: Proxima Nova Bold;
  font-size: 32px;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};
`;
