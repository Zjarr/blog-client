import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { TextArea } from '../../../components/textarea';
import { Toggle } from '../../../components/toggle';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer } from './detail.style';

export const DetailCategoryPage: React.FC<IDetailCategory> = ({ action, param }) => {
  const [headerTitle, setHeaderTitle] = React.useState<string>('');

  const navigateTo = useNavigateTo();

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/categories');
    if (action === 'edit') return navigateTo(`/admin/categories/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/categories/edit/${param}`);
  };

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add category');
    if (action === 'edit') setHeaderTitle('Edit category');
    if (action === 'view') setHeaderTitle('Category details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Categories'} backButtonLink={'/admin/categories'} />

      <BodyContainer>
        <Column xl={4} position={'left'}>
          <FormField label={'Name:'}>
            <Input icon={'category'} placeholder={'Awesome category'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Icon:'}>
            <Dropdown icon={'category'} items={[]} onChange={(): void => { }} name={'Select one'} disabled={action === 'view'} />
          </FormField>
        </Column>

        <Column xl={4} position={'center'}>
          <FormField label={'Description:'} height={'176px'}>
            <TextArea disabled={action === 'view'} />
          </FormField>
        </Column>

        <Column xl={4} position={'right'}>
          <FormField label={'Active:'}>
            <Toggle disabled={action === 'view'} />
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

interface IDetailCategory {
  action?: string | null;
  param?: string | null;
}
