import React from 'react';

import { Label } from './style.label.text.components';
import { Paragraph } from './style.paragraph.text.components';
import { SubTitle } from './style.subtitle.text.components';
import { Title } from './style.title.text.components';

export const Text: React.FC<IProps> = ({ type, children, ...rest }) => {
  return (
    <>
      {
        type === 'title' &&
        <Title {...rest}>{children}</Title>
      }
      {
        type === 'subtitle' &&
        <SubTitle {...rest}>{children}</SubTitle>
      }
      {
        type === 'paragraph' &&
        <Paragraph {...rest}>{children}</Paragraph>
      }
      {
        type === 'label' &&
        <Label {...rest}>{children}</Label>
      }
    </>
  );
};

interface IProps {
  color?: string;
  margin?: string;
  type: string;
};
