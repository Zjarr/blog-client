import styled from 'styled-components';

import { Gray0, Gray1, White1 } from '../../lib/values';

export const InputContainer = styled.input<{ width?: string, disabled: boolean }>`
  border: 4px solid ${({ disabled }): string => disabled ? 'transparent' : White1};
  border-radius: 10px;
  cursor: ${({ disabled }): string => disabled ? 'default' : 'text'};
  font-family: Proxima Nova Regular;
  font-size: 16px;
  height: 40px;
  margin: 0;
  outline: none;
  padding: 0 8px;
  width: ${({ width }): string => width ? width : 'auto'};

  ::placeholder {
    color: ${Gray1}
  }
`;

export const Label = styled.label`
  color: ${Gray0};
  display: block;
  font-family: Proxima Nova Bold;
  font-size: 16px;
  margin: 0 0 4px 12px;
`;
