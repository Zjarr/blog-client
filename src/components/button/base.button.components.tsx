import React from 'react';

import { Icon } from '../icon';

import { ColorButtonContainer } from './style.color.button.components';
import { MenuButtonContainer } from './style.menu.button.components';
import { TextButtonContainer } from './style.text.button.components';

export const Button: React.FC<IButton> = ({ active, as, disabled, icon, onClick, text, type, ...rest }) => {
  const iconOnly = !!(icon && !text);
  const iconSize = rest.shape === 'circle' ? '24px' : '16px';

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  if (type === 'color') {
    return (
      <ColorButtonContainer as={as || 'button'} disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} />}
        {text && text}
      </ColorButtonContainer>
    );
  }

  if (type === 'menu') {
    return (
      <MenuButtonContainer as={as || 'button'} active={active} onClick={handleOnClick} {...rest}>
        {icon && <Icon name={icon} size={iconSize} />}
        {text && text}
      </MenuButtonContainer>
    );
  }

  if (type === 'text') {
    return (
      <TextButtonContainer as={as || 'button'} disabled={disabled} onClick={handleOnClick} iconOnly={iconOnly} {...rest}>
        {icon && <Icon name={icon} />}
        {text && text}
      </TextButtonContainer>
    );
  }

  return null;
};

interface IButton {
  active?: boolean;
  as?: 'a' | 'button';
  align?: string;
  color?: string;
  disabled?: boolean;
  height?: string;
  icon?: string;
  onClick?: () => void;
  shape?: 'circle' | 'square';
  text?: string;
  type: 'color' | 'menu' | 'text';
  width?: string;
}
