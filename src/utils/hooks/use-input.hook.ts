import React from 'react';

export const useInput = (initialValue?: string): IInputHook => {
  const [value, setValue] = React.useState<string>(initialValue || '');
  const [error, setError] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error) {
      setError('');
    }

    return setValue(e.target.value);
  };

  return {
    error,
    onChange,
    setError,
    setValue,
    value
  };
};

interface IInputHook {
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setError: (error: string) => void;
  setValue: (value: string) => void;
  value: string;
}
