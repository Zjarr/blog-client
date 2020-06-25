import React from 'react';

import { Icon } from '../../icon';

import { SubTitle, SubTitleContainer } from './subtitle.style';

export const SubtitleText: React.FC<ISubtitleText> = ({ children, icon, ...rest }) => {
  return (
    <SubTitleContainer {...rest}>
      {
        icon && <Icon name={icon} />
      }
      <SubTitle>{children}</SubTitle>
    </SubTitleContainer>
  );
};

interface ISubtitleText {
  color?: string;
  icon?: string;
  margin?: string;
};
