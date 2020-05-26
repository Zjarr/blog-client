import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_GRAY_0, COLOR_GRAY_1, COLOR_PURPLE_0, COLOR_WHITE_1, TEXT_NORMAL } from '../../lib/values';

const getWidth = (width?: string): string => width ? width : 'auto';

export const InputContainer = styled.input<{ width?: string, disabled: boolean }>`
  border-radius: 10px;
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 48px;
  margin: 0;
  outline: none;
  padding: 0 8px;
  transition: .125s;

  background-color: ${alpha(COLOR_BLACK_0, 0)};
  border: 2px solid ${COLOR_WHITE_1};
  font-size: ${TEXT_NORMAL};

  width: ${({ width }): string => getWidth(width)};

  :focus {
    transition: .125s;
    
    border-color: ${COLOR_PURPLE_0};
  }

  ::placeholder {
    color: ${COLOR_GRAY_1};
  }

  :disabled {
    border-color: ${alpha(COLOR_BLACK_1, 0)};

    cursor: default;
  }
`;

export const Label = styled.label`
  color: ${COLOR_GRAY_0};
  font-size: ${TEXT_NORMAL};

  display: block;
  font-family: Proxima Nova Bold;
  margin: 0 0 4px 12px;
`;
