import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_BLACK_0, COLOR_GRAY_LIGHT, COLOR_PURPLE, TEXT_NORMAL } from '../../lib/values';

export const EditorContainer = Styled.div`
  position: relative;
`;

export const EditorTextArea = Styled.textarea`
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 100%;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 8px 16px;
  resize: none;
  transition: 0.25s ease;
  width: 100%;

  background-color: ${COLOR_BLACK_0};
  border: 2px solid ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};

  :focus {
    transition: 0.25s ease;
    
    border-color: ${COLOR_PURPLE};
  }
`;
