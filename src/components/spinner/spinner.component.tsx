import React from 'react';

import { SpinnerBody, SpinnerContainer } from './spinner.style';

export const Spinner: React.FC<ISpinner> = ({ color, ...rest }) => {
  return (
    <SpinnerContainer color={color} {...rest}>
      <SpinnerBody color={color} {...rest} />
    </SpinnerContainer>
  );
};

interface ISpinner {
  color?: string;
  height?: string;
  width?: string;
};
