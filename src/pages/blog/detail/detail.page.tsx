import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer, EditorButtonsContainer, SimpleListContainer } from './detail.style';
import { Column } from '../../../components/column';
import { Image } from '../../../components/image';
import { FormField } from '../../../components/form-field';
import { TextArea } from '../../../components/textarea';
import { Input } from '../../../components/input';
import { Toggle } from '../../../components/toggle';
import { Dropdown } from '../../../components/dropdown';
import { IconCard } from '../../../components/card';
import { ISource } from '../../../utils/interfaces';
import { LabelText } from '../../../components/text';

export const DetailBlogPage: React.FC<IDetailBlog> = ({ action, param }) => {
  const [headerTitle, setHeaderTitle] = React.useState<string>('');
  const [categories] = React.useState<string[]>(['hello', 'hello', 'hello', 'hello']);
  const [sources] = React.useState<ISource[]>([
    { name: 'Hello', url: 'www.google.com' },
    { name: 'Hello', url: 'www.google.com' },
    { name: 'Hello', url: 'www.google.com' }
  ]);

  const navigateTo = useNavigateTo();

  const handleCancelClick = (): void => {
    if (action === 'add') return navigateTo('/admin/blogs');
    if (action === 'edit') return navigateTo(`/admin/blogs/view/${param}`);
  };

  const handleDoneClick = (): void => {
    if (action === 'view') return navigateTo(`/admin/blogs/edit/${param}`);
  };

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add blog');
    if (action === 'edit') setHeaderTitle('Edit blog');
    if (action === 'view') setHeaderTitle('Blog details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Blogs'} backButtonLink={'/admin/blogs'} />

      <BodyContainer>
        <Column xl={8} position={'left'}>
          <FormField label={'Body:'} height={'calc(100vh - 232px)'}>
            <TextArea disabled={action === 'view'} />
          </FormField>

          {
            action !== 'view' &&
            <EditorButtonsContainer>
              <SimpleButton icon={'visibility'} width={'auto'}>View images</SimpleButton>
              <SimpleButton color={COLOR_PURPLE} icon={'insert_photo'} width={'auto'}>Preview result</SimpleButton>
            </EditorButtonsContainer>
          }
        </Column>

        <Column xl={4} position={'right'}>
          <FormField label={'Image:'}>
            <Image shape={'square'} width={'100%'} height={'240px'} updatable={action !== 'view'} />
          </FormField>

          <FormField label={'Title:'}>
            <Input icon={'title'} placeholder={'Awesome blog title'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Slug:'}>
            <Input icon={'star'} placeholder={'unique-blog-name'} disabled={action === 'view'} />
          </FormField>

          <FormField label={'Description:'} height={'136px'}>
            <TextArea disabled={action === 'view'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle disabled={action === 'view'} />
          </FormField>

          {
            action !== 'view' &&
            <FormField label={'Categories:'}>
              <Dropdown icon={'category'} items={[]} onChange={(): void => { }} name={'Select one'} width={'calc(100% - 64px)'} />
              <SimpleButton icon={'add'} />
            </FormField>
          }

          {
            categories &&
            <SimpleListContainer>
              <LabelText>{action === 'view' ? 'Categories:' : 'Selected categories:'}</LabelText>
              {
                categories.map((category, index) =>
                  <IconCard key={`category-${category}-${index}`} title={category} disabled={action === 'view'} />
                )
              }
            </SimpleListContainer>
          }

          {
            action !== 'view' &&
            <FormField label={'Sources:'}>
              <Input icon={'public'} placeholder={'Source name'} width={'calc(50% - 40px)'} />
              <Input icon={'insert_link'} placeholder={'Source url'} width={'calc(50% - 40px)'} />
              <SimpleButton icon={'add'} />
            </FormField>
          }

          {
            sources &&
            <SimpleListContainer>
              <LabelText>{action === 'view' ? 'Sources:' : 'Selected sources:'}</LabelText>
              {
                sources.map((source: ISource, index: number) =>
                  <IconCard key={`source-${source.name}-${index}`} title={source.name} text={source.url} disabled={action === 'view'} />
                )
              }
            </SimpleListContainer>
          }
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

interface IDetailBlog {
  action?: string | null;
  param?: string | null;
}
