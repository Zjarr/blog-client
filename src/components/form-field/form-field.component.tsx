import React from 'react';

import { LabelText } from '../text';

import { BodyContainer, FormFieldContainer } from './form-fields.style';

export const FormField: React.FC<IFormField> = ({ children, label, ...rest }) => {
  return (
    <FormFieldContainer {...rest}>
      {
        label && <LabelText>{label}</LabelText>
      }
      <BodyContainer >
        {children}
      </BodyContainer>
    </FormFieldContainer>
  );
};

interface IFormField {
  label?: string;
  height?: string;
  minHeight?: string;
  noMargin?: boolean;
  width?: string;
}
