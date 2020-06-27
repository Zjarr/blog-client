import React from 'react';

import { Header } from '../../components/header';

import { SummaryContainer } from './summary.style';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  return (
    <SummaryContainer>
      <Header title={'Dashboard'} />
    </SummaryContainer>
  );
};

interface ISummaryPage {
}
