import React from 'react';

import { Icon } from '../../icon';

import { Label, LabelContainer } from './label.style';

export const LabelText: React.FC<ILabelText> = ({ children, icon, ...rest }) => {
  return (
    <LabelContainer {...rest}>
      {
        icon && <Icon name={icon} />
      }
      <Label>{children}</Label>
    </LabelContainer>
  );
};

interface ILabelText {
  color?: string;
  icon?: string;
  margin?: string;
};
