import React from 'react';

export const useCheckbox = (initialValue?: boolean): IInputHook => {
  const [checked, setChecked] = React.useState<boolean>(initialValue || false);
  const [error, setError] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error) {
      setError('');
    }

    return setChecked(e.target.checked);
  };

  return {
    checked,
    error,
    onChange,
    setChecked,
    setError
  };
};

interface IInputHook {
  checked: boolean;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: (value: boolean) => void;
  setError: (error: string) => void;
}
