import React from 'react';

import { useNavigateTo } from '../../lib/hooks';
import { COLOR_BLACK_0, COLOR_GRAY_DARK, COLOR_GREEN, COLOR_WHITE } from '../../lib/values';

import { Banner } from '../banner';
import { SimpleButton, TextButton } from '../button';
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
  ClipboardContainer,
  ImageCardContainer,
  ImageContainer,
  ImageFinalContainer,
  ImageMiddleContainer,
  ImageSecondaryTextContainer,
  ImageStateIndicator,
  URLContainer
} from './style.image.card.components';

export const Card: React.FC<ICard> = ({ active, clipboard, disabled, icon, image, link, onClick, secondaryText, text, title, type, ...rest }) => {
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const navigateTo = useNavigateTo();

  const handleButtonClick = (): void => {
    return onClick && onClick();
  };

  const handleCopyClipboard = (link?: string): void => {
    const el = document.createElement('input');

    el.value = link || '';
    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);

    return setBannerVisible(true);
  };

  if (type === 'image') {
    return (
      <>
        <ImageCardContainer {...rest}>
          <ImageContainer>
            {
              icon ?
                <Icon name={icon} size={'48px'} /> :
                <Image type={'circle'} height={'96px'} width={'96px'} src={image} />
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
            {
              link && !clipboard &&
              <TextButton onClick={(): void => navigateTo(link)} color={COLOR_GRAY_DARK}>View</TextButton>
            }
          </ImageFinalContainer>

          {
            clipboard &&
            <ClipboardContainer>
              <Text type={'label'} color={COLOR_WHITE}>URL:</Text>
              <URLContainer>
                <Text type={'paragraph'} color={COLOR_WHITE}>{link}</Text>
                <SimpleButton icon={'file_copy'} color={COLOR_BLACK_0} onClick={(): void => handleCopyClipboard(link)} />
              </URLContainer>
            </ClipboardContainer>
          }
        </ImageCardContainer>

        <Banner
          color={COLOR_GREEN}
          icon={'check'}
          text={'URL has been copied to clipboard'}
          visible={bannerVisible}
          onHide={(): void => setBannerVisible(false)} />
      </>
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
            <SimpleButton
              height={'48px'}
              icon={'close'}
              width={'48px'}

              onClick={handleButtonClick}
            />
          </IconButtonContainer>
        }
      </IconCardContainer>
    );
  }

  return null;
};

export interface ICard {
  active?: boolean;
  clipboard?: boolean;
  disabled?: boolean;
  icon?: string;
  image?: string;
  link?: string;
  onClick?: () => void;
  text?: string;
  secondaryText?: string;
  title?: string;
  type: 'image' | 'icon';
  width?: string;
}
