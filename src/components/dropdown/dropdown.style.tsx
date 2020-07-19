import Styled from 'styled-components';

import {
  BORDER_RADIUS_SMALL,
  COLOR_BLACK,
  COLOR_BLACK_0,
  COLOR_GRAY_LIGHT,
  COLOR_GRAY_MEDIUM,
  COLOR_PURPLE,
  COLOR_WHITE,
  TEXT_NORMAL
} from '../../utils/values';

const DEFAULT_TRIGGER_PADDING = '8px 48px 8px 16px';
const DEFAULT_TRIGGER_ICON_ROTATE = 'rotate(0deg)';

const DEFAULT_VALUE_CONTAINER_OPACITY = '0';
const DEFAULT_VALUE_CONTAINER_PADDING = '0px 8px';
const DEFAULT_VALUE_CONTAINER_VISIBILITY = 'hidden';

const TRIGGER_WITH_ICON_PADDING = '8px 48px';
const TRIGGER_ICON_ROTATE = 'rotate(180deg)';

const VALUE_CONTAINER_OPEN_OPACITY = '1';
const VALUE_CONTAINER_OPEN_PADDING = '8px';
const VALUE_CONTAINER_OPEN_VISIBILITY = 'visible';

const getTriggerBorderColor = (active?: boolean, disabled?: boolean): string => {
  if (disabled) {
    return COLOR_BLACK_0;
  }

  return active ? COLOR_PURPLE : COLOR_GRAY_LIGHT;
};

const getTriggerIconColor = (disabled?: boolean): string => disabled ? COLOR_BLACK_0 : COLOR_BLACK;
const getTriggerPadding = (icon?: string): string => icon ? TRIGGER_WITH_ICON_PADDING : DEFAULT_TRIGGER_PADDING;
const getTriggerRotate = (open?: boolean): string => open ? TRIGGER_ICON_ROTATE : DEFAULT_TRIGGER_ICON_ROTATE;

const getValueContainerOpacity = (open?: boolean): string => open ? VALUE_CONTAINER_OPEN_OPACITY : DEFAULT_VALUE_CONTAINER_OPACITY;
const getValueContainerPadding = (open?: boolean): string => open ? VALUE_CONTAINER_OPEN_PADDING : DEFAULT_VALUE_CONTAINER_PADDING;
const getValueContainerVisibility = (open?: boolean): string => open ? VALUE_CONTAINER_OPEN_VISIBILITY : DEFAULT_VALUE_CONTAINER_VISIBILITY;

export const DropdownContainer = Styled.div<{ width?: string }>`
  display: inline-block;
  position: relative;
  width: 100%;
`;

export const DropdownTrigger = Styled.button<{ disabled: boolean, icon?: string, open: boolean }>`
  align-items: center;
  cursor: pointer;
  display: inline-block;
  height: 48px;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
  transition: 0.25s ease;
  white-space: nowrap;
  width: 100%;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_SMALL};
  color:${COLOR_BLACK};
  font-size: ${TEXT_NORMAL};

  border: 2px solid ${({ disabled, open }): string => getTriggerBorderColor(open, disabled)};
  padding: ${({ icon }): string => getTriggerPadding(icon)};

  :disabled {
    cursor: default;
  }
`;

export const DropdownTriggerCaret = Styled.div<{ disabled: boolean, open: boolean }>`
  i {
    right: 16px;
    top: 12px;
    transition: 0.25s ease;

    color:${({ disabled }): string => getTriggerIconColor(disabled)};
    transform: ${({ open }): string => getTriggerRotate(open)};
  }
`;

export const DropdownTriggerContainer = Styled.div`
  height: 48px;
  position: relative;
  width: 100%;

  i {
    bottom: 16px;
    cursor: pointer;
    pointer-events: none;
    position: absolute;

    :nth-child(2) {
      left: 18px;

      color: ${COLOR_GRAY_MEDIUM};
    }
  }
`;

export const DropdownValueContainer = Styled.div<{ open: boolean }>`
  left: 0;
  max-height: 296px;
  opacity: 0;
  overflow: scroll;
  position: absolute;
  right: 0;
  top: 60px;
  transition: 0.25s ease;
  visibility: hidden;
  z-index: 1;

  background-color: ${COLOR_WHITE};
  border: 2px solid ${COLOR_PURPLE};
  border-radius: ${BORDER_RADIUS_SMALL};

  opacity: ${({ open }): string => getValueContainerOpacity(open)};
  padding: ${({ open }): string => getValueContainerPadding(open)};
  visibility: ${({ open }): string => getValueContainerVisibility(open)};

  p {
    margin: 4px 0;
    text-align: center;
    width: 100%;

    color: ${COLOR_GRAY_LIGHT};
  }
`;

export const DropdownValue = Styled.div`
  height: 48px;
  margin-bottom: 8px;
  text-align: right;
  width: 100%;

  border-radius: ${BORDER_RADIUS_SMALL};

  :last-child {
    margin-bottom: 0;
  }
`;
