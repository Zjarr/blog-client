import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_BLACK, COLOR_BLACK_0, COLOR_GRAY_LIGHT, TEXT_NORMAL } from '../../lib/values';

const DEFAULT_CONTAINER_COLOR = COLOR_BLACK;
const DEFAULT_CONTAINER_HEIGHT = '32px';
const DEFAULT_CONTAINER_TEXT_ALIGN = 'center';
const DEFAULT_CONTAINER_WIDTH = 'auto';

const DEFAULT_ICON_MARGIN_RIGHT = '0 16px 0 0';

const ICON_ONLY_ICON_MARGIN_RIGHT = '0px';

const getContainerColor = (color?: string): string => color ? color : DEFAULT_CONTAINER_COLOR;
const getContainerHeight = (height?: string): string => height ? height : DEFAULT_CONTAINER_HEIGHT;
const getContainerTextAlign = (align?: string): string => align ? align : DEFAULT_CONTAINER_TEXT_ALIGN;
const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getIconMarginRight = (iconOnly?: boolean): string => iconOnly ? ICON_ONLY_ICON_MARGIN_RIGHT : DEFAULT_ICON_MARGIN_RIGHT;

export const TextButtonContainer = Styled.button<{
  align?: string,
  color?: string,
  disabled?: boolean,
  height?: string,
  iconOnly?: boolean,
  width?: string
}>`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0 16px;
  transition: 0.25s ease;

  background-color: ${COLOR_BLACK_0};
  border: 2px solid ${COLOR_BLACK_0};
  border-radius: ${BORDER_RADIUS_SMALL};
  font-size: ${TEXT_NORMAL};

  color: ${({ color }): string => getContainerColor(color)};
  height: ${({ height }): string => getContainerHeight(height)};
  justify-content: ${({ align }): string => getContainerTextAlign(align)};
  width: ${({ width }): string => getContainerWidth(width)};

  i {
    margin: ${({ iconOnly }): string => getIconMarginRight(iconOnly)};
  }

  :hover {
    text-decoration: none;
    color: inherit;
  }

  :disabled {
    cursor: not-allowed;

    color: ${COLOR_GRAY_LIGHT};
  }
`;
