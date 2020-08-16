import React from 'react';

import { COLOR_GRAY_MEDIUM, COLOR_WHITE } from '../../utils/values';

import { Icon } from '../icon';
import { ParagraphText } from '../text';

import { BannerContainer, IconContainer, TextContainer } from './banner.style';

const DEFAULT_TIME = 5000;

export const Banner: React.FC<IBanner> = ({ icon, text, visible, color, onHide, time = DEFAULT_TIME }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState<boolean>(true);

  const initVisibilityTimeout = React.useCallback((): void => {
    setTimeout(() => {
      if (mounted) {
        setIsVisible(false);

        return onHide && onHide();
      }
    }, time);
  }, [mounted, time, onHide]);

  React.useEffect(() => {
    if (visible) {
      setIsVisible(visible);

      return initVisibilityTimeout();
    }

    return (): void => {
      setMounted(false);
    };
  }, [mounted, visible, initVisibilityTimeout]);

  return (
    <BannerContainer isVisible={isVisible}>
      <IconContainer>
        <Icon name={icon} size={'24px'} color={color || COLOR_GRAY_MEDIUM} />
      </IconContainer>

      <TextContainer>
        <ParagraphText color={COLOR_WHITE}>{text}</ParagraphText>
      </TextContainer>
    </BannerContainer>
  );
};

interface IBanner {
  color?: string;
  icon: string;
  onHide?: () => void;
  text: string;
  time?: number;
  visible: boolean;
}
