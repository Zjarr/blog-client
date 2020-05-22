import React from 'react';

import { InputContainer, Label } from './style.input.components';

export const Input: React.FC<IProps> = ({ disabled = false, label, ...rest }) => {
  return (
    <>
      {
        label && <Label>{label}</Label>
      }
      <InputContainer disabled={disabled} {...rest} />
    </>
  );
};

interface IProps {
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
  width?: string;
}
