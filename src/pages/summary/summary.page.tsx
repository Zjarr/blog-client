import React from 'react';
import Row from 'react-bootstrap/Row';

import { Banner } from '../../components/banner';
import { ImageCard } from '../../components/card';
import { ColorCard } from '../../components/card/color';
import { Chart } from '../../components/chart';
import { Column } from '../../components/column';
import { Header } from '../../components/header';
import { SubtitleText } from '../../components/text';
import { COLOR_MAGENTA, COLOR_PURPLE, COLOR_RED, STRING_SERVER_ERROR } from '../../utils/values';

import { IImagesQueryData, useImagesQuery, useBlogsQuery, IBlogsQueryData } from './summary.graphql';
import {
  CardContainer,
  ChartContainer,
  ImageCardContainer,
  ListCardContainer,
  SummaryCardContainer,
  SummaryChartContainer,
  SummaryContainer
} from './summary.style';
import { IBlog } from '../../utils/interfaces';

export const SummaryPage: React.FC<ISummaryPage> = () => {
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [imagesNumber, setImagesNumber] = React.useState<number>(0);
  const [blogsNumber, setBlogsNumber] = React.useState<number>(0);
  const [, setBlogsData] = React.useState<IBlog[]>([]);

  const {
    error: imagesQueryError,
    data: imagesQueryData,
    loading: imagesQueryLoading
  } = useImagesQuery();

  const {
    error: blogsQueryError,
    data: blogsQueryData,
    loading: blogsQueryLoading
  } = useBlogsQuery();

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const handleBlogsQueryResponse = React.useCallback((data: IBlogsQueryData): void => {
    const { blogs, error, pagination } = data.blogs;

    if (error) return showBannerMessage(error.message);
    if (!pagination || !blogs) return;

    setBlogsData(blogs);

    return setBlogsNumber(pagination.total);
  }, []);

  const handleImagesQueryResponse = React.useCallback((data: IImagesQueryData): void => {
    const { error, pagination } = data.images;

    if (error) return showBannerMessage(error.message);
    if (!pagination) return;

    return setImagesNumber(pagination.total);
  }, []);

  React.useEffect(() => {
    if (blogsQueryData) return handleBlogsQueryResponse(blogsQueryData);
  }, [blogsQueryData, handleBlogsQueryResponse]);

  React.useEffect(() => {
    if (imagesQueryData) return handleImagesQueryResponse(imagesQueryData);
  }, [imagesQueryData, handleImagesQueryResponse]);

  React.useEffect(() => {
    if (blogsQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [blogsQueryError]);

  React.useEffect(() => {
    if (imagesQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [imagesQueryError]);

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
                number={blogsQueryLoading ? '...' : blogsNumber} />
            </CardContainer>
            <CardContainer sm={6} position={'right'}>
              <ColorCard
                button={'Go to images'}
                color={COLOR_MAGENTA}
                icon={'image'}
                link={'/admin/images'}
                name={'Total images'}
                number={imagesQueryLoading ? '...' : imagesNumber} />
            </CardContainer>
          </SummaryCardContainer>
          <SummaryChartContainer>
            <Column xl={12}>
              <SubtitleText icon={'book'}>Last 7 days entries</SubtitleText>
              <ChartContainer>
                <Chart data={[0, 0, 0, 0, 0, 1, 2]} />
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

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </SummaryContainer>
  );
};

interface ISummaryPage { }
