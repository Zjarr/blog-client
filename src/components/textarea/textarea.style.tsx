import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_BLACK_0, COLOR_GRAY_LIGHT, COLOR_PURPLE, TEXT_NORMAL } from '../../utils/values';

export const TextAreaContainer = Styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const TextAreaField = Styled.textarea`
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 100%;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 10px 16px;
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
