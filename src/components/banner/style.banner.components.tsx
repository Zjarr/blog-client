import styled from 'styled-components';

import { alpha } from '../../lib/functions';
import { COLOR_BLACK_0, COLOR_BLACK_1, COLOR_GRAY_0, COLOR_WHITE_0 } from '../../lib/values';

const BANNER_VISIBLE_OPACITY = '1';
const BANNER_INVISIBLE_OPACITY = '0';

const BANNER_VISIBLE_TRANSFORM = 'translateX(-380px)';
const BANNER_INVISIBLE_TRANSFORM = 'translateX(0)';

const getBannerOpacity = (isVisible?: boolean): string => isVisible ? BANNER_VISIBLE_OPACITY : BANNER_INVISIBLE_OPACITY;
const getBannerTransform = (isVisible?: boolean): string => isVisible ? BANNER_VISIBLE_TRANSFORM : BANNER_INVISIBLE_TRANSFORM;

const getIconColor = (color?: string): string => color ? color : COLOR_GRAY_0;

export const BannerContainer = styled.div<{ isVisible: boolean }>`
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 32px;
  padding: 8px 16px;
  position: absolute;
  right: -332px;
  top: 48px;
  transition: .5s ease;
  width: 300px;

  background-color: ${COLOR_BLACK_0};
  box-shadow: 0 0 8px 0px ${alpha(COLOR_BLACK_1, 0.5)};
  color: ${COLOR_WHITE_0};

  opacity:  ${({ isVisible }): string => getBannerOpacity(isVisible)};
  transform: ${({ isVisible }): string => getBannerTransform(isVisible)};
`;

export const IconContainer = styled.div<{ color?: string }>`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: 32px;
  justify-content: center;
  margin-right: 16px;
  width: 32px;

  background-color: ${COLOR_WHITE_0};

  i {
    color: ${({ color }): string => getIconColor(color)};
  }
`;
