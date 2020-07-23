import React from 'react';

export const useInput = (initialValue?: string, checkValue?: boolean): IInputHook => {
  const [checked, setChecked] = React.useState<boolean>(checkValue || false);
  const [value, setValue] = React.useState<string>(initialValue || '');
  const [error, setError] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error) {
      setError('');
    }

    setChecked(e.target.checked);
    setValue(e.target.value);
  };

  return {
    checked,
    error,
    onChange,
    setChecked,
    setError,
    setValue,
    value
  };
};

interface IInputHook {
  checked: boolean;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: (value: boolean) => void;
  setError: (error: string) => void;
  setValue: (value: string) => void;
  value: string;
}
