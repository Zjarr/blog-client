import React from 'react';

import { Banner } from '../../../components/banner';
import { SimpleButton } from '../../../components/button';
import { IconCard } from '../../../components/card';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
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
import { useDropdown, useInput, useNavigateTo, useTextArea } from '../../../utils/hooks';
import { ICategory, ISource } from '../../../utils/interfaces';
import { COLOR_GRAY_MEDIUM, COLOR_PURPLE, STRING_FIELD_REQUIRED, STRING_SERVER_ERROR, COLOR_RED } from '../../../utils/values';

import { ICategoriesQueryData, useCategoriesQuery } from './detail.graphql';
import { BodyContainer, DetailContainer, EditorButtonsContainer, EmptyListContainer, SimpleListContainer } from './detail.style';

export const DetailBlogPage: React.FC<IDetailBlog> = ({ action, param }) => {
  const [imagesModalVisible, setImagesModalVisible] = React.useState<boolean>(false);
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [previewBlog, setPreviewBlog] = React.useState<boolean>(false);
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [sources, setSources] = React.useState<ISource[]>([]);

  const {
    error: categoriesQueryError,
    data: categoriesQueryData,
    loading: categoriesQueryLoading
  } = useCategoriesQuery();

  const navigateTo = useNavigateTo();
  const category = useDropdown([]);
  const blogBody = useTextArea();
  const sourceName = useInput();
  const sourceURL = useInput();

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/blogs');
    if (action === 'edit') return navigateTo(`/admin/blogs/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/blogs/edit/${param}`);
  };

  const togglePreviewClick = (): void => {
    return setPreviewBlog(!previewBlog);
  };

  const addCategory = (): void => {
    if (!category.value?._id) category.setError(STRING_FIELD_REQUIRED);

    const isCategoryAlreadyAdded = !!categories.find((listCategory: ICategory) => listCategory._id === category.value?._id);

    if (isCategoryAlreadyAdded) category.setError('This category is already added.');

    if (!category.value?._id || isCategoryAlreadyAdded) return;

    setCategories([...categories, { ...category.value as ICategory }]);

    return category.setValue(null);
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

  const handleCategoriesQueryResponse = React.useCallback((data: ICategoriesQueryData): void => {
    const { error, categories } = data.categories;

    if (error) return showBannerMessage(error.message);
    if (!categories) return;

    return category.setValues(categories);
  }, [category]);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  React.useEffect(() => {
    if (categoriesQueryData) return handleCategoriesQueryResponse(categoriesQueryData);
  }, [categoriesQueryData, handleCategoriesQueryResponse]);

  React.useEffect(() => {
    if (!categoriesQueryError) return;

    return showBannerMessage(STRING_SERVER_ERROR);
  }, [categoriesQueryError]);

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
                  disabled={action === 'view'}
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
              src={''} />
          </FormField>

          <FormField label={'Image:'}>
            <Input icon={'image'} placeholder={'Blog image url'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Title:'}>
            <Input icon={'title'} placeholder={'Awesome blog title'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Slug:'}>
            <Input icon={'star'} placeholder={'unique-blog-name'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Description:'} height={'176px'}>
            <TextArea
              placeholder={'Your brand new blog description'}
              disabled={action === 'view'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle disabled={action === 'view'} />
          </FormField>

          {
            action !== 'view' &&
            <FormField label={'Categories:'}>
              <Dropdown
                icon={'category'}
                name={categoriesQueryLoading ? 'Reading categories list...' : category.value?.name || 'Select one'}
                width={'calc(100% - 64px)'}
                {...category} />
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
                  disabled={action === 'view'}
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
              <Input icon={'public'} placeholder={'Source name'} width={'calc(50% - 40px)'} {...sourceName} />
              <Input icon={'link'} placeholder={'Source url'} width={'calc(50% - 40px)'} {...sourceURL} />
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
                  disabled={action === 'view'}
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
          (action === 'add' || action === 'edit') && <SimpleButton icon={'clear'} onClick={handleCancelClick} />
        }
        <SimpleButton color={COLOR_PURPLE} icon={action === 'view' ? 'edit' : 'done'} onClick={handleDoneClick} />
      </Footer>

      <ImageList
        onClose={(): void => setImagesModalVisible(false)}
        visible={imagesModalVisible} />

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </DetailContainer>
  );
};

interface IDetailBlog {
  action?: string | null;
  param?: string | null;
}
