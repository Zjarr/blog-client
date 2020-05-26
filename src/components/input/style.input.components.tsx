import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_GRAY_0, COLOR_GRAY_1, COLOR_PURPLE_0, COLOR_WHITE_2, TEXT_NORMAL } from '../../lib/values';

export const InputContainer = styled.input<{ width?: string, disabled: boolean }>`
  background-color: ${alpha(COLOR_BLACK_0, 0)};
  border: 2px solid ${({ disabled }): string => disabled ? alpha(COLOR_BLACK_1, 0) : COLOR_WHITE_2};
  border-radius: 10px;
  cursor: ${({ disabled }): string => disabled ? 'default' : 'text'};
  font-family: Proxima Nova Regular;
  font-size: ${TEXT_NORMAL};
  height: 48px;
  margin: 0;
  outline: none;
  padding: 0 8px;
  width: ${({ width }): string => width ? width : 'auto'};

  :focus {
    border-color: ${COLOR_PURPLE_0};
  }

  ::placeholder {
    color: ${COLOR_GRAY_1}
  }
`;

export const Label = styled.label`
  color: ${COLOR_GRAY_0};
  display: block;
  font-family: Proxima Nova Bold;
  font-size: ${TEXT_NORMAL};
  margin: 0 0 4px 12px;
`;
