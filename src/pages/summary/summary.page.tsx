import { format } from 'date-fns';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { Banner } from '../../components/banner';
import { IImageCard, ImageCard } from '../../components/card';
import { ColorCard } from '../../components/card/color';
import { Chart } from '../../components/chart';
import { Column } from '../../components/column';
import { Empty } from '../../components/empty';
import { Header } from '../../components/header';
import { SubtitleText } from '../../components/text';
import { IBlog, IBlogsReport, ICategory } from '../../utils/interfaces';
import { COLOR_MAGENTA, COLOR_PURPLE, COLOR_RED, STRING_SERVER_ERROR } from '../../utils/values';

import {
  IBlogsAmountData,
  IBlogsLastTwoData,
  IBlogsWeekData,
  ICategoriesQueryData,
  IImagesAmountQueryData,
  useBlogsAmountQuery,
  useBlogsLastTwoActiveQuery,
  useBlogsLastTwoInactiveQuery,
  useBlogsWeekQuery,
  useCategoriesQuery,
  useImagesAmountQuery
} from './summary.graphql';
import {
  CardContainer,
  ChartContainer,
  ImageCardContainer,
  ListCardContainer,
  SummaryCardContainer,
  SummaryChartContainer,
  SummaryContainer
} from './summary.style';

const LOADING_REPORT_DATA: IBlogsReport[] = [
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 },
  { day: '...', blogs: 0 }
];

const LOADING_CARDS: IImageCard[] = [{}, {}];

