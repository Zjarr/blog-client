import React from 'react';

export const useMousePosition = (): IMousePosition => {
  const [mouseX, setMouseX] = React.useState<number>(0);
  const [mouseY, setMouseY] = React.useState<number>(0);

  const updateMousePosition = React.useCallback((event: MouseEvent): void => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition);

    return (): void => document.removeEventListener('mousemove', updateMousePosition);
  }, [updateMousePosition]);

  return {
    mouseX,
    mouseY
  };
};

interface IMousePosition {
  mouseX: number;
  mouseY: number;
};
