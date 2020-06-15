import React from 'react';

import { Icon } from '../icon';

import { Label, LabelContainer } from './style.label.text.components';
import { Paragraph, ParagraphContainer } from './style.paragraph.text.components';
import { SubTitle, SubTitleContainer } from './style.subtitle.text.components';
import { Title, TitleContainer } from './style.title.text.components';

export const Text: React.FC<IProps> = ({ icon, type, children, ...rest }) => {
  if (type === 'title') {
    return (
      <TitleContainer {...rest}>
        {
          icon && <Icon name={icon} />
        }
        <Title>{children}</Title>
      </TitleContainer>
    );
  }

  if (type === 'subtitle') {
    return (
      <SubTitleContainer {...rest}>
        {
          icon && <Icon name={icon} />
        }
        <SubTitle>{children}</SubTitle>
      </SubTitleContainer>
    );
  }

  if (type === 'paragraph') {
    return (
      <ParagraphContainer {...rest}>
        {
          icon && <Icon name={icon} />
        }
        <Paragraph>{children}</Paragraph>
      </ParagraphContainer>
    );
  }

  if (type === 'label') {
    return (
      <LabelContainer {...rest}>
        {
          icon && <Icon name={icon} />
        }
        <Label>{children}</Label>
      </LabelContainer>
    );
  }

  return null;
};

interface IProps {
  color?: string;
  icon?: string;
  margin?: string;
  type: 'label' | 'paragraph' | 'subtitle' | 'title';
};
