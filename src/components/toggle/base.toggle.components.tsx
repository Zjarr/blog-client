import React from 'react';

import { CheckboxContainer, SliderContainer, ToggleContainer, Label } from './style.toggle.components';

export const Toggle: React.FC<IProps> = ({ disabled = false, label, ...rest }) => {
  return (
    <>
      {
        label && <Label>{label}</Label>
      }
      <ToggleContainer>
        <CheckboxContainer type={'checkbox'} disabled={disabled} {...rest} />
        <SliderContainer />
      </ToggleContainer>
    </>
  );
};

interface IProps {
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
