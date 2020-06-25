import React from 'react';

import { Icon } from '../../icon';

import { TextButtonContainer } from './text.style';

export const TextButton: React.FC<ITextButton> = ({ children, disabled, icon, onClick, ...rest }) => {
  const iconOnly = !!(icon && !children);

  const handleOnClick = (): void | null => {
    return onClick && onClick();
  };

  return (
    <TextButtonContainer disabled={disabled} onClick={handleOnClick} iconOnly={iconOnly} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </TextButtonContainer>
  );
};

interface ITextButton {
  align?: string;
  color?: string;
  disabled?: boolean;
  height?: string;
  icon?: string;
  onClick?: () => void;
  width?: string;
}
