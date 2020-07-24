import Styled from 'styled-components';

import { BORDER_RADIUS_SMALL, COLOR_BLACK } from '../../../utils/values';

const DEFAULT_BOTTOM_LINE_ROTATE = 'rotate(0)';
const DEFAULT_MIDDLE_LINE_ROTATE = 'rotate(0)';
const DEFAULT_TOP_LINE_ROTATE = 'rotate(0)';

const OPEN_BOTTOM_LINE_ROTATE = 'rotate(45deg)';
const OPEN_MIDDLE_LINE_ROTATE = 'rotate(-45deg)';
const OPEN_TOP_LINE_ROTATE = 'rotate(45deg)';

const getBottomLineRotate = (open: boolean): string => open ? OPEN_BOTTOM_LINE_ROTATE : DEFAULT_BOTTOM_LINE_ROTATE;
const getMiddleLineRotate = (open: boolean): string => open ? OPEN_MIDDLE_LINE_ROTATE : DEFAULT_MIDDLE_LINE_ROTATE;
const getTopLineRotate = (open: boolean): string => open ? OPEN_TOP_LINE_ROTATE : DEFAULT_TOP_LINE_ROTATE;

export const MobileButtonContainer = Styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  height: 40px;
  padding: 8px;
  width: 48px;
`;

export const MenuLinesContainer = Styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

const MobileMenuLine = Styled.div<{ open: boolean }>`
  height: 3px;
  transition: 0.25s ease;

  background-color: ${COLOR_BLACK};
  border-radius: ${BORDER_RADIUS_SMALL};
`;

export const TopLine = Styled(MobileMenuLine)`
  transform-origin: center left;
  width: 21px;

  transform: ${({ open }): string => getTopLineRotate(open)};
`;

export const MiddleLine = Styled(MobileMenuLine)`
  width: 30px;

  transform: ${({ open }): string => getMiddleLineRotate(open)};
`;

export const BottomLine = Styled(MobileMenuLine)`
  transform-origin: center right;
  width: 21px;

  transform: ${({ open }): string => getBottomLineRotate(open)};
`;
