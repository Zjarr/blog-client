import React from 'react';

import { CircleButtonContainer } from './style.button.components';

export const CircleButton: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <CircleButtonContainer {...rest}>
      {children}
    </CircleButtonContainer>
  );
};

interface IProps {
  disabled: boolean;
  iconOnly: boolean;
}
