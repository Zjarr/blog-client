import React from 'react';

import { Icon } from '../../icon';

import { Title, TitleContainer } from './title.style';

export const TitleText: React.FC<ITitleText> = ({ children, icon, ...rest }) => {
  return (
    <TitleContainer {...rest}>
      {
        icon && <Icon name={icon} />
      }
      <Title>{children}</Title>
    </TitleContainer>
  );
};

interface ITitleText {
  color?: string;
  icon?: string;
  margin?: string;
};
