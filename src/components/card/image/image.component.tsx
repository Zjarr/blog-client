import React from 'react';

import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_BLACK_0, COLOR_GRAY_DARK, COLOR_GREEN, COLOR_WHITE } from '../../../utils/values';

import { Banner } from '../../banner';
import { SimpleButton, TextButton } from '../../button';
import { Icon } from '../../icon';
import { Image } from '../../image';
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

export const ImageCard: React.FC<IImageCard> = ({ active, clipboard, icon, image, link, secondaryText, text, title, width }) => {
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const navigateTo = useNavigateTo();

  const handleCopyClipboard = (link?: string): void => {
    const el = document.createElement('input');

    el.value = link || '';
    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);

    return setBannerVisible(true);
  };

  return (
    <>
      <ImageCardContainer width={width}>
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
              text && <ParagraphText>{text}</ParagraphText>
            }
            {
              secondaryText && <ParagraphText>{secondaryText}</ParagraphText>
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
};

export interface IImageCard {
  active?: boolean;
  clipboard?: boolean;
  icon?: string;
  image?: string;
  link?: string;
  text?: string;
  secondaryText?: string;
  title?: string;
  width?: string;
}
