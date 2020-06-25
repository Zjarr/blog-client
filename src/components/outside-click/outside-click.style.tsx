import Styled from 'styled-components';

const DEFAULT_CONTAINER_WIDTH = '100%';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

export const OutsideClickContainer = Styled.div<{ width?: string }>`
  width: ${({ width }): string => getContainerWidth(width)};
`;
