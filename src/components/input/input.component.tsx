import React from 'react';

import { COLOR_RED } from '../../utils/values';

import { Icon } from '../icon';

import { Error, InputContainer, InputField } from './input.style';

export const Input: React.FC<IInput> = ({ disabled = false, error, icon, width, ...rest }) => {
  return (
    <InputContainer width={width}>
      {
        icon && <Icon name={icon} />
      }
      <InputField disabled={disabled} error={error} icon={icon} {...rest} />

      {
        error && <Error color={COLOR_RED}>{error}</Error>
      }
    </InputContainer>
  );
};

interface IInput {
  disabled?: boolean;
  error?: string;
  icon?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
  width?: string;
}
