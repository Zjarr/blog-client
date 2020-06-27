import React from 'react';
import Row from 'react-bootstrap/Row';

import { ImageCard } from '../../components/card';
import { ColorCard } from '../../components/card/color';
import { Column } from '../../components/column';
import { Header } from '../../components/header';
import { LabelText } from '../../components/text';
import { COLOR_MAGENTA, COLOR_PURPLE } from '../../utils/values';

import {
  CardContainer,
  ImageCardContainer,
  RecentEntriesContainer,
  SummaryCardContainer,
  SummaryContainer,
  ToBeReleasedContainer
} from './summary.style';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  return (
    <SummaryContainer>
      <Header title={'Dashboard'} />

      <Row>
        <Column lg={6} position={'left'}>
          <SummaryCardContainer>
            <CardContainer xl={6} position={'left'}>
              <ColorCard
                button={'Go to blogs'}
                color={COLOR_PURPLE}
                icon={'book'}
                link={'/admin/dashboard/blogs'}
                name={'Total blogs'}
                number={54} />
            </CardContainer>
            <CardContainer xl={6} position={'right'}>
              <ColorCard
                button={'Go to assets'}
                color={COLOR_MAGENTA}
                icon={'insert_photo'}
                link={'/admin/dashboard/assets'}
                name={'Total assets'}
                number={102} />
            </CardContainer>
          </SummaryCardContainer>
          <Row>
            <Column lg={12}>
              <LabelText icon={'book'}>This week's entries</LabelText>
            </Column>
          </Row>
        </Column>
        <Column lg={6} position={'right'}>
          <Row>
            <RecentEntriesContainer lg={12}>
              <LabelText icon={'book'}>Recent entries</LabelText>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'}
                  active />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'}
                  active />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'}
                  active />
              </ImageCardContainer>
            </RecentEntriesContainer>
          </Row>
          <Row>
            <ToBeReleasedContainer lg={12}>
              <LabelText icon={'book'}>To be released</LabelText>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'} />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'} />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'Card title with long text for testing purposes'}
                  text={'Card title with long text for testing purposes'}
                  secondaryText={'Card title with long text for testing purposes'}
                  image={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'} />
              </ImageCardContainer>
            </ToBeReleasedContainer>
          </Row>
        </Column>
      </Row>
    </SummaryContainer>
  );
};

interface ISummaryPage {
}
