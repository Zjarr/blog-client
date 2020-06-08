import styled from 'styled-components';

import { COLOR_BLACK, COLOR_WHITE } from '../../lib/values';

export const ImageUpdateButton = styled.button`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 100%;
  justify-content: center;
  padding: 16px;
  position: absolute;
  width: 100%;

  background-color: ${COLOR_BLACK};
  color: ${COLOR_WHITE};
`;
