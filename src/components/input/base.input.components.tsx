import React from 'react';

import { Icon } from '../icon';
import { Text } from '../text';

import { InputContainer, InputField } from './style.input.components';

export const Input: React.FC<IInput> = ({ disabled = false, label, icon, ...rest }) => {
  return (
    <InputContainer>
      {
        label && <Text type={'label'}>{label}</Text>
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
