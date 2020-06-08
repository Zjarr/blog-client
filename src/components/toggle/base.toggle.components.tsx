import React from 'react';

import { Text } from '../text';

import { CheckboxContainer, SliderContainer, ToggleContainer } from './style.toggle.components';

export const Toggle: React.FC<IProps> = ({ disabled = false, label, ...rest }) => {
  return (
    <>
      {
        label && <Text type={'label'}>{label}</Text>
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
