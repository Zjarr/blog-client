import React from 'react';

export const useTextArea = (initialValue?: string): ITextAreaHook => {
  const [value, setValue] = React.useState<string>(initialValue || '');
  const [error, setError] = React.useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  return {
    error,
    onChange,
    setError,
    setValue,
    value
  };
};

export interface ITextAreaHook {
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setError: (error: string) => void;
  setValue: (value: string) => void;
  value: string;
}
