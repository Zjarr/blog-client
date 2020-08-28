import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, BORDER_RADIUS_SMALL, BOX_SHADOW_OVERLAY, COLOR_BLACK, COLOR_WHITE, MEDIA_SM, MEDIA_XL } from '../../utils/values';

const DEFAULT_BANNER_LEFT = '208px';
const DEFAULT_BANNER_OPACITY = '0';
const DEFAULT_BANNER_TRANSFORM = 'translateY(0)';

const CENTER_BANNER_LEFT = '16px';
const VISIBLE_BANNER_OPACITY = '1';
const VISIBLE_BANNER_TRANSFORM_SM = 'translateY(-88px)';
const VISIBLE_BANNER_TRANSFORM_XL = 'translateY(-96px)';
const VISIBLE_BANNER_TRANSFORM_XS = 'translateY(-80px)';

const getBannerLeft = (center?: boolean): string => center ? CENTER_BANNER_LEFT : DEFAULT_BANNER_LEFT;
const getBannerOpacity = (isVisible?: boolean): string => isVisible ? VISIBLE_BANNER_OPACITY : DEFAULT_BANNER_OPACITY;

const getBannerTransform = (isVisible?: boolean, viewport?: string): string => {
  if (!isVisible) return DEFAULT_BANNER_TRANSFORM;

  if (viewport === 'SM') return VISIBLE_BANNER_TRANSFORM_SM;
  if (viewport === 'XL') return VISIBLE_BANNER_TRANSFORM_XL;

  return VISIBLE_BANNER_TRANSFORM_XS;
};

export const BannerContainer = Styled.div<{ isVisible: boolean, center?: boolean }>`
  align-items: center;
  bottom: -64px;
  display: flex;
  height: 64px;
  justify-content: center;
  left: 16px;
  margin: auto;
  max-width: calc(100% - 32px);
  padding: 8px 16px;
  position: fixed;
  right: 16px;
  transition: 0.25s ease;
  width: 480px;
  z-index: 2;

  background-color: ${COLOR_BLACK};
  border-radius: ${BORDER_RADIUS_SMALL};
  box-shadow: ${BOX_SHADOW_OVERLAY};
  color: ${COLOR_WHITE};

  opacity:  ${({ isVisible }): string => getBannerOpacity(isVisible)};
  transform: ${({ isVisible }): string => getBannerTransform(isVisible, 'XS')};

  ${MEDIA_SM} {
    transform: ${({ isVisible }): string => getBannerTransform(isVisible, 'SM')};
  }

  ${MEDIA_XL} {
    left: ${({ center }): string => getBannerLeft(center)};
    transform: ${({ isVisible }): string => getBannerTransform(isVisible, 'XL')};
  }
`;

export const IconContainer = Styled.div<{ color?: string }>`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  margin-right: 16px;
  width: 32px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const TextContainer = Styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
