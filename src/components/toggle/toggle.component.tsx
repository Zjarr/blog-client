import React from 'react';

import { LabelText } from '../text';

import { CheckboxContainer, SliderContainer, ToggleContainer } from './toggle.style';

export const Toggle: React.FC<IToggle> = ({ disabled = false, label, ...rest }) => {
  return (
    <>
      {
        label && <LabelText>{label}</LabelText>
      }
      <ToggleContainer>
        <CheckboxContainer type={'checkbox'} disabled={disabled} {...rest} />
        <SliderContainer />
      </ToggleContainer>
    </>
  );
};

interface IToggle {
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
