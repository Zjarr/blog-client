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

  return (
    <>
      {
        type === 'circle' &&
        <CircleButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest} >
          {icon && <Icon name={icon} />}
          {children}
        </CircleButtonContainer>
      }
      {
        type === 'square' &&
        <SquareButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
          {icon && <Icon name={icon} />}
          {children}
        </SquareButtonContainer>
      }
      {
        type === 'text' &&
        <TextButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
          {icon && <Icon name={icon} />}
          {children}
        </TextButtonContainer>
      }
    </>
  );
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
