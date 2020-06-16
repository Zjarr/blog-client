import React from 'react';

import { Button } from '../button';
import { Icon } from '../icon';
import { Text } from '../text';

import { IconButtonContainer, IconCardContainer, IconContainer, IconTextContainer } from './style.icon.card.components';

export const Card: React.FC<IProps> = ({ disabled, icon, onClick, text, title, type, ...rest }) => {
  const handleButtonClick = (): void => {
    return onClick && onClick();
  };

  if (type === 'image') {
    return null;
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
            text && <Text type={'paragraph'}>{text}</Text>
          }
        </IconTextContainer>

        <IconButtonContainer>
          {
            !disabled &&
            <Button
              height={'40px'}
              icon={'close'}
              type={'color'}
              width={'40px'}

              onClick={handleButtonClick}
            />
          }
        </IconButtonContainer>
      </IconCardContainer>
    );
  }

  return null;
};

interface IProps {
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
  text?: string;
  title?: string;
  type: 'image' | 'icon';
  width?: string;
}
