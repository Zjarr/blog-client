import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_GRAY_1, COLOR_PURPLE_0, COLOR_WHITE_1, TEXT_NORMAL } from '../../lib/values';

const DEFAULT_FIELD_PADDING = '0px 16px';
const DEFAULT_FIELD_WIDTH = 'auto';

const FIELD_WITH_ICON_PADDING = '0px 16px 0px 40px';

const getFieldPadding = (icon?: string): string => icon ? FIELD_WITH_ICON_PADDING : DEFAULT_FIELD_PADDING;
const getFieldWidth = (width?: string): string => width ? width : DEFAULT_FIELD_WIDTH;

export const InputContainer = styled.div`
  position: relative;

  i {
    bottom: 18px;
    left: 16px;
    position: absolute;

    color: ${COLOR_GRAY_1};
  }
`;

export const InputField = styled.input<{ disabled: boolean, icon?: string, width?: string }>`
  border-radius: 10px;
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 48px;
  margin: 0;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: .125s;
  white-space: nowrap; 

  background-color: ${alpha(COLOR_BLACK_0, 0)};
  border: 2px solid ${COLOR_WHITE_1};
  font-size: ${TEXT_NORMAL};

  padding: ${({ icon }): string => getFieldPadding(icon)};
  width: ${({ width }): string => getFieldWidth(width)};

  :focus {
    transition: .125s;
    
    border-color: ${COLOR_PURPLE_0};
  }

  ::placeholder {
    color: ${COLOR_GRAY_1};
  }

  :disabled {
    cursor: default;

    border-color: ${alpha(COLOR_BLACK_1, 0)};
    color: ${COLOR_BLACK_0};
  }
`;
