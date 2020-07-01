import React from 'react';

import { LabelText } from '../text';

import { TextAreaContainer, TextAreaField } from './textarea.style';

export const TextArea: React.FC<ITextArea> = ({ label, ...rest }) => {
  return (
    <TextAreaContainer>
      {
        label &&
        <LabelText>{label}</LabelText>
      }

      <TextAreaField {...rest} />
    </TextAreaContainer>
  );
};

interface ITextArea {
  disabled?: boolean;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
