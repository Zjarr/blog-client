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
  ListCardContainer,
  SummaryCardContainer,
  SummaryChartContainer,
  SummaryContainer
} from './summary.style';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  return (
    <SummaryContainer>
      <Header title={'Dashboard'} />

      <Row>
        <Column xl={6} position={'left'}>
          <SummaryCardContainer>
            <CardContainer sm={6} position={'left'}>
              <ColorCard
                button={'Go to blogs'}
                color={COLOR_PURPLE}
                icon={'book'}
                link={'/admin/blogs'}
                name={'Total blogs'}
                number={54} />
            </CardContainer>
            <CardContainer sm={6} position={'right'}>
              <ColorCard
                button={'Go to images'}
                color={COLOR_MAGENTA}
                icon={'image'}
                link={'/admin/images'}
                name={'Total images'}
                number={102} />
            </CardContainer>
          </SummaryCardContainer>
          <SummaryChartContainer>
            <Column xl={12}>
              <SubtitleText icon={'book'}>Last 7 days entries</SubtitleText>
              <ChartContainer>
                <Chart data={[8, 4, 5, 1, 7, 2, 0]} />
              </ChartContainer>
            </Column>
          </SummaryChartContainer>
        </Column>
        <Column xl={6} position={'right'}>
          <Row>
            <ListCardContainer lg={12}>
              <SubtitleText icon={'book'}>Recent entries</SubtitleText>
              <ImageCardContainer>
                <ImageCard
                  title={'Recent blog name'}
                  primaryText={'Planes | Travel | Experience'}
                  primaryTextIcon={'category'}
                  secondaryText={'June 28th, 2020'}
                  secondaryTextIcon={'event'}
                  image={''}
                  link={'/admin/blogs/view/1234'}
                  active />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'Recent blog name'}
                  primaryText={'Planes | Travel | Experience'}
                  primaryTextIcon={'category'}
                  secondaryText={'June 28th, 2020'}
                  secondaryTextIcon={'event'}
                  image={''}
                  link={'/admin/blogs/view/1234'}
                  active />
              </ImageCardContainer>
            </ListCardContainer>
          </Row>
          <Row>
            <ListCardContainer xl={12}>
              <SubtitleText icon={'book'}>To be released</SubtitleText>
              <ImageCardContainer>
                <ImageCard
                  title={'To be released blog name'}
                  primaryText={'Planes | Travel | Experience'}
                  primaryTextIcon={'category'}
                  secondaryText={'June 28th, 2020'}
                  secondaryTextIcon={'event'}
                  link={'/admin/blogs/view/1234'}
                  image={''} />
              </ImageCardContainer>
              <ImageCardContainer>
                <ImageCard
                  title={'To be released blog name'}
                  primaryText={'Planes | Travel | Experience'}
                  primaryTextIcon={'category'}
                  secondaryText={'June 28th, 2020'}
                  secondaryTextIcon={'event'}
                  link={'/admin/blogs/view/1234'}
                  image={''} />
              </ImageCardContainer>
            </ListCardContainer>
          </Row>
        </Column>
      </Row>
    </SummaryContainer>
  );
};

interface ISummaryPage { }
