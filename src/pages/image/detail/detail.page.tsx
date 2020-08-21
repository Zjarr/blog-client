import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { UpdateImage } from '../../../components/update-image';
import { useNavigateTo } from '../../../utils/hooks';
import { IImageResult } from '../../../utils/interfaces';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer, ImageColumn } from './detail.style';

export const DetailImagePage: React.FC<IDetailImage> = ({ action, param }) => {
  const [imageModalVisible, setImageModalVisible] = React.useState<boolean>(false);
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [image, setImage] = React.useState<string>('');

  const navigateTo = useNavigateTo();

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/images');
    if (action === 'edit') return navigateTo(`/admin/images/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/images/edit/${param}`);
  };

  const handleImageUpdateModalClose = (result: IImageResult | null): void => {
    setImage(result ? result.base64 : image);

    return setImageModalVisible(false);
  };

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add image');
    if (action === 'edit') setHeaderTitle('Edit image');
    if (action === 'view') setHeaderTitle('Image details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Images'} backButtonLink={'/admin/images'} />

      <BodyContainer>
        <ImageColumn xl={4} position={'left'}>
          <Image
            onUpdateClick={(): void => setImageModalVisible(true)}
            updatable={action !== 'view'}
            shape={'circle'}
            height={'180px'}
            width={'180px'}
            src={image} />
        </ImageColumn>

        <Column xl={4} position={'center'}>
          <FormField label={'Name:'}>
            <Input icon={'image'} placeholder={'An awesome image'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Alt:'}>
            <Input icon={'image'} placeholder={'Awesome alt text'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle disabled={action === 'view'} />
          </FormField>
        </Column>

        <Column xl={4} position={'right'}>
          <FormField height={'176px'} label={'Description:'}>
            <TextArea
              disabled={action === 'view'}
              placeholder={'Your awesome image description'} />
          </FormField>
        </Column>
      </BodyContainer>

      <Footer>
        {
          (action === 'add' || action === 'edit') && <SimpleButton icon={'clear'} onClick={handleCancelClick} />
        }
        <SimpleButton color={COLOR_PURPLE} icon={action === 'view' ? 'edit' : 'done'} onClick={handleDoneClick} />
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
