import styled from 'styled-components';

import {
  COLOR_BLACK_0,
  COLOR_BLACK_0_0,
  COLOR_GRAY_1,
  COLOR_PURPLE_0,
  COLOR_WHITE_0,
  COLOR_WHITE_1,
  TEXT_NORMAL
} from '../../lib/values';

const DEFAULT_ITEM_CONTAINER_OPACITY = '0';
const DEFAULT_ITEM_CONTAINER_PADDING = '0px 8px';
const DEFAULT_ITEM_CONTAINER_TOP = '60px';
const DEFAULT_ITEM_CONTAINER_VISIBILITY = 'hidden';
const DEFAULT_CONTAINER_WIDTH = 'auto';
const DEFAULT_TRIGGER_TEXT_COLOR = COLOR_BLACK_0;
const DEFAULT_TRIGGER_CURSOR = 'pointer';
const DEFAULT_TRIGGER_PADDING = '8px 40px 8px 16px';
const DEFAULT_TRIGGER_ICON_ROTATE = 'rotate(0deg)';

const ITEM_CONTAINER_OPEN_OPACITY = '1';
const ITEM_CONTAINER_OPEN_PADDING = '8px';
const ITEM_CONTAINER_OPEN_VISIBILITY = 'visible';
const ITEM_CONTAINER_WITH_LABEL_TOP = '80px';

const TRIGGER_TEXT_COLOR_DISABLED = COLOR_GRAY_1;
const TRIGGER_CURSOR_DISABLED = 'not-allowed';
const TRIGGER_WITH_ICON_PADDING = '8px 40px';
const TRIGGER_ICON_ROTATE = 'rotate(180deg)';

const getContainerWidth = (width?: string): string => width ? width : DEFAULT_CONTAINER_WIDTH;

const getTriggerBorderColor = (active?: boolean): string => active ? COLOR_PURPLE_0 : COLOR_WHITE_1;
const getTriggerTextColor = (disabled?: boolean): string => disabled ? TRIGGER_TEXT_COLOR_DISABLED : DEFAULT_TRIGGER_TEXT_COLOR;
const getTriggerCursor = (disabled?: boolean): string => disabled ? TRIGGER_CURSOR_DISABLED : DEFAULT_TRIGGER_CURSOR;
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

export const DropdownTrigger = styled.button<{ disabled: boolean, icon?: string, open: boolean }>`
  align-items: center;
  border-radius: 10px;
  display: inline-block;
  height: 48px;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: .25s ease;
  width: 100%;

  background-color: ${COLOR_WHITE_0};
  font-size: ${TEXT_NORMAL};

  border: 2px solid ${({ open }): string => getTriggerBorderColor(open)};
  color:${({ disabled }): string => getTriggerTextColor(disabled)};
  cursor: ${({ disabled }): string => getTriggerCursor(disabled)};
  padding: ${({ icon }): string => getTriggerPadding(icon)};
`;

export const DropdownTriggerCaret = styled.div<{ disabled: boolean, open: boolean }>`
  i {
    right: 8px;
    top: 12px;

    color:${({ disabled }): string => getTriggerTextColor(disabled)};
    transform: ${({ open }): string => getTriggerRotate(open)};
    transition: .25s ease;
  }
`;

export const DropdownTriggerContainer = styled.div`
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
  transition: .25s ease;

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

  background-color: ${COLOR_BLACK_0_0};

  :hover {
    background-color: ${COLOR_WHITE_1};
  }

  :last-child {
    margin-bottom: 0;
  }
`;
