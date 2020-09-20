import React from 'react';

import { useInput } from '../../utils/hooks';
import { IImage } from '../../utils/interfaces';
import { COLOR_RED, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../utils/values';

import { Banner } from '../banner';
import { IImageCard } from '../card';
import { Input } from '../input';
import { List } from '../list';
import { Modal } from '../modal';
import { Paginator } from '../paginator';
import { TitleText } from '../text';

import { IImagesQueryData, useImagesQuery } from './image-list.graphql';
import { ImageListContainer, ListContainer, PaginatorContainer, SearchContainer, TitleContainer } from './image-list.style';

export const ImageList: React.FC<IImageList> = ({ onClose, visible }) => {
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [images, setImages] = React.useState<IImageCard[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [imagesQuery, {
    error: imagesQueryError,
    data: imagesQueryData,
    loading: imagesQueryLoading
  }] = useImagesQuery();

  const filterSearch = useInput('');

  const handleBannerMessageHide = (): void => {
    return setBannerMessage('');
  };

  const showBannerMessage = (message: string): void => {
    return setBannerMessage(message);
  };

  const handleCloseRequest = (): void => {
    return onClose && onClose();
  };

  const getImages = React.useCallback((active: boolean, name: string) => {
    imagesQuery({
      variables: {
        images: {
          active,
          name,
          pagination: PAGINATION_DEFAULT
        }
      }
    });
  }, [imagesQuery]);

  const buildImagesObject = React.useCallback((images: IImage[]) => {
    const imagesCards: IImageCard[] = [];

    images.forEach(image => {
      imagesCards.push({
        active: image.active,
        clipboard: true,
        image: image.url,
        link: image.url,
        primaryText: image.description,
        primaryTextIcon: 'description',
        secondaryText: image.alt,
        secondaryTextIcon: 'alt_route',
        title: image.name
      });
    });

    setLoading(false);

    return setImages(imagesCards);
  }, []);

  const handleimagesQueryResponse = React.useCallback((data: IImagesQueryData): void => {
    const { error, images } = data.images;

    if (error) return showBannerMessage(error.message);
    if (!images) return;

    return buildImagesObject(images);
  }, [buildImagesObject]);

  React.useEffect(() => {
    return getImages(true, filterSearch.value);
  }, [filterSearch.value, getImages]);

  React.useEffect(() => {
    if (imagesQueryData) return handleimagesQueryResponse(imagesQueryData);
  }, [imagesQueryData, handleimagesQueryResponse]);

  React.useEffect(() => {
    if (!imagesQueryError) return;

    setLoading(false);

    return showBannerMessage(STRING_SERVER_ERROR);
  }, [imagesQueryError]);

  return (
    <>
      <Modal onClose={handleCloseRequest} visible={visible} closeButton>
        <ImageListContainer>
          <TitleContainer>
            <TitleText>Stored images</TitleText>
          </TitleContainer>

          <SearchContainer>
            {
              !imagesQueryError &&
              <Input
                icon={'search'}
                placeholder={'Image name'}
                {...filterSearch} />
            }
          </SearchContainer>

          <ListContainer>
            <List loading={imagesQueryLoading || loading} cards={images} error={!!imagesQueryError} />
          </ListContainer>

          {
            !imagesQueryError &&
            <PaginatorContainer>
              <Paginator current={1} total={1} onPrevClick={(): void => { }} onNextClick={(): void => { }} />
            </PaginatorContainer>
          }
        </ImageListContainer>
      </Modal>

      <Banner
        center
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={!!bannerMessage} />
    </>
  );
};

interface IImageList {
  onClose: () => void;
  visible: boolean;
}