export const SummaryPage: React.FC<ISummaryPage> = () => {
  const [blogsReport, setBlogsReport] = React.useState<IBlogsReport[]>(LOADING_REPORT_DATA);
  const [blogsInactive, setBlogsInactive] = React.useState<IImageCard[]>(LOADING_CARDS);
  const [blogsActive, setBlogsActive] = React.useState<IImageCard[]>(LOADING_CARDS);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [imagesNumber, setImagesNumber] = React.useState<number>(0);
  const [blogsNumber, setBlogsAmount] = React.useState<number>(0);

  const {
    error: blogsAmountQueryError,
    data: blogsAmountQueryData,
    loading: blogsAmountQueryLoading
  } = useBlogsAmountQuery();

  const {
    error: blogsLastTwoActiveQueryError,
    data: blogsLastTwoActiveQueryData,
    loading: blogsLastTwoActiveQueryLoading
  } = useBlogsLastTwoActiveQuery();

  const {
    error: blogsLastTwoInactiveQueryError,
    data: blogsLastTwoInactiveQueryData,
    loading: blogsLastTwoInactiveQueryLoading
  } = useBlogsLastTwoInactiveQuery();

  const {
    error: blogsWeekQueryError,
    data: blogsWeekQueryData
  } = useBlogsWeekQuery();

  const {
    error: categoriesQueryError,
    data: categoriesQueryData,
    // loading: categoriesQueryLoading
  } = useCategoriesQuery();

  const {
    error: imagesQueryError,
    data: imagesQueryData,
    loading: imagesQueryLoading
  } = useImagesAmountQuery();

  const handleBannerMessageHide = (): void => {
    return setBannerMessage('');
  };

  const showBannerMessage = (message: string): void => {
    return setBannerMessage(message);;
  };

  const mapCategoryObject = React.useCallback((ids: string[]): ICategory[] => {
    return categories.filter(category => ids.includes(category._id!)) as ICategory[];
  }, [categories]);

  const buildBlogsObject = React.useCallback((blogs: IBlog[], active: boolean) => {
    const blogsCards: IImageCard[] = [];

    blogs.forEach(blog => {
      const categoryString = mapCategoryObject(blog.categories || []).map(category => category.name).join(' | ');

      blogsCards.push({
        active: blog.active,
        image: blog.image,
        link: `/admin/blogs/view/${blog._id}`,
        primaryText: categoryString || 'No categories',
        primaryTextIcon: 'category',
        secondaryText: format(new Date(blog.created), 'MMMM do, yyyy'),
        secondaryTextIcon: 'event',
        title: blog.name
      });
    });

    if (active) {
      return setBlogsActive(blogsCards);
    }

    return setBlogsInactive(blogsCards);
  }, [mapCategoryObject]);

  const handleBlogsAmountQueryResponse = React.useCallback((data: IBlogsAmountData): void => {
    const { blogs, error } = data.blogsAmount;

    if (error) return showBannerMessage(error.message);
    if (!blogs) return;

    return setBlogsAmount(blogs.count);
  }, []);

  const handleBlogsLastTwoQueryResponse = React.useCallback((data: IBlogsLastTwoData, active: boolean): void => {
    const { blogs, error } = data.blogsLastTwo;

    if (error) return showBannerMessage(error.message);
    if (!blogs) return;

    return buildBlogsObject(blogs, active);
  }, [buildBlogsObject]);

  const handleBlogsWeekQueryResponse = React.useCallback((data: IBlogsWeekData): void => {
    const { error, report } = data.blogsWeek;

    if (error) return showBannerMessage(error.message);
    if (!report) return;

    setTimeout(() => {
      setBlogsReport(report);
    }, 100);
  }, []);

  const handleCategoriesQueryResponse = React.useCallback((data: ICategoriesQueryData): void => {
    const { categories, error } = data.categories;

    if (error) return showBannerMessage(error.message);
    if (!categories) return;

    return setCategories(categories);
  }, []);

  const handleImagesQueryResponse = React.useCallback((data: IImagesAmountQueryData): void => {
    const { error, images } = data.imagesAmount;

    if (error) return showBannerMessage(error.message);
    if (!images) return;

    return setImagesNumber(images.count);
  }, []);

  React.useEffect(() => {
    if (blogsAmountQueryData) return handleBlogsAmountQueryResponse(blogsAmountQueryData);
  }, [blogsAmountQueryData, handleBlogsAmountQueryResponse]);

  React.useEffect(() => {
    if (blogsLastTwoActiveQueryData) return handleBlogsLastTwoQueryResponse(blogsLastTwoActiveQueryData, true);
  }, [blogsLastTwoActiveQueryData, handleBlogsLastTwoQueryResponse]);

  React.useEffect(() => {
    if (blogsLastTwoInactiveQueryData) return handleBlogsLastTwoQueryResponse(blogsLastTwoInactiveQueryData, false);
  }, [blogsLastTwoInactiveQueryData, handleBlogsLastTwoQueryResponse]);

  React.useEffect(() => {
    if (blogsWeekQueryData) return handleBlogsWeekQueryResponse(blogsWeekQueryData);
  }, [blogsWeekQueryData, handleBlogsWeekQueryResponse]);

  React.useEffect(() => {
    if (categoriesQueryData) return handleCategoriesQueryResponse(categoriesQueryData);
  }, [categoriesQueryData, handleCategoriesQueryResponse]);

  React.useEffect(() => {
    if (imagesQueryData) return handleImagesQueryResponse(imagesQueryData);
  }, [imagesQueryData, handleImagesQueryResponse]);

  React.useEffect(() => {
    if (blogsAmountQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [blogsAmountQueryError]);

  React.useEffect(() => {
    if (blogsLastTwoActiveQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [blogsLastTwoActiveQueryError]);

  React.useEffect(() => {
    if (blogsLastTwoInactiveQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [blogsLastTwoInactiveQueryError]);

  React.useEffect(() => {
    if (blogsWeekQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [blogsWeekQueryError]);

  React.useEffect(() => {
    if (categoriesQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [categoriesQueryError]);

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
                number={blogsAmountQueryLoading ? '...' : blogsNumber} />
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
                <Chart data={blogsReport} />
              </ChartContainer>
            </Column>
          </SummaryChartContainer>
        </Column>
        <Column xl={6} position={'right'}>
          <Row>
            <ListCardContainer xl={12}>
              <SubtitleText icon={'book'}>Recent entries</SubtitleText>
              {
                !blogsLastTwoActiveQueryError && blogsActive.length > 0 && blogsActive.map((card: IImageCard, index: number) =>
                  <ImageCardContainer key={`active-blog-${index}`}>
                    <ImageCard {...card} loading={blogsLastTwoActiveQueryLoading} />
                  </ImageCardContainer>
                )
              }
              {
                !blogsLastTwoActiveQueryLoading &&
                <Empty
                  error={!!blogsLastTwoActiveQueryError}
                  height={'calc(100% - 56px)'}
                  message={!blogsLastTwoActiveQueryError ? 'There a no blogs.' : undefined} />
              }
            </ListCardContainer>
          </Row>
          <Row>
            <ListCardContainer xl={12}>
              <SubtitleText icon={'book'}>To be released</SubtitleText>
              {
                !blogsLastTwoInactiveQueryError && blogsInactive.length > 0 && blogsInactive.map((card: IImageCard, index: number) =>
                  <ImageCardContainer key={`inactive-blog-${index}`}>
                    <ImageCard {...card} loading={blogsLastTwoInactiveQueryLoading} />
                  </ImageCardContainer>
                )
              }
              {
                !blogsLastTwoInactiveQueryLoading &&
                <Empty
                  error={!!blogsLastTwoInactiveQueryError}
                  height={'calc(100% - 56px)'}
                  message={!blogsLastTwoInactiveQueryError ? 'There are no drafts.' : undefined} />
              }
            </ListCardContainer>
          </Row>
        </Column>
      </Row>

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={!!bannerMessage} />
    </SummaryContainer>
  );
};

interface ISummaryPage { }
