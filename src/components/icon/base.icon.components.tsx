import React from 'react';

import { IconContainer } from './style.icon.components';

export const Icon: React.FC<IProps> = ({ name, ...rest }) => {
  return (
    <IconContainer {...rest}>
      {name}
    </IconContainer>
  );
};

interface IProps {
  color?: string;
  name: string;
  size?: string;
}
