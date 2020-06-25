import React from 'react';

import { Icon } from '../../icon';

import { MenuButtonContainer } from './menu.style';

export const MenuButton: React.FC<IMenuButton> = ({ active, children, icon, onClick, shape }) => {
  const iconSize = shape === 'circle' ? '24px' : '16px';

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  return (
    <MenuButtonContainer active={active} onClick={handleOnClick} shape={shape}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
    </MenuButtonContainer>
  );
};

interface IMenuButton {
  active?: boolean;
  icon?: string;
  onClick?: () => void;
  shape?: 'circle' | 'square';
}
