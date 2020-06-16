import React from 'react';

import { COLOR_GRAY_MEDIUM, COLOR_WHITE } from '../../lib/values';

import { Icon } from '../icon';
import { Text } from '../text';

import { BannerContainer, IconContainer } from './style.banner.components';

const DEFAULT_TIME = 5000;

export const Banner: React.FC<IProps> = ({ icon, text, visible, color, onHide, time = DEFAULT_TIME }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const initVisibilityTimeout = React.useCallback((): void => {
    setTimeout(() => {
      setIsVisible(false);

      return onHide && onHide();
    }, time);
  }, [onHide, time]);

  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  React.useEffect(() => {
    initVisibilityTimeout();
  }, [initVisibilityTimeout]);

  return (
    <BannerContainer isVisible={isVisible}>
      <IconContainer>
        <Icon name={icon} size={'24px'} color={color || COLOR_GRAY_MEDIUM} />
      </IconContainer>
      <Text type={'paragraph'} color={COLOR_WHITE}>{text}</Text>
    </BannerContainer>
  );
};

interface IProps {
  color?: string;
  icon: string;
  onHide?: () => void;
  text: string;
  time?: number;
  visible: boolean;
}
