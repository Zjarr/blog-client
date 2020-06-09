import styled from 'styled-components';

import { COLOR_BLACK, COLOR_BLACK_0, TEXT_NORMAL, COLOR_GRAY_MEDIUM } from '../../lib/values';

export const TextButtonContainer = styled.button<{
  disabled?: boolean,
  iconOnly?: boolean
}>`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  margin: 0;
  padding: 0 16px;
  transition: .25s ease;
  width: auto;

  background-color: ${COLOR_BLACK_0};
  border: 2px solid ${COLOR_BLACK_0};
  color: ${COLOR_BLACK};
  font-size: ${TEXT_NORMAL};

  i {
    margin: 0 16px 0 0;
  }

  :disabled {
    cursor: not-allowed;

    color: ${COLOR_GRAY_MEDIUM};
  }
`;
