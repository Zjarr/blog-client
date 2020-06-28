import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_GRAY_LIGHT, COLOR_LIGHTBLUE } from '../../../utils/values';

const DEFAULT_BODY_HEIGHT = '0px';

const getBodyContainer = (height: number): string => height ? `calc(var(--default-height) * ${height})` : DEFAULT_BODY_HEIGHT;

export const BarContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 13%;
`;

export const HeadContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80px;
  padding: 8px;
  width: 100%;

  background-color: ${COLOR_GRAY_LIGHT};
  border-top-left-radius: ${BORDER_RADIUS_SMALL};
  border-top-right-radius: ${BORDER_RADIUS_SMALL};
`;

export const Number = Styled.p`
  font-size: 24px;
  margin-bottom: 0;

  color: ${COLOR_LIGHTBLUE};
`;

export const BodyContainer = Styled.div<{ height: number }>`
  --default-height: calc(100% - 80px);

  transition: 0.5s ease;
  width: 100%;

  background-color: ${COLOR_LIGHTBLUE};

  height: ${({ height }): string => getBodyContainer(height)};
`;
