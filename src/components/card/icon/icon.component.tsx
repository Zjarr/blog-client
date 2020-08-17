import React from 'react';

import { BORDER_RADIUS_SMALL } from '../../../utils/values';

import { SimpleButton } from '../../button';
import { Icon } from '../../icon';
import { Skeleton } from '../../skeleton';
import { ParagraphText, SubtitleText } from '../../text';

import {
  IconButtonContainer,
  IconCardContainer,
  IconContainer,
  IconTextContainer
} from './icon.style';

export const IconCard: React.FC<IIconCard> = ({ disabled, icon, loading, onClick, text, title }) => {
  const handleButtonClick = (): void => {
    return onClick && onClick();
  };

  if (loading) {
    return (
      <IconCardContainer>
        <IconContainer>
          <Skeleton height={'56px'} width={'56px'} />
        </IconContainer>

        <IconTextContainer icon={'group'}>
          <Skeleton border={BORDER_RADIUS_SMALL} height={'28px'} margin={'0px 0px 8px'} width={'80%'} />
          <Skeleton border={BORDER_RADIUS_SMALL} height={'16px'} width={'50%'} />
        </IconTextContainer>

        <IconButtonContainer>
          <Skeleton border={BORDER_RADIUS_SMALL} height={'48px'} />
        </IconButtonContainer>
      </IconCardContainer>
    );
  }

  return (
    <IconCardContainer>
      {
        icon &&
        <IconContainer>
          <Icon name={icon} size={'24px'} />
        </IconContainer>
      }

      <IconTextContainer icon={icon}>
        {
          title && <SubtitleText margin={'0px 0px 8px'}>{title}</SubtitleText>
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

interface IIconCard {
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  onClick?: () => void;
  text?: string;
  title?: string;
  width?: string;
}
