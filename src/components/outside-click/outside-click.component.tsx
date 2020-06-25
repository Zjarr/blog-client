import React from 'react';

import { useOutsideClick } from '../../lib/hooks';

import { OutsideClickContainer } from './outside-click.style';

export const OutsideClick: React.FC<IOutsideClick> = ({ children, onPlaceChange, width }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const clickedOutside = useOutsideClick(wrapperRef);

  React.useEffect(() => {
    onPlaceChange(clickedOutside);
  }, [clickedOutside, onPlaceChange]);

  return (
    <OutsideClickContainer ref={wrapperRef} width={width}>{children}</OutsideClickContainer>
  );
};

interface IOutsideClick {
  onPlaceChange: (outside: boolean) => void;
  width?: string;
}
