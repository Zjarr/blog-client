import React from 'react';

import { Icon } from '../icon';

import { ColorButtonContainer } from './style.color.button.components';
import { MenuButtonContainer } from './style.menu.button.components';
import { TextButtonContainer } from './style.text.button.components';

export const Button: React.FC<IProps> = ({ active, disabled, icon, onClick, text, type, ...rest }) => {
  const iconOnly = !!(icon && !text);
  const iconSize = rest.shape === 'circle' ? '24px' : '16px';

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  if (type === 'color') {
    return (
      <ColorButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} />}
        {text && text}
      </ColorButtonContainer>
    );
  }

  if (type === 'menu') {
    return (
      <MenuButtonContainer disabled={disabled} onClick={handleOnClick} {...rest} active={active} >
        {icon && <Icon name={icon} size={iconSize} />}
        {text && text}
      </MenuButtonContainer>
    );
  }

  if (type === 'text') {
    return (
      <TextButtonContainer disabled={disabled} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} />}
        {text && text}
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
  icon?: string;
  onClick?: () => void;
  shape?: string;
  text?: string;
  type: string;
  width?: string;
}
