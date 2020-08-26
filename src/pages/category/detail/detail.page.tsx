import React from 'react';

import { Banner } from '../../../components/banner';
import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { useCheckbox, useDropdown, useInput, useNavigateTo, useTextArea } from '../../../utils/hooks';
import { ICategory } from '../../../utils/interfaces';
import { COLOR_PURPLE, COLOR_RED, STRING_SERVER_ERROR, VALUE_CATEGORIES } from '../../../utils/values';

import { ICategoryData, ICategoryMutationInput, useCategoryMutation, useCategoryQuery } from './detail.graphql';
import { BodyContainer, DetailContainer } from './detail.style';

export const DetailCategoryPage: React.FC<IDetailCategory> = ({ action, param }) => {
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [notFound, setNotFound] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState<ICategory>();
  const [fields, setFields] = React.useState<boolean>(false);

  const [categoryQuery, {
    error: categoryQueryError,
    data: categoryQueryData,
    loading: categoryQueryLoading
  }] = useCategoryQuery();

  const [categoryMutation, {
    error: categoryMutationError,
    data: categoryMutationData,
    loading: categoryMutationLoading
  }] = useCategoryMutation();

  const navigateTo = useNavigateTo();

  const categoriesDropdown = useDropdown(VALUE_CATEGORIES);
  const categoryDescription = useTextArea();
  const categoryActive = useCheckbox();
  const categoryName = useInput();

  const buildCategoryObject = (): void => {
    const categoryMutationData: ICategoryMutationInput = {
      category: {
        active: categoryActive.checked,
        description: categoryDescription.value,
        icon: categoriesDropdown.value?.icon!,
        name: categoryName.value
      }
    };

    if (param) categoryMutationData.category._id = param;

    categoryMutation({
      variables: { ...categoryMutationData }
    });
  };

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/categories');
    if (action === 'edit') return navigateTo(`/admin/categories/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/categories/edit/${param}`);
    if (action === 'edit' || action === 'add') return buildCategoryObject();
  };

  const handleCategoryResponse = React.useCallback((data: ICategoryData, type: string): void => {
    const { error, category } = data.category;

    if (error) return showBannerMessage(error.message);

    if (param && !category) {
      setNotFound(true);

      return showBannerMessage('We could not find this category.');
    }

    if (!category) return;

    if (type === 'mutation') {
      return navigateTo(`/admin/categories/view/${category._id}`);
    }

    return setCategory(category);
  }, [param, navigateTo]);

  const setCategoryData = React.useCallback((category: ICategory): void => {
    if (fields) return;

    categoryDescription.setValue(category.description || '');
    categoryName.setValue(category.name);
    categoryActive.setChecked(category.active);
    categoriesDropdown.setValue(category);

    return setFields(true);
  }, [categoriesDropdown, categoryActive, categoryDescription, categoryName, fields]);

  React.useEffect(() => {
    if (!param) return;

    return categoryQuery({
      variables: {
        category: {
          _id: param
        }
      }
    });
  }, [param, categoryQuery]);

  React.useEffect(() => {
    if (action === 'add') setHeaderTitle('Add category');
    if (action === 'edit') setHeaderTitle('Edit category');
    if (action === 'view') setHeaderTitle('Category details');
  }, [action]);

  React.useEffect(() => {
    if (!category) return;

    return setCategoryData(category);
  }, [category, setCategoryData]);

  React.useEffect(() => {
    if (categoryMutationData) return handleCategoryResponse(categoryMutationData, 'mutation');
  }, [categoryMutationData, handleCategoryResponse]);

  React.useEffect(() => {
    if (categoryQueryData) return handleCategoryResponse(categoryQueryData, 'query');
  }, [categoryQueryData, handleCategoryResponse]);

  React.useEffect(() => {
    if (categoryMutationError || categoryQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [categoryMutationError, categoryQueryError]);

  if (notFound) {
    return (
      <DetailContainer>
        <Header title={headerTitle} backButtonText={'Categories'} backButtonLink={'/admin/categories'} />

        <BodyContainer empty={1}>
          <Empty />
        </BodyContainer>

        <Banner
          color={COLOR_RED}
          icon={'clear'}
          onHide={handleBannerMessageHide}
          text={bannerMessage}
          visible={bannerVisible} />
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Categories'} backButtonLink={'/admin/categories'} />

      <BodyContainer>
        <Column xl={4} position={'left'}>
          <FormField label={'Name:'}>
            <Input
              disabled={action === 'view' || categoryMutationLoading}
              icon={'category'}
              loading={categoryQueryLoading}
              placeholder={'Awesome category'}
              {...categoryName} />
          </FormField>

          <FormField label={'Icon:'}>
            <Dropdown
              disabled={action === 'view' || categoryMutationLoading}
              name={categoriesDropdown?.value?.icon || 'Select one'}
              icon={'category'}
              loading={categoryQueryLoading}
              {...categoriesDropdown} />
          </FormField>
        </Column>

        <Column xl={4} position={'center'}>
          <FormField label={'Description:'} height={'176px'}>
            <TextArea
              disabled={action === 'view' || categoryMutationLoading}
              loading={categoryQueryLoading}
              placeholder={'Your awesome category description'}
              {...categoryDescription} />
          </FormField>
        </Column>

        <Column xl={4} position={'right'}>
          <FormField label={'Active:'}>
            <Toggle
              disabled={action === 'view' || categoryMutationLoading}
              loading={categoryQueryLoading}
              {...categoryActive} />
          </FormField>
        </Column>
      </BodyContainer>

      <Footer>
        {
          (action === 'add' || action === 'edit') &&
          <SimpleButton
            disabled={categoryMutationLoading}
            icon={categoryMutationLoading ? 'more_horiz' : 'clear'}
            onClick={handleCancelClick} />
        }

        <SimpleButton
          color={COLOR_PURPLE}
          disabled={categoryQueryLoading || categoryMutationLoading}
          icon={categoryQueryLoading || categoryMutationLoading ? 'more_horiz' : action === 'view' ? 'edit' : 'done'}
          onClick={handleDoneClick} />
      </Footer>

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </DetailContainer>
  );
};

interface IDetailCategory {
  action?: string | null;
  param?: string | null;
}
