import React from 'react';

import { TextButton } from '../button';
import { TitleText } from '../text';

import { HeaderContainer, TitleContainer } from './header.style';
import { COLOR_GRAY_DARK } from '../../utils/values';

export const Header: React.FC<IHeader> = ({ backButtonText, title }) => {
  return (
    <HeaderContainer>
      {
        backButtonText && <TextButton color={COLOR_GRAY_DARK} icon={'arrow_back_ios'}>{backButtonText}</TextButton>
      }

      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    </HeaderContainer>
  );
};

interface IHeader {
  backButtonText?: string;
  title: string;
}
