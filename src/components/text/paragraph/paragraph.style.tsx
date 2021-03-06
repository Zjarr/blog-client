import Styled from 'styled-components';

import { COLOR_BLACK, TEXT_NORMAL } from '../../../utils/values';

const DEFAULT_MARGIN = '0px';
const DEFAULT_PARAGRAPH_FONT_FAMILIY = 'Proxima Nova Regular';

const BOLD_PARAGRAPH_FONT_FAMILIY = 'Proxima Nova Bold';

const getTextColor = (color?: string): string => color ? color : COLOR_BLACK;
const getTextFontFamily = (bold?: boolean): string => bold ? BOLD_PARAGRAPH_FONT_FAMILIY : DEFAULT_PARAGRAPH_FONT_FAMILIY;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const ParagraphContainer = Styled.div<{ color?: string, margin?: string }>`
  align-items: center;
  display: flex;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};

  i {
    margin: 0px 8px 0px 0px;
    font-size: 16px;
  }
`;

export const Paragraph = Styled.p<{ bold?: boolean }>`
  margin: 0;
  width: 100%;

  font-size: ${TEXT_NORMAL};

  font-family: ${({ bold }): string => getTextFontFamily(bold)};
`;
