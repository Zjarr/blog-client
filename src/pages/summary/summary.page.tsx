import React from 'react';
import Row from 'react-bootstrap/Row';

import { ImageCard } from '../../components/card';
import { ColorCard } from '../../components/card/color';
import { Chart } from '../../components/chart';
import { Column } from '../../components/column';
import { Header } from '../../components/header';
import { SubtitleText } from '../../components/text';
import { COLOR_MAGENTA, COLOR_PURPLE } from '../../utils/values';

import {
  CardContainer,
  ChartContainer,
  ImageCardContainer,
  RecentEntriesContainer,
  SummaryCardContainer,
  SummaryContainer
} from './summary.style';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  return (
    <SummaryContainer>
      <Header title={'Dashboard'} />

      <Row>
        <Column xl={6} position={'left'}>
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
                button={'Go to images'}
                color={COLOR_MAGENTA}
                icon={'insert_photo'}
                link={'/admin/dashboard/images'}
                name={'Total images'}
                number={102} />
            </CardContainer>
          </SummaryCardContainer>
          <Row>
            <Column xl={12}>
              <SubtitleText icon={'book'}>Last 7 days entries</SubtitleText>
              <ChartContainer>
                <Chart data={[8, 4, 5, 1, 7, 2, 0]}/>
              </ChartContainer>
            </Column>
          </Row>
        </Column>
        <Column xl={6} position={'right'}>
          <Row>
            <RecentEntriesContainer lg={12}>
              <SubtitleText icon={'book'}>Recent entries</SubtitleText>
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
            <Column xl={12}>
              <SubtitleText icon={'book'}>To be released</SubtitleText>
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
            </Column>
          </Row>
        </Column>
      </Row>
    </SummaryContainer>
  );
};

interface ISummaryPage {
}
