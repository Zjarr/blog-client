import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM } from '../../../utils/values';

const DEFAULT_CONTAINER_WIDTH = '100%';

const DEFAULT_TEXT_CONTAINER_WIDTH = 'calc(100% - 56px)';

const ICON_TITLE_TEXT_CONTAINER_WIDTH = 'calc(100% - 136px)';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getTextContainerWidth = (icon?: string): string => icon ? ICON_TITLE_TEXT_CONTAINER_WIDTH : DEFAULT_TEXT_CONTAINER_WIDTH;

export const IconCardContainer = Styled.div<{ width?: string }>`
  align-items: center;
  display: flex;
  height: 72px;
  overflow: hidden;
  padding: 8px 4px;
  position: relative;
  width: 100%;

  width: ${({ width }): string => getContainerWidth(width)};
`;

export const IconContainer = Styled.div`
  align-items: center;
  flex-shrink: 0;
  display: flex;
  height: 56px;
  justify-content: center;
  margin-right: 16px;
  width: 56px;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const IconTextContainer = Styled.div<{ icon?: string }>`
  display: flex;
  flex-direction: column;
  height: 56px;
  justify-content: space-around;
  margin-right: 16px;

  width: ${({ icon }): string => getTextContainerWidth(icon)};

  div:first-child {
    p {
      color: ${COLOR_BLACK};
    }
  }

  p {
    margin-top: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${COLOR_GRAY_MEDIUM};
  }
`;

export const IconButtonContainer = Styled.div`
  align-items: center;
  display: flex;
  height: 56px;
  width: 48px;
`;
