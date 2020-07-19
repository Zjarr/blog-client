import Styled from 'styled-components';

import {
  BORDER_RADIUS_SMALL,
  COLOR_BLACK,
  COLOR_BLACK_0,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MEDIUM,
  COLOR_PURPLE,
  COLOR_RED,
  TEXT_NORMAL,
  TEXT_SMALL
} from '../../utils/values';

const DEFAULT_FIELD_BORDER_COLOR = COLOR_GRAY_LIGHT;
const DEFAULT_FIELD_PADDING = '0px 16px';
const DEFAULT_FIELD_WIDTH = '100%';

const FIELD_ERROR_BORDER_COLOR = COLOR_RED;
const FIELD_FOCUS_BORDER_COLOR = COLOR_PURPLE;
const FIELD_WITH_ICON_PADDING = '0px 16px 0px 48px';

const getFieldBorderColor = (error?: string, focus?: boolean): string => {
  if (error) {
    return FIELD_ERROR_BORDER_COLOR;
  }

  return focus ? FIELD_FOCUS_BORDER_COLOR : DEFAULT_FIELD_BORDER_COLOR;
};
const getFieldPadding = (icon?: string): string => icon ? FIELD_WITH_ICON_PADDING : DEFAULT_FIELD_PADDING;
const getFieldWidth = (width?: string): string => width ? width : DEFAULT_FIELD_WIDTH;

export const InputContainer = Styled.div<{ width?: string }>`
  position: relative;

  width: ${({ width }): string => getFieldWidth(width)};

  i {
    bottom: 16px;
    left: 18px;
    pointer-events: none;
    position: absolute;

    color: ${COLOR_GRAY_MEDIUM};
  }
`;

export const InputField = Styled.input<{ disabled: boolean, error?: string, icon?: string }>`
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 48px;
  margin: 0;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.25s ease;
  white-space: nowrap;
  width: 100%;

  background-color: ${COLOR_BLACK_0};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};

  border: 2px solid ${({ error }): string => getFieldBorderColor(error)};
  padding: ${({ icon }): string => getFieldPadding(icon)};

  :focus {
    transition: 0.25s ease;
    
    border-color: ${({ error }): string => getFieldBorderColor(error, true)};
  }

  ::placeholder {
    color: ${COLOR_GRAY_MEDIUM};
  }

  :disabled {
    cursor: default;

    border-color: ${COLOR_BLACK_0};
    color: ${COLOR_BLACK};
  }
`;

export const Error = Styled.p`
  animation: 0.25s show-error;
  bottom: -20px;
  left: 12px;
  margin-bottom: 0;
  position: absolute;

  color: ${COLOR_RED};
  font-size: ${TEXT_SMALL};

  @keyframes show-error {
    from {
      bottom: -24px;
      opacity: 0;
    }

    to {
      bottom: -20px;
      opacity: 1;
    }
  }
`;
