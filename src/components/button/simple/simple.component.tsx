import React from 'react';

import { Icon } from '../../icon';

import { SimpleButtonContainer } from './simple.style';

export const SimpleButton: React.FC<ISimpleButton> = ({ children, disabled, icon, onClick, ...rest }) => {
  const iconOnly = !!(icon && !children);

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  return (
    <SimpleButtonContainer disabled={disabled} iconOnly={iconOnly} onClick={handleOnClick} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </SimpleButtonContainer>
  );
};

interface ISimpleButton {
  align?: string;
  color?: string;
  disabled?: boolean;
  height?: string;
  icon?: string;
  onClick?: () => void;
  shape?: 'circle' | 'square';
  width?: string;
}
