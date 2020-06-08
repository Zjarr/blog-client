import styled from 'styled-components';

import { COLOR_GRAY_DARK } from '../../lib/values';

const DEFAULT_MARGIN = '0 0 4px 12px';

const getTextColor = (color?: string): string => color ? color : COLOR_GRAY_DARK;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const LabelContainer = styled.div<{ color?: string, margin?: string }>`
  align-items: center;
  display: flex;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};

  i {
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-family: Proxima Nova Bold;
  font-size: 16px;
  margin: 0;
`;
