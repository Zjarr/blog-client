import React from 'react';

import { TextButton } from '../button';
import { ParagraphText } from '../text';

import { PaginatorContainer } from './paginator.style';

export const Paginator: React.FC<IPaginator> = ({ current, onPrevClick, onNextClick, total }) => {
  const [textToShow, setTextToShow] = React.useState<string>('');

  const handlePrevClick = (): void => {
    return onPrevClick();
  };

  const handleNextClick = (): void => {
    return onNextClick();
  };

  React.useEffect(() => {
    setTextToShow(`Page ${current} of ${total}`);
  }, [current, total]);

  return (
    <PaginatorContainer>
      <TextButton icon={'arrow_back_ios'} onClick={handlePrevClick} />
      <ParagraphText>{textToShow}</ParagraphText>
      <TextButton icon={'arrow_forward_ios'} onClick={handleNextClick} />
    </PaginatorContainer>
  );
};

interface IPaginator {
  current: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  total: number;
}
