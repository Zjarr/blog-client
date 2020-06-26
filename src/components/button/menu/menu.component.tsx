import React from 'react';

import { Icon } from '../../icon';

import { MenuButtonContainer } from './menu.style';

export const MenuButton: React.FC<IMenuButton> = ({ active, children, icon, onClick, shape }) => {
  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  return (
    <MenuButtonContainer active={active} onClick={handleOnClick} shape={shape}>
      {icon && <Icon name={icon} size={'24px'} />}
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
