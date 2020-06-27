import Col from 'react-bootstrap/Col';
import Styled from 'styled-components';

const DEFAULT_COLUMN_PADDING = '0px 16px';

const CENTER_COLUMN_PADDING = '0px 8px';
const LEFT_COLUMN_PADDING = '0px 8px 0px 0px';
const RIGHT_COLUMN_PADDING = '0px 0px 0px 8px';

const NO_COLUMN_PADDING = '0px';

const getColumnPadding = (padding?: boolean, position?: string): string => {
  if (padding) return DEFAULT_COLUMN_PADDING;

  if (position === 'left') return LEFT_COLUMN_PADDING;
  if (position === 'center') return CENTER_COLUMN_PADDING;
  if (position === 'right') return RIGHT_COLUMN_PADDING;

  return NO_COLUMN_PADDING;
};

export const Column = Styled(Col) <{ padding?: boolean, position?: string }>`
  padding: ${({ padding, position }): string => getColumnPadding(padding, position)};
`;
