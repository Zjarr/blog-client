import Styled from 'styled-components';

import {
  BORDER_RADIUS_SMALL,
  COLOR_BLACK,
  COLOR_BLACK_0,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MEDIUM,
  COLOR_PURPLE,
  TEXT_NORMAL
} from '../../lib/values';

const DEFAULT_FIELD_PADDING = '0px 16px';
const DEFAULT_FIELD_WIDTH = '100%';

const FIELD_WITH_ICON_PADDING = '0px 16px 0px 48px';

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

export const InputField = Styled.input<{ disabled: boolean, icon?: string }>`
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
  border: 2px solid ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};

  padding: ${({ icon }): string => getFieldPadding(icon)};

  :focus {
    transition: 0.25s ease;
    
    border-color: ${COLOR_PURPLE};
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
