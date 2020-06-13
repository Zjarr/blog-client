import Styled from 'styled-components';

import { COLOR_GRAY_LIGHT, COLOR_GREEN, COLOR_RED, COLOR_WHITE } from '../../lib/values';

export const ToggleContainer = Styled.label`
  display: block;
  height: 48px;
  position: relative;
  width: 96px;
`;

export const CheckboxContainer = Styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  + span {
    background-color: ${COLOR_RED};
    transition: 0.25s ease;
  }

  :checked + span {
    background-color: ${COLOR_GREEN};
    transition: 0.25s ease;

    :before {
      transform: translateX(44px);
    }
  }

  :disabled + span {
    cursor: not-allowed;

    background-color: ${COLOR_GRAY_LIGHT};
  }
`;

export const SliderContainer = Styled.span`
  background-color: ${COLOR_WHITE};
  border: 2px solid ${COLOR_GRAY_LIGHT};
  border-radius: 10px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  :before {
    background-color: ${COLOR_WHITE};
    border-radius: 5px;
    bottom: 0;
    content: '';
    height: 36px;
    left: 4px;
    margin: auto;
    position: absolute;
    top: 0;
    transition: 0.25s ease;
    width: 40px;
  }
`;
