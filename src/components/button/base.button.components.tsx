import React from 'react';

import { Icon } from '../icon';

import { CircleButton } from './circle.button.components';
import { SquareButton } from './square.button.components';

export const Button: React.FC<IProps> = ({ disabled = false, icon, text, type = 'square', ...rest }) => {
  const iconOnly = !(icon && text);

  return (
    <>
      {
        type === 'circle' &&
        <CircleButton disabled={disabled} iconOnly={iconOnly} {...rest}>
          {icon && <Icon name={icon} size={'24px'} />}
          {text && text}
        </CircleButton>
      }
      {
        type === 'square' &&
        <SquareButton disabled={disabled} iconOnly={iconOnly} {...rest}>
          {icon && <Icon name={icon} size={'24px'} />}
          {text && text}
        </SquareButton>
      }
    </>
  );
};

export interface IProps {
  active?: boolean;
  align?: string;
  background?: string;
  color?: string;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  paddingLeft?: string;
  size?: string;
  text?: string;
  type?: string;
  width?: string;
}
