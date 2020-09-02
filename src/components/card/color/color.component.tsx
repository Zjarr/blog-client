import React from 'react';

import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_WHITE } from '../../../utils/values';

import { TextButton } from '../../button';
import { Icon } from '../../icon';

import { ButtonContainer, ColorContainer, IconContainer, MiddleContainer, Name, Number } from './color.style';

export const ColorCard: React.FC<IColorCard> = ({ button, color, icon, link, name, number }) => {
  const navigateTo = useNavigateTo();

  return (
    <ColorContainer color={color}>
      <IconContainer>
        <Icon name={icon} />
      </IconContainer>

      <MiddleContainer>
        <Number>{number}</Number>
        <Name>{name}</Name>
      </MiddleContainer>

      <ButtonContainer>
        <TextButton onClick={(): void => navigateTo(link)} color={COLOR_WHITE}>{button}</TextButton>
      </ButtonContainer>
    </ColorContainer>
  );
};

interface IColorCard {
  button: string;
  color: string;
  icon: string;
  link: string;
  name: string;
  number: number | string;
}
