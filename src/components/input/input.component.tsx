import React from 'react';

import { BORDER_RADIUS_SMALL } from '../../utils/values';

import { Error } from '../error';
import { Icon } from '../icon';
import { Skeleton } from '../skeleton';

import { InputContainer, InputField } from './input.style';

export const Input: React.FC<IInput> = ({ disabled = false, error, icon, loading, width, ...rest }) => {
  return (
    <InputContainer width={width}>
      {
        icon && <Icon name={icon} />
      }

      {
        loading ?
          <Skeleton border={BORDER_RADIUS_SMALL} height={'48px'} /> :
          <InputField disabled={disabled} error={error} icon={icon} {...rest} />
      }

      {
        error && <Error>{error}</Error>
      }
    </InputContainer>
  );
};

interface IInput {
  disabled?: boolean;
  error?: string;
  icon?: string;
  loading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string | number;
  width?: string;
}
