import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { UpdateImage } from '../../../components/update-image';
import { useCheckbox, useInput, useNavigateTo, useTextArea } from '../../../utils/hooks';
import { IImage, IImageResult } from '../../../utils/interfaces';
import { COLOR_PURPLE, STRING_FIELD_REQUIRED, STRING_SERVER_ERROR } from '../../../utils/values';

import { IImageData, IImageMutationInput, useImageMutation, useImageQuery } from './detail.graphql';
import { BodyContainer, DetailContainer, ImageColumn } from './detail.style';

export const DetailImagePage: React.FC<IDetailImage> = ({ action, param }) => {
  const [error, setError] = React.useState<string>('');
  const [fields, setFields] = React.useState<boolean>(false);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [image, setImage] = React.useState<string>('');
  const [imageData, setImageData] = React.useState<IImage>();
  const [imageError, setImageError] = React.useState<boolean>(false);
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [imageModalVisible, setImageModalVisible] = React.useState<boolean>(false);
  const [notFound, setNotFound] = React.useState<boolean>(false);

  const [imageQuery, {
    error: imageQueryError,
    data: imageQueryData,
    loading: imageQueryLoading
  }] = useImageQuery();

  const [imageMutation, {
    error: imageMutationError,
    data: imageMutationData,
    loading: imageMutationLoading
  }] = useImageMutation();

  const navigateTo = useNavigateTo();

  const imageDescription = useTextArea();
  const imageActive = useCheckbox();
  const imageName = useInput();
  const imageAlt = useInput();

  const buildImageObject = (): void => {
    const imageMutationData: IImageMutationInput = {
      image: {
        active: imageActive.checked,
        alt: imageAlt.value,
        description: imageDescription.value,
        name: imageName.value
      }
    };

    if (param) imageMutationData.image._id = param;

    if (imageFile) {
      imageMutationData.image.file = imageFile;
    } else {
      imageMutationData.image.url = image;
    }

    imageMutation({
      variables: { ...imageMutationData }
    });
  };

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/images');
    if (action === 'edit') return navigateTo(`/admin/images/view/${param}`);
  };

  const isValidForm = (): boolean => {
    const imageIsSet = imageFile || image;

    if (!imageAlt.value) imageAlt.setError(STRING_FIELD_REQUIRED);
    if (!imageDescription.value) imageDescription.setError(STRING_FIELD_REQUIRED);
    if (!imageName.value) imageName.setError(STRING_FIELD_REQUIRED);
    if (!imageIsSet) setImageError(true);

    if (!imageAlt.value || !imageDescription.value || !imageName.value || !imageIsSet) return false;

    return true;
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/images/edit/${param}`);

    if (action === 'edit' || action === 'add') {
      if (!isValidForm()) return;

      return buildImageObject();
    };
  };

  const handleImageResponse = React.useCallback((data: IImageData, type: string): void => {
    const { error, image } = data.image;

    if (error) return setError(error.message);

    if (param && !image) {
      setNotFound(true);

      return setError('We could not find this image.');
    }

    if (!image) return;
    if (type === 'mutation') return navigateTo(`/admin/images/view/${image._id}`);

    return setImageData(image);
  }, [param, navigateTo]);

  const handleImageUpdateModalClose = (result: IImageResult | null): void => {
    setImageFile(result ? result.file : null);
    setImage(result ? result.base64 : image);
    setImageError(result?.base64 ? false : true);

    return setImageModalVisible(false);
  };

  const setImageFields = React.useCallback((image: IImage): void => {
    if (fields) return;

    imageDescription.setValue(image.description || '');
    imageName.setValue(image.name);
    imageActive.setChecked(image.active);
    imageAlt.setValue(image.alt);

    setImage(image.url || '');

    return setFields(true);
  }, [imageActive, imageAlt, imageDescription, imageName, fields]);

  React.useEffect(() => {
    if (!param) return;

    return imageQuery({
      variables: {
        image: {
          _id: param
        }
      }
    });
  }, [param, imageQuery]);

  React.useEffect(() => {
    if (action === 'add') setHeaderTitle('Add image');
    if (action === 'edit') setHeaderTitle('Edit image');
    if (action === 'view') setHeaderTitle('Image details');
  }, [action]);

  React.useEffect(() => {
    if (!imageData) return;

    return setImageFields(imageData);
  }, [imageData, setImageFields]);

  React.useEffect(() => {
    if (imageMutationData) return handleImageResponse(imageMutationData, 'mutation');
  }, [imageMutationData, handleImageResponse]);

  React.useEffect(() => {
    if (imageQueryData) return handleImageResponse(imageQueryData, 'query');
  }, [imageQueryData, handleImageResponse]);

  React.useEffect(() => {
    if (imageMutationError) return setError(STRING_SERVER_ERROR);
  }, [imageMutationError]);

  React.useEffect(() => {
    if (imageQueryError) return setError(STRING_SERVER_ERROR);
  }, [imageQueryError]);

  if (notFound || !!error) {
    return (
      <DetailContainer empty={notFound || !!error}>
        <Header title={headerTitle} backButtonText={'Images'} backButtonLink={'/admin/images'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error ? error : undefined} />
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Images'} backButtonLink={'/admin/images'} />

      <BodyContainer>
        <ImageColumn xl={4} position={'left'}>
          <Image
            error={imageError}
            height={'180px'}
            onUpdateClick={(): void => setImageModalVisible(true)}
            shape={'circle'}
            src={image}
            updatable={action !== 'view' && !imageMutationLoading}
            width={'180px'} />
        </ImageColumn>

        <Column xl={4} position={'center'}>
          <FormField label={'Name:'}>
            <Input
              disabled={action === 'view' || imageMutationLoading}
              icon={'image'}
              loading={imageQueryLoading}
              placeholder={'An awesome image'}
              {...imageName} />
          </FormField>

          <FormField label={'Alt:'}>
            <Input
              disabled={action === 'view' || imageMutationLoading}
              icon={'image'}
              loading={imageQueryLoading}
              placeholder={'Awesome alt text'}
              {...imageAlt} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle
              disabled={action === 'view' || imageMutationLoading}
              loading={imageQueryLoading}
              {...imageActive} />
          </FormField>
        </Column>

        <Column xl={4} position={'right'}>
          <FormField height={'176px'} label={'Description:'}>
            <TextArea
              disabled={action === 'view' || imageMutationLoading}
              loading={imageQueryLoading}
              placeholder={'Your awesome image description'}
              {...imageDescription} />
          </FormField>
        </Column>
      </BodyContainer>

      <Footer>
        {
          (action === 'add' || action === 'edit') &&
          <SimpleButton
            disabled={imageMutationLoading}
            icon={imageMutationLoading ? 'more_horiz' : 'clear'}
            onClick={handleCancelClick} />
        }

        <SimpleButton
          color={COLOR_PURPLE}
          disabled={imageQueryLoading || imageMutationLoading}
          icon={imageQueryLoading || imageMutationLoading ? 'more_horiz' : action === 'view' ? 'edit' : 'done'}
          onClick={handleDoneClick} />
      </Footer>

      <UpdateImage
        onClose={handleImageUpdateModalClose}
        visible={imageModalVisible}
        src={image} />
    </DetailContainer>
  );
};

interface IDetailImage {
  action?: string | null;
  param?: string | null;
}
