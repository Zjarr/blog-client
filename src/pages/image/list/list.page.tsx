import React from 'react';

import { Banner } from '../../../components/banner';
import { SimpleButton } from '../../../components/button';
import { IImageCard } from '../../../components/card';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useInput, useNavigateTo } from '../../../utils/hooks';
import { IImage } from '../../../utils/interfaces';

import { COLOR_PURPLE, COLOR_RED, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../../utils/values';

import { IImagesQueryData, useImagesQuery } from './list.graphql';
import { BodyContainer, FilterContainer, ImageListContainer, ListContainer } from './list.style';

export const ListImagePage: React.FC<IListImagePage> = () => {
  const navigateTo = useNavigateTo();

  const [imagesQuery, {
    error: imagesQueryError,
    data: imagesQueryData,
    loading: imagesQueryLoading
  }] = useImagesQuery();

  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [images, setImages] = React.useState<IImageCard[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const filterActive = useInput('', true);
  const filterSearch = useInput('');

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const buildImagesObject = React.useCallback((images: IImage[]) => {
    const imagesCards: IImageCard[] = [];

    images.forEach(image => {
      imagesCards.push({
        active: image.active,
        image: image.url,
        link: `/admin/images/view/${image._id}`,
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

  const handleimagesQueryResponse = React.useCallback((data: IImagesQueryData): void => {
    const { error, images } = data.images;

    if (error) return showBannerMessage(error.message);
    if (!images) return;

    return buildImagesObject(images);
  }, [buildImagesObject]);

  React.useEffect(() => {
    return getImages(filterActive.checked, filterSearch.value);
  }, [filterActive.checked, filterSearch.value, getImages]);

  React.useEffect(() => {
    if (imagesQueryData) return handleimagesQueryResponse(imagesQueryData);
  }, [imagesQueryData, handleimagesQueryResponse]);

  React.useEffect(() => {
    if (!imagesQueryError) return;

    setLoading(false);

    return showBannerMessage(STRING_SERVER_ERROR);
  }, [imagesQueryError]);

  return (
    <ImageListContainer>
      <Header title={'Images'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'} empty={images.length ? 1 : 0}>
          <List loading={imagesQueryLoading || loading} cards={images} error={!!imagesQueryError} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input icon={'search'} placeholder={'Image name'} {...filterSearch} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle {...filterActive} />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/images/add')} />
      </Footer>

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </ImageListContainer>
  );
};

interface IListImagePage { }
