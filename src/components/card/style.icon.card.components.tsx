import Styled from 'styled-components';

import { COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM } from '../../lib/values';

const DEFAULT_CONTAINER_WIDTH = '100%';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getTextContainerHeight = (icon?: string, title?: string): string => icon || title ? '56px' : '32px';
const getTextContainerMarginRight = (disabled?: boolean): string => disabled ? '0' : '64px';

export const IconCardContainer = Styled.div<{ width?: string }>`
  align-items: center;
  display: flex;
  min-height: 64px;
  overflow: hidden;
  padding: 8px 16px;
  position: relative;

  width: ${({ width }): string => getContainerWidth(width)};
`;

export const IconContainer = Styled.div`
  align-items: center;
  border-radius: 48px;
  flex-shrink: 0;
  display: flex;
  height: 56px;
  justify-content: center;
  margin-right: 16px;
  width: 56px;

  background-color: ${COLOR_GRAY_LIGHT};
`;

export const IconTextContainer = Styled.div<{ disabled?: boolean, icon?: string }>`
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  height: ${({ icon, title }): string => getTextContainerHeight(icon, title)};
  margin-right: ${({ disabled }): string => getTextContainerMarginRight(disabled)};

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
  position: absolute;
  right: 16px;
`;
