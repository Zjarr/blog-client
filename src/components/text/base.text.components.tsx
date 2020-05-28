import React from 'react';

import { LabelContainer } from './style.label.text.components';
import { ParagraphContainer } from './style.paragraph.text.components';
import { SubTitleContainer } from './style.subtitle.text.components';
import { TitleContainer } from './style.title.text.components';

export const Text: React.FC<IProps> = ({ type, children, ...rest }) => {
  return (
    <>
      {
        type === 'title' &&
        <TitleContainer {...rest}>{children}</TitleContainer>
      }
      {
        type === 'subtitle' &&
        <SubTitleContainer {...rest}>{children}</SubTitleContainer>
      }
      {
        type === 'paragraph' &&
        <ParagraphContainer {...rest}>{children}</ParagraphContainer>
      }
      {
        type === 'label' &&
        <LabelContainer {...rest}>{children}</LabelContainer>
      }
    </>
  );
};

interface IProps {
  color?: string;
  margin?: string;
  type: string;
};
