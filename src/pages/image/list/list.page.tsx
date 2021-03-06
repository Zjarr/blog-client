import React from 'react';

import { SimpleButton } from '../../../components/button';
import { IImageCard } from '../../../components/card';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useCheckbox, useInput, useNavigateTo } from '../../../utils/hooks';
import { IImage } from '../../../utils/interfaces';
import { COLOR_PURPLE, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../../utils/values';

import { IImagesQueryData, useImagesQuery } from './list.graphql';
import { BodyContainer, FilterContainer, ImageListContainer, ListContainer } from './list.style';

export const ListImagePage: React.FC<IListImagePage> = () => {
  const [error, setError] = React.useState<string>('');
  const [images, setImages] = React.useState<IImageCard[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [imagesQuery, {
    error: imagesQueryError,
    data: imagesQueryData,
    loading: imagesQueryLoading
  }] = useImagesQuery();

  const navigateTo = useNavigateTo();

  const filterActive = useCheckbox(true);
  const filterSearch = useInput('');

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

  const handleImagesQueryResponse = React.useCallback((data: IImagesQueryData): void => {
    const { error, images } = data.images;

    if (error) return setError(error.message);
    if (!images) return;

    return buildImagesObject(images);
  }, [buildImagesObject]);

  React.useEffect(() => {
    return getImages(filterActive.checked, filterSearch.value);
  }, [filterActive.checked, filterSearch.value, getImages]);

  React.useEffect(() => {
    if (imagesQueryData) return handleImagesQueryResponse(imagesQueryData);
  }, [imagesQueryData, handleImagesQueryResponse]);

  React.useEffect(() => {
    if (imagesQueryError) {
      setLoading(false);

      return setError(STRING_SERVER_ERROR);
    }
  }, [imagesQueryError]);

  if (!!error) {
    return (
      <ImageListContainer empty={!!error}>
        <Header title={'Images'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error} />
      </ImageListContainer>
    );
  }

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
    </ImageListContainer>
  );
};

interface IListImagePage { }
