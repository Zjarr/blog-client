import React from 'react';

import { IconContainer } from './icon.style';

export const Icon: React.FC<IIcon> = ({ name, ...rest }) => {
  return (
    <IconContainer className={name} {...rest}>
      {!name.includes('socicon-') && name}
    </IconContainer>
  );
};

interface IIcon {
  color?: string;
  name: string;
  size?: string;
}
