import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, DetailContainer } from './detail.style';

export const DetailBlogPage: React.FC<IDetailBlog> = ({ action, param }) => {
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
      <Header title={headerTitle} backButtonText={'Blogs'} backButtonLink={'/admin/blogs'} />

      <BodyContainer>

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
