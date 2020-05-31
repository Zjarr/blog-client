import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import {
  COLOR_BLACK_0,
  COLOR_BLACK_1,
  COLOR_GRAY_1,
  COLOR_PURPLE_0,
  COLOR_WHITE_0,
  COLOR_WHITE_1,
  TEXT_NORMAL
} from '../../lib/values';

const COLOR_TRANSPARENT = alpha(COLOR_BLACK_1, 0);

const DEFAULT_ITEM_CONTAINER_OPACITY = '0';
const DEFAULT_ITEM_CONTAINER_PADDING = '0px 8px';
const DEFAULT_ITEM_CONTAINER_TOP = '60px';
const DEFAULT_ITEM_CONTAINER_VISIBILITY = 'hidden';
const DEFAULT_CONTAINER_WIDTH = 'auto';
const DEFAULT_TRIGGER_PADDING = '8px 40px 8px 8px';
const DEFAULT_TRIGGER_ICON_ROTATE = 'rotate(0deg)';

const ITEM_CONTAINER_OPEN_OPACITY = '1';
const ITEM_CONTAINER_OPEN_PADDING = '8px';
const ITEM_CONTAINER_OPEN_VISIBILITY = 'visible';
const ITEM_CONTAINER_WITH_LABEL_TOP = '80px';

const TRIGGER_WITH_ICON_PADDING = '8px 40px';
const TRIGGER_ICON_ROTATE = 'rotate(180deg)';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getTriggerBorderColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : COLOR_WHITE_1;
const getTriggerPadding = (icon?: string): string => icon ? TRIGGER_WITH_ICON_PADDING : DEFAULT_TRIGGER_PADDING;
const getTriggerRotate = (open?: boolean): string => open ? TRIGGER_ICON_ROTATE : DEFAULT_TRIGGER_ICON_ROTATE;

const getItemContainerOpacity = (open?: boolean): string => open ? ITEM_CONTAINER_OPEN_OPACITY : DEFAULT_ITEM_CONTAINER_OPACITY;
const getItemContainerPadding = (open?: boolean): string => open ? ITEM_CONTAINER_OPEN_PADDING : DEFAULT_ITEM_CONTAINER_PADDING;
const getItemContainerTop = (label?: string): string => label ? ITEM_CONTAINER_WITH_LABEL_TOP : DEFAULT_ITEM_CONTAINER_TOP;
const getItemContainerVisibility = (open?: boolean): string => open ? ITEM_CONTAINER_OPEN_VISIBILITY : DEFAULT_ITEM_CONTAINER_VISIBILITY;

export const DropdownContainer = styled.div<{ width?: string }>`
  display: inline-block;
  min-width: 260px;
  position: relative;

  width: ${({ width }): string => getContainerWidth(width)};
`;

export const DropdownTrigger = styled.button<{ icon?: string, open: boolean }>`
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  height: 48px;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: .125s;
  width: 100%;

  background-color: ${COLOR_WHITE_0};
  color: ${COLOR_BLACK_0};
  font-size: ${TEXT_NORMAL};

  border: 2px solid ${({ open }): string => getTriggerBorderColor(open)};
  padding: ${({ icon }): string => getTriggerPadding(icon)};
`;

export const DropdownTriggerContainer = styled.div<{ open: boolean }>`
  height: 48px;
  position: relative;
  width: 100%;

  i {
    bottom: 16px;
    cursor: pointer;
    pointer-events: none;
    position: absolute;

    :nth-child(2) {
      left: 16px;

      color: ${COLOR_GRAY_1};
    }
  
    :nth-child(3) {
      right: 8px;
      top: 12px;

      color: ${COLOR_BLACK_0};

      transform: ${({ open }): string => getTriggerRotate(open)};
      transition: .125s ease;
    }
  }
`;

export const DropdownItemContainer = styled.div<{ open: boolean, label?: string }>`
  border-radius: 10px;
  left: 0;
  max-height: 296px;
  opacity: 0;
  overflow: scroll;
  position: absolute;
  right: 0;
  z-index: 1;
  visibility: hidden;
  transition: .125s ease;

  background-color: ${COLOR_WHITE_0};
  border: 2px solid ${COLOR_PURPLE_0};

  top: ${({ label }): string => getItemContainerTop(label)};
  opacity: ${({ open }): string => getItemContainerOpacity(open)};
  padding: ${({ open }): string => getItemContainerPadding(open)};
  visibility: ${({ open }): string => getItemContainerVisibility(open)};

  p {
    margin: 4px 0;
    text-align: center;
    width: 100%;

    color: ${COLOR_GRAY_1};
  }
`;

export const DropdownItem = styled.div`
  border-radius: 10px;
  height: 48px;
  margin-bottom: 8px;
  text-align: right;
  width: 100%;

  background-color: ${COLOR_TRANSPARENT};

  :hover {
    background-color: ${COLOR_WHITE_1};
  }

  :last-child {
    margin-bottom: 0;
  }
`;
