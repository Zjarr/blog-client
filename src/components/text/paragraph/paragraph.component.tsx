import React from 'react';

import { Icon } from '../../icon';

import { Paragraph, ParagraphContainer } from './paragraph.style';

export const ParagraphText: React.FC<IParagraphText> = ({ bold, children, icon, ...rest }) => {
  return (
    <ParagraphContainer {...rest}>
      {
        icon && <Icon name={icon} />
      }
      <Paragraph bold={bold}>{children}</Paragraph>
    </ParagraphContainer>
  );
};

interface IParagraphText {
  bold?: boolean;
  color?: string;
  icon?: string;
  margin?: string;
};
