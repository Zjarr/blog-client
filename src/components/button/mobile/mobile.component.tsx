import React from 'react';

import { BottomLine, MenuLinesContainer, MiddleLine, MobileButtonContainer, TopLine } from './mobile.style';

export const MobileButton: React.FC<IMobileButton> = ({ open, onClick }) => {
  return (
    <MobileButtonContainer onClick={onClick}>
      <MenuLinesContainer>
        <TopLine open={open} />
        <MiddleLine open={open} />
        <BottomLine open={open} />
      </MenuLinesContainer>
    </MobileButtonContainer>
  );
};

interface IMobileButton {
  onClick: () => void;
  open: boolean;
}
