import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_GRAY_LIGHT, COLOR_LIGHTBLUE, MEDIA_SM, TEXT_BIG, TEXT_NORMAL, TEXT_SMALL } from '../../../utils/values';

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
  height: 60px;
  padding: 8px;
  width: 100%;

  background-color: ${COLOR_GRAY_LIGHT};
  border-top-left-radius: ${BORDER_RADIUS_SMALL};
  border-top-right-radius: ${BORDER_RADIUS_SMALL};

  ${MEDIA_SM} {
    height: 80px;
  }
`;

export const Number = Styled.p`
  line-height: 28px;
  margin-bottom: 0;

  color: ${COLOR_LIGHTBLUE};
  font-size: ${TEXT_BIG};

  ${MEDIA_SM} {
    line-height: 36px;
  }
`;

export const Day = Styled.p`
  line-height: 12px;
  margin-bottom: 0;
  text-align: center;

  font-size: ${TEXT_SMALL};
  
  ${MEDIA_SM} {
    line-height: 16px;

    font-size: ${TEXT_NORMAL};
  }
`;

export const BodyContainer = Styled.div<{ height: number }>`
  transition: 0.5s ease;
  width: 100%;

  background-color: ${COLOR_LIGHTBLUE};

  height: ${({ height }): string => getBodyContainer(height)};

  --default-height: calc(100% - 60px);

  ${MEDIA_SM} {
    --default-height: calc(100% - 80px);
  }
`;
