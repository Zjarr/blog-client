import React from 'react';

import { Header } from '../../../components/header';

import { DetailContainer } from './detail.style';

export const DetailCategoryPage: React.FC<IDetailCategory> = ({ action }) => {
  const [headerTitle, setHeaderTitle] = React.useState<string>('');

  const initPageProperties = React.useCallback((action): void => {
    if (action === 'add') setHeaderTitle('Add category');
    if (action === 'view') setHeaderTitle('Category details');
  }, []);

  React.useEffect(() => {
    initPageProperties(action);
  }, [action, initPageProperties]);

  return (
    <DetailContainer>
      <Header title={headerTitle} backButtonText={'Categories'} backButtonLink={'/admin/categories'} />
    </DetailContainer>
  );
};

interface IDetailCategory {
  action?: string | null;
  param?: string | null;
}
