import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_PURPLE, COLOR_WHITE, COLOR_WHITE_5, MEDIA_SM } from '../../../utils/values';

const DEFAULT_COLOR_CONTAINER_COLOR = COLOR_PURPLE;

const getColorContainerColor = (color: string): string => color ? color : DEFAULT_COLOR_CONTAINER_COLOR;

export const ColorContainer = Styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 16px;
  width: 100%;

  border-radius: ${BORDER_RADIUS_SMALL};
  color: ${COLOR_WHITE};

  background-color: ${({ color }): string => getColorContainerColor(color)};
`;

export const IconContainer = Styled.div``;

export const MiddleContainer = Styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Number = Styled.p`
  font-size: 60px;
  margin: -24px 0px 0px;

  ${MEDIA_SM} {
    font-size: 80px;
    marging: 0;
  }
`;

export const Name = Styled.p`
  margin-bottom: 0;
  margin-top: -24px;

  color: ${COLOR_WHITE_5};
`;

export const ButtonContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
