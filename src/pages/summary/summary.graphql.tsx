import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IError, IImage, IPagination, IBlogsReport } from '../../utils/interfaces';

const BLOGS_AMOUNT_QUERY: DocumentNode = gql`
  query BlogsAmount {
    blogsAmount {
      ... on BlogsAmountSuccess {
        blogs {
          count
        }
      }
      
      ... on Error {
        error {
          code
          message
          status
        }
      }
    }
  }
`;

const BLOGS_WEEK_QUERY: DocumentNode = gql`
  query BlogsWeek {
    blogsWeek {
      ... on BlogsWeekSuccess {
        report {
          day
          blogs
        }
      }
      ... on Error {
        error {
          code
          message
          status
        }
      }
    }
  }
`;

const IMAGES_QUERY: DocumentNode = gql`
  query ImagesQuery($images: GetImagesInput!) {
    images(images: $images) {
      ... on ImagesSuccess {
        pagination {
          total
        }
      }
      ... on Error {
        error {
          code
          message
          status
        }
      }
    }
  }
`;

interface IBlogsCount {
  count: number;
}

export interface IBlogsAmountData {
  blogsAmount: {
    blogs?: IBlogsCount;
    error?: IError;
  };
}

export interface IBlogsWeekData {
  blogsWeek: {
    report: IBlogsReport[];
    error?: IError;
  };
}

export interface IImagesQueryData {
  images: {
    error?: IError;
    images?: IImage[];
    pagination?: IPagination;
  }
}

export interface IImagesQueryInput {
  images: {}
}

export const useBlogsAmountQuery = (): QueryResult<IBlogsAmountData> => {
  return useQuery<IBlogsAmountData>(BLOGS_AMOUNT_QUERY, { fetchPolicy: 'cache-and-network' });
};

export const useBlogsWeekQuery = (): QueryResult<IBlogsWeekData> => {
  return useQuery<IBlogsWeekData>(BLOGS_WEEK_QUERY, { fetchPolicy: 'cache-and-network' });
};

export const useImagesQuery = (): QueryResult<IImagesQueryData, IImagesQueryInput> => {
  return useQuery<IImagesQueryData, IImagesQueryInput>(IMAGES_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      images: {}
    }
  });
};
