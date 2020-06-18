import React from 'react';

import { Button } from '../button';
import { Text } from '../text';

import { PaginatorContainer } from './style.paginator.components';

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
      <Button icon={'arrow_back_ios'} type={'text'} onClick={handlePrevClick} />
      <Text type={'paragraph'}>{textToShow}</Text>
      <Button icon={'arrow_forward_ios'} type={'text'} onClick={handleNextClick} />
    </PaginatorContainer>
  );
};

interface IPaginator {
  current: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  total: number;
}
