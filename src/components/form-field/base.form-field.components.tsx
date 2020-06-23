import React from 'react';

import { Text } from '../text';

import { BodyContainer, FormFieldContainer } from './style.form-fields.components';

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
  noMarginBottom?: boolean;
  width?: string;
}
