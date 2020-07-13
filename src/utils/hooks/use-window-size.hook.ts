import React from 'react';

export const useWindowSize = (): IWindowSize => {
  const [windowHeight, setWindowHeight] = React.useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

  const updateWindowSize = React.useCallback((): void => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return (): void => window.removeEventListener('resize', updateWindowSize);
  }, [updateWindowSize]);

  return {
    windowHeight,
    windowWidth
  };
};

interface IWindowSize {
  windowHeight: number;
  windowWidth: number;
}
