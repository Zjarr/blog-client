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
import { ICategory } from '../../../utils/interfaces';
import { COLOR_PURPLE, COLOR_RED, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../../utils/values';

import { ICategoriesQueryData, useCategoriesQuery } from './list.graphql';
import { BodyContainer, CategoryListContainer, FilterContainer, ListContainer } from './list.style';

export const ListCategoryPage: React.FC<IListCategoryPage> = () => {
  const navigateTo = useNavigateTo();

  const [categoriesQuery, {
    error: categoriesQueryError,
    data: categoriesQueryData,
    loading: categoriesQueryLoading
  }] = useCategoriesQuery();

  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [categories, setCategories] = React.useState<IImageCard[]>([]);
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

  const buildCategoriesObject = React.useCallback((categories: ICategory[]) => {
    const categoryCards: IImageCard[] = [];

    categories.forEach(category => {
      categoryCards.push({
        active: category.active,
        icon: category.icon,
        link: `/admin/categories/view/${category._id}`,
        primaryText: category.description,
        primaryTextIcon: 'description',
        secondaryText: category.icon,
        secondaryTextIcon: 'category',
        title: category.name
      });
    });

    setLoading(false);

    return setCategories(categoryCards);
  }, []);

  const getCategories = React.useCallback((active: boolean, name: string) => {
    categoriesQuery({
      variables: {
        categories: {
          active,
          name,
          pagination: PAGINATION_DEFAULT
        }
      }
    });
  }, [categoriesQuery]);

  const handleCategoriesQueryResponse = React.useCallback((data: ICategoriesQueryData): void => {
    const { error, categories } = data.categories;

    if (error) return showBannerMessage(error.message);
    if (!categories) return;

    return buildCategoriesObject(categories);
  }, [buildCategoriesObject]);

  React.useEffect(() => {
    return getCategories(filterActive.checked, filterSearch.value);
  }, [filterActive.checked, filterSearch.value, getCategories]);

  React.useEffect(() => {
    if (categoriesQueryData) return handleCategoriesQueryResponse(categoriesQueryData);
  }, [categoriesQueryData, handleCategoriesQueryResponse]);

  React.useEffect(() => {
    if (!categoriesQueryError) return;

    setLoading(false);

    return showBannerMessage(STRING_SERVER_ERROR);
  }, [categoriesQueryError]);

  return (
    <CategoryListContainer>
      <Header title={'Categories'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'} empty={categories.length ? 1 : 0}>
          <List loading={categoriesQueryLoading || loading} cards={categories} error={!!categoriesQueryError} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input icon={'search'} placeholder={'Category name'} {...filterSearch} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle {...filterActive} />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/categories/add')} />
      </Footer>

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </CategoryListContainer>
  );
};

interface IListCategoryPage { }
