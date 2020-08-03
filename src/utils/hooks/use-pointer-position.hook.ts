import React from 'react';

export const usePointerPosition = (): IPointerPosition => {
  const [pointerX, setPointerX] = React.useState<number>(0);
  const [pointerY, setPointerY] = React.useState<number>(0);

  const updateMousePosition = React.useCallback((event: MouseEvent): void => {
    setPointerX(event.clientX);
    setPointerY(event.clientY);
  }, []);

  const updateTouchPosition = React.useCallback((event: TouchEvent): void => {
    setPointerX(event.touches[0].pageX);
    setPointerY(event.touches[0].pageY);
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('touchmove', updateTouchPosition);

    return (): void => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('touchmove', updateTouchPosition);
    };
  }, [updateMousePosition, updateTouchPosition]);

  return {
    pointerX,
    pointerY
  };
};

interface IPointerPosition {
  pointerX: number;
  pointerY: number;
};
