import { format } from 'date-fns';
import React from 'react';

import { SimpleButton } from '../../../components/button';
import { IImageCard } from '../../../components/card';
import { Dropdown } from '../../../components/dropdown';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useCheckbox, useDropdown, useInput, useNavigateTo } from '../../../utils/hooks';
import { IBlog } from '../../../utils/interfaces';
import { COLOR_PURPLE, PAGINATION_DEFAULT, STRING_SERVER_ERROR } from '../../../utils/values';

import { IBlogsQueryData, ICategoriesQueryData, useBlogsQuery, useCategoriesQuery } from './list.graphql';
import { BlogListContainer, BodyContainer, FilterContainer, ListContainer } from './list.style';

export const ListBlogPage: React.FC<IListBlogPage> = () => {
  const [error, setError] = React.useState<string>('');
  const [blogs, setBlogs] = React.useState<IImageCard[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [blogsQuery, {
    error: blogsQueryError,
    data: blogsQueryData,
    loading: blogsQueryLoading
  }] = useBlogsQuery();

  const {
    error: categoriesQueryError,
    data: categoriesQueryData,
    loading: categoriesQueryLoading
  } = useCategoriesQuery();

  const navigateTo = useNavigateTo();

  const filterCategories = useDropdown([]);
  const filterActive = useCheckbox(true);
  const filterSearch = useInput('');

  const buildBlogsObject = React.useCallback((blogs: IBlog[]) => {
    const blogsCards: IImageCard[] = [];

    blogs.forEach(blog => {
      blogsCards.push({
        active: blog.active,
        image: blog.image,
        link: `/admin/blogs/view/${blog._id}`,
        primaryText: blog.categoriesString,
        primaryTextIcon: 'category',
        secondaryText: format(new Date(blog.created), 'MMMM do, yyyy'),
        secondaryTextIcon: 'event',
        title: blog.name
      });
    });

    setLoading(false);

    return setBlogs(blogsCards);
  }, []);

  const getBlogs = React.useCallback((active: boolean, category: string, name: string) => {
    const blogs = {
      active,
      name,
      category,
      pagination: PAGINATION_DEFAULT
    };

    blogsQuery({
      variables: {
        blogs
      }
    });
  }, [blogsQuery]);

  const handleBlogsQueryResponse = React.useCallback((data: IBlogsQueryData): void => {
    const { error, blogs } = data.blogs;

    if (error) return setError(error.message);
    if (!blogs) return;

    return buildBlogsObject(blogs);
  }, [buildBlogsObject]);

  const handleCategoriesQueryResponse = React.useCallback((data: ICategoriesQueryData): void => {
    const { error, categories } = data.categories;

    if (error) return setError(error.message);
    if (!categories) return;

    return filterCategories.setValues(categories);
  }, [filterCategories]);

  React.useEffect(() => {
    return getBlogs(filterActive.checked, filterCategories.value?._id || '', filterSearch.value);
  }, [filterActive.checked, filterCategories.value, filterSearch.value, getBlogs]);

  React.useEffect(() => {
    if (blogsQueryData) return handleBlogsQueryResponse(blogsQueryData);
  }, [blogsQueryData, handleBlogsQueryResponse]);

  React.useEffect(() => {
    if (categoriesQueryData) return handleCategoriesQueryResponse(categoriesQueryData);
  }, [categoriesQueryData, handleCategoriesQueryResponse]);

  React.useEffect(() => {
    if (blogsQueryError) {
      setLoading(false);

      return setError(STRING_SERVER_ERROR);
    }
  }, [blogsQueryError]);

  React.useEffect(() => {
    if (categoriesQueryError) return setError(STRING_SERVER_ERROR);
  }, [categoriesQueryError]);

  if (!!error) {
    return (
      <BlogListContainer empty={!!error}>
        <Header title={'Blogs'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error} />
      </BlogListContainer>
    );
  }

  return (
    <BlogListContainer>
      <Header title={'Blogs'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'} empty={blogs.length ? 1 : 0}>
          <List loading={blogsQueryLoading || loading} cards={blogs} error={!!blogsQueryError} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input
              icon={'search'}
              placeholder={'Blog name'}
              {...filterSearch} />
          </FormField>

          <FormField label={'Category:'}>
            <Dropdown
              defaultValue={'Any (default)'}
              icon={'category'}
              name={categoriesQueryLoading ? 'Reading categories list...' : filterCategories.value?.name || 'Any'}
              {...filterCategories} />
          </FormField>

          <FormField label={'Published:'}>
            <Toggle
              {...filterActive} />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/blogs/add')} />
      </Footer>
    </BlogListContainer>
  );
};

interface IListBlogPage { }
