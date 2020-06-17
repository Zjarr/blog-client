import React from 'react';

import { SpinnerBody, SpinnerContainer } from './style.spinner.components';

export const Spinner: React.FC<IProps> = ({ color, ...rest }) => {
  return (
    <SpinnerContainer color={color} {...rest}>
      <SpinnerBody color={color} {...rest} />
    </SpinnerContainer>
  );
};

interface IProps {
  color?: string;
  height?: string;
  width?: string;
};
