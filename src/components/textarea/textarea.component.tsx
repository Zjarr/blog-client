import React from 'react';

import { Error } from '../error';
import { LabelText } from '../text';

import { TextAreaContainer, TextAreaField } from './textarea.style';

export const TextArea: React.FC<ITextArea> = ({ error, label, ...rest }) => {
  return (
    <TextAreaContainer>
      {
        label &&
        <LabelText>{label}</LabelText>
      }

      <TextAreaField error={error} {...rest} />

      {
        error && <Error>{error}</Error>
      }
    </TextAreaContainer>
  );
};

interface ITextArea {
  disabled?: boolean;
  error?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}
