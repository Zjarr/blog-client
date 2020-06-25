import React from 'react';

import { Text } from '../text';

import { BodyContainer, FormFieldContainer } from './form-fields.style';

export const FormField: React.FC<IFormField> = ({ children, label, ...rest }) => {
  return (
    <FormFieldContainer {...rest}>
      {
        label && <Text type={'label'}>{label}</Text>
      }
      <BodyContainer>
        {children}
      </BodyContainer>
    </FormFieldContainer>
  );
};

interface IFormField {
  label?: string;
  noMargin?: boolean;
  width?: string;
}
