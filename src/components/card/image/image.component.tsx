import React from 'react';

import { useNavigateTo } from '../../../utils/hooks';
import { BORDER_RADIUS_SMALL, COLOR_BLACK_0, COLOR_GRAY_DARK, COLOR_GRAY_MEDIUM, COLOR_WHITE } from '../../../utils/values';

import { SimpleButton, TextButton } from '../../button';
import { Icon } from '../../icon';
import { Image } from '../../image';
import { Skeleton } from '../../skeleton';
import { LabelText, ParagraphText, SubtitleText } from '../../text';

import {
  ClipboardContainer,
  ImageCardContainer,
  ImageContainer,
  ImageFinalContainer,
  ImageMiddleContainer,
  ImageSecondaryTextContainer,
  ImageStateIndicator,
  URLContainer
} from './image.style';

export const ImageCard: React.FC<IImageCard> = ({
  active,
  clipboard,
  icon,
  image,
  link,
  loading,
  padding,
  primaryText,
  primaryTextIcon,
  secondaryText,
  secondaryTextIcon,
  title,
  width
}) => {
  const [clipboardIcon, setClipBoardIcon] = React.useState<string>('file_copy');

  const navigateTo = useNavigateTo();

  const toggleClipboardIcon = (): void => {
    setClipBoardIcon('done');

    setTimeout(() => {
      setClipBoardIcon('file_copy');
    }, 2000);
  };

  const handleCopyClipboard = (link?: string): void => {
    const el = document.createElement('input');

    el.value = link || '';
    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);

    return toggleClipboardIcon();
  };

  if (loading) {
    return (
      <ImageCardContainer padding={padding} width={width}>
        <ImageContainer>
          <Skeleton height={'96px'} width={'96px'} />
        </ImageContainer>

        <ImageMiddleContainer>
          <Skeleton border={BORDER_RADIUS_SMALL} height={'28px'} margin={'0px 0px 16px'} width={'80%'} />

          <ImageSecondaryTextContainer>
            <Skeleton border={BORDER_RADIUS_SMALL} height={'16px'} margin={'0px 0px 8px'} width={'calc(100% - 16px)'} />
            <Skeleton border={BORDER_RADIUS_SMALL} height={'16px'} width={'50%'} />
          </ImageSecondaryTextContainer>
        </ImageMiddleContainer>

        <ImageFinalContainer>
          <Skeleton height={'8px'} margin={'14px 0px 0px'} width={'8px'} />
          <Skeleton border={BORDER_RADIUS_SMALL} height={'16px'} margin={'0px 0px 4px'} />
        </ImageFinalContainer>
      </ImageCardContainer>
    );
  }

  return (
    <ImageCardContainer padding={padding} width={width}>
      <ImageContainer>
        {
          icon ?
            <Icon name={icon} size={'48px'} /> :
            <Image shape={'circle'} height={'96px'} width={'96px'} src={image} />
        }
      </ImageContainer>

      <ImageMiddleContainer>
        {
          title && <SubtitleText>{title}</SubtitleText>
        }
        <ImageSecondaryTextContainer>
          {
            primaryText && <ParagraphText color={COLOR_GRAY_MEDIUM} icon={primaryTextIcon}>{primaryText}</ParagraphText>
          }
          {
            secondaryText && <ParagraphText color={COLOR_GRAY_MEDIUM} icon={secondaryTextIcon}>{secondaryText}</ParagraphText>
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
          <LabelText color={COLOR_WHITE}>URL:</LabelText>
          <URLContainer>
            <ParagraphText color={COLOR_WHITE}>{link}</ParagraphText>
            <SimpleButton icon={clipboardIcon} color={COLOR_BLACK_0} onClick={(): void => handleCopyClipboard(link)} />
          </URLContainer>
        </ClipboardContainer>
      }
    </ImageCardContainer>
  );
};

export interface IImageCard {
  active?: boolean;
  clipboard?: boolean;
  icon?: string;
  image?: string;
  link?: string;
  loading?: boolean;
  padding?: string;
  primaryText?: string;
  primaryTextIcon?: string;
  secondaryText?: string;
  secondaryTextIcon?: string;
  title?: string;
  width?: string;
}
