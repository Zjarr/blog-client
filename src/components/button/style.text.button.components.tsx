import Styled from 'styled-components';

import { COLOR_BLACK, COLOR_BLACK_0, COLOR_GRAY_LIGHT, TEXT_NORMAL } from '../../lib/values';

const DEFAULT_CONTAINER_COLOR = COLOR_BLACK;
const DEFAULT_CONTAINER_HEIGHT = '32px';
const DEFAULT_CONTAINER_TEXT_ALIGN = 'center';
const DEFAULT_CONTAINER_WIDTH = 'auto';

const getContainerColor = (color?: string): string => color ? color : DEFAULT_CONTAINER_COLOR;
const getContainerHeight = (height?: string): string => height ? height : DEFAULT_CONTAINER_HEIGHT;
const getContainerTextAlign = (align?: string): string => align ? align : DEFAULT_CONTAINER_TEXT_ALIGN;
const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

export const TextButtonContainer = Styled.button<{
  align?: string,
  color?: string,
  disabled?: boolean,
  height?: string,
  iconOnly?: boolean,
  width?: string
}>`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0 16px;
  transition: 0.25s ease;

  background-color: ${COLOR_BLACK_0};
  border: 2px solid ${COLOR_BLACK_0};
  font-size: ${TEXT_NORMAL};

  color: ${({ color }): string => getContainerColor(color)};
  height: ${({ height }): string => getContainerHeight(height)};
  justify-content: ${({ align }): string => getContainerTextAlign(align)};
  width: ${({ width }): string => getContainerWidth(width)};

  i {
    margin: 0 16px 0 0;
  }

  :disabled {
    cursor: not-allowed;

    color: ${COLOR_GRAY_LIGHT};
  }
`;
