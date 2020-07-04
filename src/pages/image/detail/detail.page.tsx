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
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer, ImageColumn } from './detail.style';

export const DetailImagePage: React.FC<IDetailImage> = ({ action, param }) => {
  const [headerTitle, setHeaderTitle] = React.useState<string>('');

  const navigateTo = useNavigateTo();

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/images');
    if (action === 'edit') return navigateTo(`/admin/images/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/images/edit/${param}`);
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
          <Image shape={'circle'} height={'180px'} width={'180px'} updatable={action !== 'view'} />
        </ImageColumn>

        <Column xl={4} position={'center'}>
          <FormField label={'Name:'}>
            <Input icon={'insert_photo'} placeholder={'An awesome image'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Alt:'}>
            <Input icon={'insert_photo'} placeholder={'Awesome alt text'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle disabled={action === 'view'} />
          </FormField>
        </Column>

        <Column xl={4} position={'right'}>
          <FormField height={'148px'} label={'Description:'}>
            <TextArea disabled={action === 'view'} />
          </FormField>
        </Column>
      </BodyContainer>

      <Footer>
        {
          (action === 'add' || action === 'edit') && <SimpleButton icon={'clear'} onClick={handleCancelClick} />
        }
        <SimpleButton color={COLOR_PURPLE} icon={action === 'view' ? 'edit' : 'done'} onClick={handleDoneClick} />
      </Footer>
    </DetailContainer>
  );
};

interface IDetailImage {
  action?: string | null;
  param?: string | null;
}
