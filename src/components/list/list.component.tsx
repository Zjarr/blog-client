import React from 'react';

import Rocket from '../../assets/images/rocket.png';

import { useInput } from '../../utils/hooks';

import { IImageCard, ImageCard } from '../card';
import { Input } from '../input';
import { Paginator } from '../paginator';
import { ParagraphText } from '../text';

import {
  CardContainer,
  EmptyListContainer,
  ImageContainer,
  ListContainer,
  PaginatorContainer,
  RocketImage,
  SearchContainer,
  TextContainer,
  CardsListContainer
} from './list.style';
import { COLOR_GRAY_MEDIUM } from '../../utils/values';

const skeletonCards = 12;

export const List: React.FC<IList> = ({ cards, loading, onPrevClick, onSearch, onNextClick }) => {
  const searchInput = useInput('');

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.target.value);
    }

    return searchInput.onChange(e);
  };

  const handlePrevClick = (): void => {
    return onPrevClick && onPrevClick();
  };

  const handleNextClick = (): void => {
    return onNextClick && onNextClick();
  };

  return (
    <ListContainer>
      <SearchContainer>
        <Input icon={'search'} placeholder={'Search by name'} type={'text'} value={searchInput.value} onChange={handleSearchOnChange} />
      </SearchContainer>

      <CardsListContainer empty={cards.length ? 0 : 1}>
        {
          loading && [...Array(skeletonCards)].map((_, index) =>
            <CardContainer lg={6} key={`card-${index}`}>
              <ImageCard loading />
            </CardContainer>
          )
        }
        {
          !loading && cards && cards.map((card, index) =>
            <CardContainer lg={6} key={`card-${index}`}>
              <ImageCard {...card} />
            </CardContainer>
          )
        }
        {
          !loading && !cards.length &&
          <EmptyListContainer>
            <ImageContainer>
              <RocketImage src={Rocket} />
            </ImageContainer>

            <TextContainer>
              <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops!</ParagraphText>
              <ParagraphText color={COLOR_GRAY_MEDIUM}>This looks empty. Did you add some fuel?</ParagraphText>
            </TextContainer>
          </EmptyListContainer>
        }
      </CardsListContainer>

      {
        !loading && cards.length > 0 && <PaginatorContainer>
          <Paginator current={1} total={1} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        </PaginatorContainer>
      }
    </ListContainer>
  );
};

interface IList {
  cards: IImageCard[];
  loading: boolean;
  onPrevClick?: () => void;
  onSearch?: (searchString: string) => void;
  onNextClick?: () => void;
};
