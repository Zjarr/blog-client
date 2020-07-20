import Styled from 'styled-components';

import {
  BORDER_RADIUS_SMALL,
  COLOR_BLACK,
  COLOR_BLACK_0,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MEDIUM,
  COLOR_PURPLE,
  COLOR_RED,
  TEXT_NORMAL
} from '../../utils/values';

const getTextFieldBorderColor = (error?: string, focus?: boolean): string => {
  if (error) {
    return COLOR_RED;
  }

  return focus ? COLOR_PURPLE : COLOR_GRAY_LIGHT;
};

export const TextAreaContainer = Styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const TextAreaField = Styled.textarea<{ error?: string }>`
  cursor: text;
  font-family: Proxima Nova Regular;
  height: 100%;
  margin: 0px 0px -8px 0px;
  outline: none;
  overflow: auto;
  padding: 10px 16px;
  resize: none;
  transition: 0.25s ease;
  width: 100%;

  background-color: ${COLOR_BLACK_0};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};

  border: 2px solid ${({ error }): string => getTextFieldBorderColor(error)};

  :focus {
    transition: 0.25s ease;
    
    border-color: ${({ error }): string => getTextFieldBorderColor(error, true)};
  }

  ::placeholder {
    color: ${COLOR_GRAY_MEDIUM};
  }

  :disabled {
    cursor: default;

    border-color: ${COLOR_BLACK_0};
    color: ${COLOR_BLACK};
  }
`;
