import Styled from 'styled-components';

import { COLOR_BLACK, TEXT_BIG } from '../../../lib/values';

const DEFAULT_MARGIN = '0px';

const getTextColor = (color?: string): string => color ? color : COLOR_BLACK;
const getTextMargin = (margin?: string): string => margin ? margin : DEFAULT_MARGIN;

export const SubTitleContainer = Styled.div<{ color?: string, margin?: string }>`
  align-items: center;
  display: flex;

  color: ${({ color }): string => getTextColor(color)};
  margin: ${({ margin }): string => getTextMargin(margin)};

  i {
    margin-right: 8px;
    font-size: 24px;
  }
`;

export const SubTitle = Styled.p`
  font-family: Proxima Nova Bold;
  margin: 0;

  font-size: ${TEXT_BIG};
`;
