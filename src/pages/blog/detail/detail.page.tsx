import React from 'react';

import { Header } from '../../../components/header';

import { DetailContainer } from './detail.style';

export const DetailBlogPage: React.FC<IDetailBlog> = ({ action }) => {
  const [headerTitle, setHeaderTitle] = React.useState<string>('');

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add blog');
    if (action === 'view') setHeaderTitle('Blog details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Blogs'} backButtonLink={'/admin/blogs'} />
    </DetailContainer>
  );
};

interface IDetailBlog {
  action?: string | null;
  param?: string | null;
}
