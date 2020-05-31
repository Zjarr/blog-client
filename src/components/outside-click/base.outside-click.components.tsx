import React from 'react';

import { useOutsideClick } from '../../lib/hooks';

export const OutsideClick: React.FC<IProps> = ({ children, onPlaceChange }) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const clickedOutside = useOutsideClick(wrapperRef);

  React.useEffect(() => {
    onPlaceChange(clickedOutside);
  }, [clickedOutside, onPlaceChange]);

  return (
    <>
      <div ref={wrapperRef}>
        {children}
      </div>
    </>
  );
};

interface IProps {
  onPlaceChange: (outside: boolean) => void;
}
