import React from 'react';

import { BORDER_RADIUS_SMALL } from '../../utils/values';

import { Error } from '../error';
import { Skeleton } from '../skeleton';
import { LabelText } from '../text';

import { TextAreaContainer, TextAreaField } from './textarea.style';

export const TextArea: React.FC<ITextArea> = ({ error, label, loading, ...rest }) => {
  return (
    <TextAreaContainer>
      {
        label &&
        <LabelText>{label}</LabelText>
      }

      {
        loading ?
          <Skeleton border={BORDER_RADIUS_SMALL} /> :
          <TextAreaField error={error} {...rest} />
      }

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
  loading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
}
