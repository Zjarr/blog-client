import React from 'react';

import { CheckboxContainer, SliderContainer, ToggleContainer } from './toggle.style';

export const Toggle: React.FC<IToggle> = ({ disabled = false, ...rest }) => {
  return (
    <ToggleContainer>
      <CheckboxContainer type={'checkbox'} disabled={disabled} {...rest} />
      <SliderContainer />
    </ToggleContainer>
  );
};

interface IToggle {
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
