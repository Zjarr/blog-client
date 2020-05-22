import React from 'react';

import { InputBox, Label } from './style.input.component';

export const Input: React.FC<IProps> = ({ disabled = false, label, ...rest }) => {
  return (
    <>
      {
        label && <Label>{label}</Label>
      }
      <InputBox disabled={disabled} {...rest} />
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
