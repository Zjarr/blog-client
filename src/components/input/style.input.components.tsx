import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { ColorBlack0, ColorGray0, ColorGray1, ColorWhite1, TextNormal } from '../../lib/values';

export const InputContainer = styled.input<{ width?: string, disabled: boolean }>`
  background-color: ${alpha(ColorBlack0, 0)};
  border: 4px solid ${({ disabled }): string => disabled ? 'transparent' : ColorWhite1};
  border-radius: 10px;
  cursor: ${({ disabled }): string => disabled ? 'default' : 'text'};
  font-family: Proxima Nova Regular;
  font-size: ${TextNormal};
  height: 48px;
  margin: 0;
  outline: none;
  padding: 0 8px;
  width: ${({ width }): string => width ? width : 'auto'};

  ::placeholder {
    color: ${ColorGray1}
  }
`;

export const Label = styled.label`
  color: ${ColorGray0};
  display: block;
  font-family: Proxima Nova Bold;
  font-size: ${TextNormal};
  margin: 0 0 4px 12px;
`;
