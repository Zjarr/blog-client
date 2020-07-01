import React from 'react';

import { Header } from '../../../components/header';

import { DetailContainer } from './detail.style';

export const DetailImagePage: React.FC<IDetailImage> = ({ action }) => {
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
      <Header title={headerTitle} backButtonText={'Images'} backButtonLink={'/admin/images'} />
    </DetailContainer>
  );
};

interface IDetailImage {
  action?: string | null;
  param?: string | null;
}
