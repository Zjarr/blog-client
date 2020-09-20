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
import { ICategory } from '../../../utils/interfaces';
import { COLOR_PURPLE, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../../utils/values';

import { ICategoriesQueryData, useCategoriesQuery } from './list.graphql';
import { BodyContainer, CategoryListContainer, FilterContainer, ListContainer } from './list.style';

export const ListCategoryPage: React.FC<IListCategoryPage> = () => {
  const [categories, setCategories] = React.useState<IImageCard[]>([]);
  const [error, setError] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);

  const [categoriesQuery, {
    error: categoriesQueryError,
    data: categoriesQueryData,
    loading: categoriesQueryLoading
  }] = useCategoriesQuery();

  const navigateTo = useNavigateTo();

  const filterActive = useCheckbox(true);
  const filterSearch = useInput('');

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

    if (error) return setError(error.message);
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
    if (categoriesQueryError) {
      setLoading(false);

      return setError(STRING_SERVER_ERROR);
    }
  }, [categoriesQueryError]);

  if (!!error) {
    return (
      <CategoryListContainer empty={!!error}>
        <Header title={'Categories'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error} />
      </CategoryListContainer>
    );
  }

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
    </CategoryListContainer>
  );
};

interface IListCategoryPage { }
