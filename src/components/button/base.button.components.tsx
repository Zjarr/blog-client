import React from 'react';

import { Icon } from '../icon';

import { CircleButtonContainer } from './style.circle.button.components';
import { SquareButtonContainer } from './style.square.button.components';
import { TextButtonContainer } from './style.text.button.components';

export const Button: React.FC<IProps> = ({ children, disabled = false, icon, onClick = null, type = 'text', ...rest }) => {
  const iconOnly = !(icon && children);

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  if (type === 'circle') {
    return (
      <CircleButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest} >
        {icon && <Icon name={icon} />}
        {children}
      </CircleButtonContainer>
    );
  }

  if (type === 'square') {
    return (
      <SquareButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} />}
        {children}
      </SquareButtonContainer>
    );
  }

  if (type === 'text') {
    return (
      <TextButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} />}
        {children}
      </TextButtonContainer>
    );
  }

  return null;
};

export interface IProps {
  active?: boolean;
  align?: string;
  color?: string;
  disabled?: boolean;
  height?: string;
  icon?: string;
  iconSize?: string;
  menu?: boolean;
  onClick?: () => void;
  textSize?: string;
  type: string;
  width?: string;
}
