import React from 'react';

import { SimpleButton } from '../../button';
import { Icon } from '../../icon';
import { Text } from '../../text';

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
};

export interface IIconCard {
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  text?: string;
  title?: string;
  width?: string;
}
