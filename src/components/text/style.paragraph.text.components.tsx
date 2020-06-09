import styled from 'styled-components';

import { COLOR_BLACK, TEXT_NORMAL } from '../../lib/values';

const DEFAULT_MARGIN = '0px';

const getTextColor = (color?: string): string => color ? color : COLOR_BLACK;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const ParagraphContainer = styled.div<{ color?: string, margin?: string }>`
  align-items: center;
  display: flex;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};

  i {
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  font-family: Proxima Nova Regular;
  margin: 0;

  font-size: ${TEXT_NORMAL};
`;
