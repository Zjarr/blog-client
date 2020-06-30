import React from 'react';

import { useNavigateTo } from '../../utils/hooks';
import { COLOR_GRAY_DARK } from '../../utils/values';

import { TextButton } from '../button';
import { TitleText } from '../text';

import { HeaderContainer, TitleContainer } from './header.style';

export const Header: React.FC<IHeader> = ({ backButtonLink, backButtonText, title }) => {
  const navigateTo = useNavigateTo();

  return (
    <HeaderContainer>
      {
        backButtonText && backButtonLink &&
        <TextButton
          color={COLOR_GRAY_DARK}
          icon={'arrow_back_ios'}
          onClick={(): void => navigateTo(backButtonLink)}>{backButtonText}</TextButton>
      }

      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    </HeaderContainer>
  );
};

interface IHeader {
  backButtonLink?: string;
  backButtonText?: string;
  title: string;
}
