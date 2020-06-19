import React from 'react';

import { useTextArea } from '../../lib/hooks';

import { Text } from '../text';

import { EditorContainer, EditorTextArea } from './style.editor.components';

export const Editor: React.FC<IEditor> = ({ label, onTextChange, text }) => {
  const bodyInput = useTextArea(text);

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onTextChange(e.target.value);

    return bodyInput.onChange(e);
  };

  return (
    <EditorContainer>
      <Text type={'label'}>{label}</Text>
      <EditorTextArea value={bodyInput.value} onChange={handleBodyChange}/>
    </EditorContainer>
  );
};

interface IEditor {
  label: string;
  onTextChange: (text: string) => void;
  text: string;
}
