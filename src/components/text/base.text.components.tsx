import React from 'react';

import { Icon } from '../icon';

import { Label, LabelContainer } from './style.label.text.components';
import { Paragraph, ParagraphContainer } from './style.paragraph.text.components';
import { SubTitle, SubTitleContainer } from './style.subtitle.text.components';
import { Title, TitleContainer } from './style.title.text.components';

export const Text: React.FC<IProps> = ({ icon, type, children, ...rest }) => {
  return (
    <>
      {
        type === 'title' &&
        <TitleContainer {...rest}>
          {
            icon && <Icon name={icon} />
          }
          <Title>{children}</Title>
        </TitleContainer>
      }
      {
        type === 'subtitle' &&
        <SubTitleContainer {...rest}>
          {
            icon && <Icon name={icon} />
          }
          <SubTitle>{children}</SubTitle>
        </SubTitleContainer>
      }
      {
        type === 'paragraph' &&
        <ParagraphContainer {...rest}>
          {
            icon && <Icon name={icon} />
          }
          <Paragraph>{children}</Paragraph>
        </ParagraphContainer>
      }
      {
        type === 'label' &&
        <LabelContainer {...rest}>
          {
            icon && <Icon name={icon} />
          }
          <Label>{children}</Label>
        </LabelContainer>
      }
    </>
  );
};

interface IProps {
  color?: string;
  icon?: string;
  margin?: string;
  type: string;
};
