import React from 'react';

import { Icon } from '../icon';
import { LabelText } from '../text';

import { InputContainer, InputField } from './input.style';

export const Input: React.FC<IInput> = ({ disabled = false, label, icon, width, ...rest }) => {
  return (
    <InputContainer width={width}>
      {
        label && <LabelText>{label}</LabelText>
      }
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
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
  width?: string;
}
