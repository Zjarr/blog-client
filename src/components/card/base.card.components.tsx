import React from 'react';

import { COLOR_GRAY_DARK } from '../../lib/values';

import { Button } from '../button';
import { Icon } from '../icon';
import { Image } from '../image';
import { Text } from '../text';

import {
  IconButtonContainer,
  IconCardContainer,
  IconContainer,
  IconTextContainer
} from './style.icon.card.components';

import {
  ImageCardContainer,
  ImageContainer,
  ImageFinalContainer,
  ImageMiddleContainer,
  ImageSecondaryTextContainer,
  ImageStateIndicator
} from './style.image.card.components';

export const Card: React.FC<IProps> = ({ active, disabled, icon, image, onClick, secondaryText, text, title, type, ...rest }) => {
  const handleButtonClick = (): void => {
    return onClick && onClick();
  };

  if (type === 'image') {
    return (
      <ImageCardContainer {...rest}>
        <ImageContainer>
          {
            icon ?
              <Icon name={icon} size={'40px'} /> :
              <Image type={'circle'} height={'80px'} width={'80px'} src={image} />
          }
        </ImageContainer>

        <ImageMiddleContainer>
          {
            title && <Text type={'subtitle'}>{title}</Text>
          }
          <ImageSecondaryTextContainer>
            {
              text && <Text type={'paragraph'}>{text}</Text>
            }
            {
              secondaryText && <Text type={'paragraph'}>{secondaryText}</Text>
            }
          </ImageSecondaryTextContainer>
        </ImageMiddleContainer>

        <ImageFinalContainer>
          <ImageStateIndicator active={active} />
          <Button as={'a'} type={'text'} text={'View'} color={COLOR_GRAY_DARK} />
        </ImageFinalContainer>
      </ImageCardContainer>
    );
  }

  if (type === 'icon') {
    return (
      <IconCardContainer {...rest}>
        {
          icon &&
          <IconContainer>
            <Icon name={icon} size={'24px'} />
          </IconContainer>
        }

        <IconTextContainer disabled={disabled} icon={icon} title={title}>
          {
            title && <Text type={'subtitle'}>{title}</Text>
          }
          {
            text && <Text type={'paragraph'} bold={!title}>{text}</Text>
          }
        </IconTextContainer>

        {
          !disabled &&
          <IconButtonContainer>
            <Button
              height={'40px'}
              icon={'close'}
              type={'color'}
              width={'40px'}

              onClick={handleButtonClick}
            />
          </IconButtonContainer>
        }
      </IconCardContainer>
    );
  }

  return null;
};

interface IProps {
  active?: boolean;
  disabled?: boolean;
  icon?: string;
  image?: string;
  onClick?: () => void;
  text?: string;
  secondaryText?: string;
  title?: string;
  type: 'image' | 'icon';
  width?: string;
}
