import React from 'react';

import { ErrorText } from './error.style';

export const Error: React.FC<IError> = ({ children }) => {
  return <ErrorText>{children}</ErrorText>;
};

interface IError { }
