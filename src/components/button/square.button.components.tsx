import React from 'react';

import { SquareButtonContainer } from './style.button.components';

export const SquareButton: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <SquareButtonContainer {...rest}>
      {children}
    </SquareButtonContainer>
  );
};

interface IProps {
  disabled: boolean;
  iconOnly: boolean;
}
