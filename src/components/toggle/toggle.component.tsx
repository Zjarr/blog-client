import React from 'react';

import { CheckboxContainer, SliderContainer, ToggleContainer } from './toggle.style';
import { Skeleton } from '../skeleton';
import { BORDER_RADIUS_SMALL } from '../../utils/values';

export const Toggle: React.FC<IToggle> = ({ disabled = false, loading, ...rest }) => {
  return (
    <ToggleContainer>
      {
        loading ?
          <Skeleton border={BORDER_RADIUS_SMALL} /> :
          <>
            <CheckboxContainer type={'checkbox'} disabled={disabled} {...rest} />
            <SliderContainer />
          </>
      }
    </ToggleContainer>
  );
};

interface IToggle {
  disabled?: boolean;
  loading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}
