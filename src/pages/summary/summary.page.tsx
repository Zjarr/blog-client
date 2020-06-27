import React from 'react';
import Row from 'react-bootstrap/Row';

import { ColorCard } from '../../components/card/color';
import { Column } from '../../components/column';
import { Header } from '../../components/header';
import { COLOR_MAGENTA, COLOR_PURPLE } from '../../utils/values';

import { SummaryContainer } from './summary.style';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  return (
    <SummaryContainer>
      <Header title={'Dashboard'} />

      <Row>
        <Column lg={6}>
          <Row>
            <Column lg={6} position={'left'}>
              <ColorCard
                button={'Go to blogs'}
                color={COLOR_PURPLE}
                icon={'book'}
                link={'/admin/dashboard/blogs'}
                name={'Total blogs'}
                number={54} />
            </Column>
            <Column lg={6} position={'right'}>
              <ColorCard
                button={'Go to assets'}
                color={COLOR_MAGENTA}
                icon={'insert_photo'}
                link={'/admin/dashboard/assets'}
                name={'Total assets'}
                number={102} />
            </Column>
          </Row>
          <Row>
            <Column lg={12}></Column>
          </Row>
        </Column>
        <Column lg={6}>
          <Row>
            <Column lg={12}></Column>
          </Row>
          <Row>
            <Column lg={12}></Column>
          </Row>
        </Column>
      </Row>
    </SummaryContainer>
  );
};

interface ISummaryPage {
}
