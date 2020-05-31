import styled from 'styled-components';

import { COLOR_GRAY_0, COLOR_GREEN_0, COLOR_RED_0, COLOR_WHITE_0, COLOR_WHITE_1, TEXT_NORMAL } from '../../lib/values';

export const ToggleContainer = styled.label`
  display: block;
  height: 48px;
  position: relative;
  width: 96px;
`;

export const CheckboxContainer = styled.input`
  height: 0;
  opacity: 0;
  width: 0;

  + span {
    background-color: ${COLOR_RED_0};
    transition: .25s ease;
  }

  :checked + span {
    background-color: ${COLOR_GREEN_0};
    transition: .25s ease;

    :before {
      transform: translateX(44px);
    }
  }

  :disabled + span {
    cursor: default;

    background-color: ${COLOR_WHITE_1};
  }
`;

export const SliderContainer = styled.span`
  background-color: ${COLOR_WHITE_0};
  border: 2px solid ${COLOR_WHITE_1};
  border-radius: 10px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  :before {
    background-color: ${COLOR_WHITE_0};
    border-radius: 5px;
    bottom: 0;
    content: '';
    height: 36px;
    left: 4px;
    margin: auto;
    position: absolute;
    top: 0;
    transition: .125s ease;
    width: 40px;
  }
`;

export const Label = styled.label`
  color: ${COLOR_GRAY_0};
  display: block;
  font-family: Proxima Nova Bold;
  font-size: ${TEXT_NORMAL};
  margin: 0 0 4px 12px;
`;
