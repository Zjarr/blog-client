import React from 'react';

import { Icon } from '../icon';

import { InputContainer, InputField } from './input.style';

export const Input: React.FC<IInput> = ({ disabled = false, icon, width, ...rest }) => {
  return (
    <InputContainer width={width}>
      {
        icon && <Icon name={icon} />
      }
      <InputField autoComplete={'off'} disabled={disabled} icon={icon} {...rest} />
    </InputContainer>
  );
};

interface IInput {
  disabled?: boolean;
  icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
  width?: string;
}
