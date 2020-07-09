import React from 'react';

import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_BLACK_0, COLOR_GRAY_DARK, COLOR_WHITE } from '../../../utils/values';
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
              <SimpleButton icon={clipboardIcon} color={COLOR_BLACK_0} onClick={(): void => handleCopyClipboard(link)} />
            </URLContainer>
          </ClipboardContainer>
        }
      </ImageCardContainer>
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
