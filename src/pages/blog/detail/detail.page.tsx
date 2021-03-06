import React from 'react';

import { SimpleButton } from '../../../components/button';
import { IconCard } from '../../../components/card';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { ImageList } from '../../../components/image-list';
import { Input } from '../../../components/input';
import { Renderer } from '../../../components/renderer';
import { LabelText, ParagraphText } from '../../../components/text';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { useCheckbox, useDropdown, useInput, useNavigateTo, useTextArea } from '../../../utils/hooks';
import { IBlog, ICategory, ISource } from '../../../utils/interfaces';
import { COLOR_GRAY_MEDIUM, COLOR_PURPLE, STRING_FIELD_REQUIRED, STRING_SERVER_ERROR } from '../../../utils/values';

import { IBlogData, IBlogMutationInput, ICategoriesQueryData, useBlogMutation, useBlogQuery, useCategoriesQuery } from './detail.graphql';
import { BodyContainer, DetailContainer, EditorButtonsContainer, EmptyListContainer, SimpleListContainer } from './detail.style';

export const DetailBlogPage: React.FC<IDetailBlog> = ({ action, param }) => {
  const [blogData, setBlogData] = React.useState<IBlog>();
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [error, setError] = React.useState<string>('');
  const [fields, setFields] = React.useState<boolean>(false);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [imagesModalVisible, setImagesModalVisible] = React.useState<boolean>(false);
  const [notFound, setNotFound] = React.useState<boolean>(false);
  const [previewBlog, setPreviewBlog] = React.useState<boolean>(false);
  const [sources, setSources] = React.useState<ISource[]>([]);

  const [blogQuery, {
    error: blogQueryError,
    data: blogQueryData,
    loading: blogQueryLoading
  }] = useBlogQuery();

  const [blogMutation, {
    error: blogMutationError,
    data: blogMutationData,
    loading: blogMutationLoading
  }] = useBlogMutation();

  const {
    error: categoriesQueryError,
    data: categoriesQueryData,
    loading: categoriesQueryLoading
  } = useCategoriesQuery();

  const navigateTo = useNavigateTo();

  const blogCategories = useDropdown([]);
  const blogActive = useCheckbox();
  const blogBody = useTextArea();
  const blogDescription = useTextArea();
  const blogImage = useInput();
  const blogName = useInput();
  const blogSlug = useInput();
  const sourceName = useInput();
  const sourceURL = useInput();

  const mapCategoryIDs = (): string[] => {
    return categories.map(category => category._id!);
  };

  const mapCategoryObject = React.useCallback((ids: string[]): ICategory[] => {
    return blogCategories.values.filter(category => ids.includes(category._id!)) as ICategory[];
  }, [blogCategories.values]);

  const buildBlogObject = (): void => {
    const blogMutationData: IBlogMutationInput = {
      blog: {
        active: blogActive.checked,
        body: blogBody.value,
        categories: mapCategoryIDs(),
        description: blogDescription.value,
        image: blogImage.value,
        name: blogName.value,
        sources,
        slug: blogSlug.value
      }
    };

    if (param) blogMutationData.blog._id = param;

    blogMutation({
      variables: { ...blogMutationData }
    });
  };

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/blogs');
    if (action === 'edit') return navigateTo(`/admin/blogs/view/${param}`);
  };

  const isValidForm = (): boolean => {
    if (!blogBody.value) blogBody.setError(STRING_FIELD_REQUIRED);
    if (!blogDescription.value) blogDescription.setError(STRING_FIELD_REQUIRED);
    if (!blogImage.value) blogImage.setError(STRING_FIELD_REQUIRED);
    if (!blogName.value) blogName.setError(STRING_FIELD_REQUIRED);
    if (!blogSlug.value) blogSlug.setError(STRING_FIELD_REQUIRED);

    if (!blogBody.value || !blogDescription.value || !blogImage.value || !blogName.value || !blogSlug.value) return false;

    return true;
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/blogs/edit/${param}`);
    if (action === 'edit' || action === 'add') {
      if (!isValidForm()) return;

      return buildBlogObject();
    };
  };

  const togglePreviewClick = (): void => {
    return setPreviewBlog(!previewBlog);
  };

  const addCategory = (): void => {
    if (!blogCategories.value?._id) blogCategories.setError(STRING_FIELD_REQUIRED);

    const isCategoryAlreadyAdded = !!categories.find((listCategory: ICategory) => listCategory._id === blogCategories.value?._id);

    if (isCategoryAlreadyAdded) blogCategories.setError('This category is already added.');
    if (!blogCategories.value?._id || isCategoryAlreadyAdded) return;

    setCategories([...categories, { ...blogCategories.value as ICategory }]);

    return blogCategories.setValue(null);
  };

  const removeCategory = (index: number): void => {
    categories.splice(index, 1);

    return setCategories([...categories]);
  };

  const addSource = (): void => {
    if (!sourceName.value) sourceName.setError(STRING_FIELD_REQUIRED);
    if (!sourceURL.value) sourceURL.setError(STRING_FIELD_REQUIRED);

    if (!sourceName.value || !sourceURL.value) return;

    const source: ISource = {
      name: sourceName.value,
      url: sourceURL.value
    };

    sourceName.setValue('');
    sourceURL.setValue('');

    return setSources([...sources, { ...source }]);
  };

  const removeSource = (index: number): void => {
    sources.splice(index, 1);

    return setSources([...sources]);
  };

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add blog');
    if (action === 'edit') setHeaderTitle('Edit blog');
    if (action === 'view') setHeaderTitle('Blog details');
  }, []);

  const handleBlogResponse = React.useCallback((data: IBlogData, type: string): void => {
    const { error, blog } = data.blog;

    if (error) return setError(error.message);

    if (param && !blog) {
      setNotFound(true);

      return setError('We could not find this blog.');
    }

    if (!blog) return;

    if (type === 'mutation') {
      return navigateTo(`/admin/blogs/view/${blog._id}`);
    }

    return setBlogData(blog);
  }, [param, navigateTo]);

  const handleCategoriesQueryResponse = React.useCallback((data: ICategoriesQueryData): void => {
    const { error, categories } = data.categories;

    if (error) return setError(error.message);
    if (!categories) return;

    return blogCategories.setValues(categories);
  }, [blogCategories]);

  const setBlogFields = React.useCallback((blog: IBlog): void => {
    if (fields) return;

    blogActive.setChecked(blog.active);
    blogBody.setValue(blog.body);
    blogDescription.setValue(blog.description);
    blogImage.setValue(blog.image);
    blogName.setValue(blog.name);
    blogSlug.setValue(blog.slug);

    setSources(blog.sources || []);

    return setFields(true);
  }, [blogActive, blogBody, blogDescription, blogImage, blogName, blogSlug, fields]);

  React.useEffect(() => {
    if (!param) return;

    return blogQuery({
      variables: {
        blog: {
          _id: param
        }
      }
    });
  }, [param, blogQuery]);

  React.useEffect(() => {
    return initPageProperties(action);
  }, [action, initPageProperties]);

  React.useEffect(() => {
    if (!blogData) return;

    const blogCategoriesIds = mapCategoryObject(blogData.categories || []);

    return setCategories(blogCategoriesIds);
  }, [blogData, mapCategoryObject]);

  React.useEffect(() => {
    if (blogData) return setBlogFields(blogData);
  }, [blogData, setBlogFields]);

  React.useEffect(() => {
    if (blogMutationData) return handleBlogResponse(blogMutationData, 'mutation');
  }, [blogMutationData, handleBlogResponse]);

  React.useEffect(() => {
    if (blogQueryData) return handleBlogResponse(blogQueryData, 'query');
  }, [blogQueryData, handleBlogResponse]);

  React.useEffect(() => {
    if (categoriesQueryData) return handleCategoriesQueryResponse(categoriesQueryData);
  }, [categoriesQueryData, handleCategoriesQueryResponse]);

  React.useEffect(() => {
    if (blogMutationError) return setError(STRING_SERVER_ERROR);
  }, [blogMutationError]);

  React.useEffect(() => {
    if (blogQueryError) return setError(STRING_SERVER_ERROR);
  }, [blogQueryError]);

  React.useEffect(() => {
    if (categoriesQueryError) return setError(STRING_SERVER_ERROR);
  }, [categoriesQueryError]);

  if (notFound || !!error) {
    return (
      <DetailContainer empty={notFound || !!error}>
        <Header title={headerTitle} backButtonText={'Blogs'} backButtonLink={'/admin/blogs'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error ? error : undefined} />
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Blogs'} backButtonLink={'/admin/blogs'} />

      <BodyContainer>
        <Column xl={8} position={'left'}>
          {
            action === 'view' || previewBlog ?
              <FormField label={'Result:'} minHeight={'calc(100vh - 232px)'}>
                <Renderer source={blogBody.value} />
              </FormField>
              :
              <FormField label={'Body:'} height={'calc(100vh - 232px)'}>
                <TextArea
                  disabled={action === 'view' || blogMutationLoading}
                  loading={blogQueryLoading}
                  placeholder={'Once upon a time...'}
                  {...blogBody} />
              </FormField>
          }

          {
            action !== 'view' &&
            <EditorButtonsContainer>
              <SimpleButton
                onClick={(): void => setImagesModalVisible(true)}
                icon={'image'}
                width={'auto'}>View images</SimpleButton>

              <SimpleButton
                onClick={togglePreviewClick}
                color={COLOR_PURPLE}
                icon={'visibility'}
                width={'auto'}>{previewBlog ? 'Edit body' : 'Preview result'}</SimpleButton>
            </EditorButtonsContainer>
          }
        </Column>

        <Column xl={4} position={'right'}>
          <FormField label={'Image:'}>
            <Image
              height={'180px'}
              shape={'square'}
              width={'100%'}
              src={blogImage.value} />
          </FormField>

          <FormField label={'Image URL:'}>
            <Input
              disabled={action === 'view' || blogMutationLoading}
              icon={'image'}
              loading={blogQueryLoading}
              placeholder={'Blog image url'}
              {...blogImage} />
          </FormField>

          <FormField label={'Title:'}>
            <Input
              icon={'title'}
              disabled={action === 'view' || blogMutationLoading}
              loading={blogQueryLoading}
              placeholder={'Awesome blog title'}
              {...blogName} />
          </FormField>

          <FormField label={'Slug:'}>
            <Input
              disabled={action === 'view' || blogMutationLoading}
              icon={'star'}
              loading={blogQueryLoading}
              placeholder={'unique-blog-name'}
              {...blogSlug} />
          </FormField>

          <FormField label={'Description:'} height={'176px'}>
            <TextArea
              disabled={action === 'view' || blogMutationLoading}
              loading={blogQueryLoading}
              placeholder={'Your brand new blog description'}
              {...blogDescription} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle
              disabled={action === 'view' || blogMutationLoading}
              loading={blogQueryLoading}
              {...blogActive} />
          </FormField>

          {
            action !== 'view' &&
            <FormField label={'Categories:'}>
              <Dropdown
                disabled={blogMutationLoading}
                icon={'category'}
                name={categoriesQueryLoading ? 'Reading categories list...' : blogCategories.value?.name || 'Select one'}
                width={'calc(100% - 64px)'}
                {...blogCategories} />
              <SimpleButton icon={'add'} onClick={addCategory} />
            </FormField>
          }

          <SimpleListContainer>
            <LabelText>{action === 'view' ? 'Categories:' : 'Selected categories:'}</LabelText>
            {
              categories.length > 0 && categories.map((category, index) =>
                <IconCard
                  onClick={(): void => removeCategory(index)}
                  key={`category-${category}-${index}`}
                  disabled={action === 'view' || blogMutationLoading}
                  title={category.name} />
              )
            }
            {
              categories.length === 0 &&
              <EmptyListContainer>
                <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops! There are no categories.</ParagraphText>
              </EmptyListContainer>
            }
          </SimpleListContainer>

          {
            action !== 'view' &&
            <FormField label={'Sources:'}>
              <Input
                disabled={blogMutationLoading}
                icon={blogMutationLoading ? 'more_horiz' : 'public'}
                placeholder={'Source name'}
                width={'calc(50% - 40px)'}
                {...sourceName} />

              <Input
                disabled={blogMutationLoading}
                icon={blogMutationLoading ? 'more_horiz' : 'link'}
                placeholder={'Source url'}
                width={'calc(50% - 40px)'}
                {...sourceURL} />

              <SimpleButton icon={'add'} onClick={addSource} />
            </FormField>
          }

          <SimpleListContainer>
            <LabelText>{action === 'view' ? 'Sources:' : 'Selected sources:'}</LabelText>
            {
              sources.length > 0 && sources.map((source: ISource, index: number) =>
                <IconCard
                  onClick={(): void => removeSource(index)}
                  key={`source-${source.name}-${index}`}
                  disabled={action === 'view' || blogMutationLoading}
                  title={source.name}
                  text={source.url} />
              )
            }
            {
              sources.length === 0 &&
              <EmptyListContainer>
                <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops! There are no sources.</ParagraphText>
              </EmptyListContainer>
            }
          </SimpleListContainer>
        </Column>
      </BodyContainer>

      <Footer>
        {
          (action === 'add' || action === 'edit') &&
          <SimpleButton
            disabled={blogMutationLoading}
            icon={blogMutationLoading ? 'more_horiz' : 'clear'}
            onClick={handleCancelClick} />
        }

        <SimpleButton
          color={COLOR_PURPLE}
          disabled={blogQueryLoading || blogMutationLoading}
          icon={blogQueryLoading || blogMutationLoading ? 'more_horiz' : action === 'view' ? 'edit' : 'done'}
          onClick={handleDoneClick} />
      </Footer>

      <ImageList
        onClose={(): void => setImagesModalVisible(false)}
        visible={imagesModalVisible} />
    </DetailContainer>
  );
};

interface IDetailBlog {
  action?: string | null;
  param?: string | null;
}
