import React from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLElement>): boolean => {
  const [clickedOutside, setClickedOutside] = React.useState<boolean>(false);

  const handleClickOutside = React.useCallback((e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      return setClickedOutside(true);
    }

    return setClickedOutside(false);
  }, [ref]);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return clickedOutside;
};
