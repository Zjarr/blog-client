import React from 'react';

import { FooterContainer } from './footer.style';

export const Footer: React.FC<IFooter> = ({ children }) => {
  return (
    <FooterContainer>
      {children}
    </FooterContainer>
  );
};

interface IFooter {
}
