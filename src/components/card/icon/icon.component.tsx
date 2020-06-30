import React from 'react';

import { SimpleButton } from '../../button';
import { Icon } from '../../icon';
import { ParagraphText, SubtitleText } from '../../text';

import {
  IconButtonContainer,
  IconCardContainer,
  IconContainer,
  IconTextContainer
} from './icon.style';

export const IconCard: React.FC<IIconCard> = ({ disabled, icon, onClick, text, title }) => {
  const handleButtonClick = (): void => {
    return onClick && onClick();
  };

  return (
    <IconCardContainer>
      {
        icon &&
        <IconContainer>
          <Icon name={icon} size={'24px'} />
        </IconContainer>
      }

      <IconTextContainer disabled={disabled} icon={icon} title={title}>
        {
          title && <SubtitleText>{title}</SubtitleText>
        }
        {
          text && <ParagraphText bold={!title}>{text}</ParagraphText>
        }
      </IconTextContainer>

      {
        !disabled &&
        <IconButtonContainer>
          <SimpleButton
            height={'48px'}
            icon={'clear'}
            width={'48px'}

            onClick={handleButtonClick}
          />
        </IconButtonContainer>
      }
    </IconCardContainer>
  );
};

export interface IIconCard {
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  text?: string;
  title?: string;
  width?: string;
}
