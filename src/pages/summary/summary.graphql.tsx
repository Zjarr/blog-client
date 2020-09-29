import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IBlog, IBlogsReport, IError } from '../../utils/interfaces';

const BLOGS_AMOUNT_QUERY: DocumentNode = gql`
  query BlogsAmountQuery {
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

const BLOGS_LAST_TWO_QUERY: DocumentNode = gql`
  query BlogsLastTwoQuery($blogs: GetBlogsLastTwoInput!) {
    blogsLastTwo(blogs: $blogs) {
      ... on BlogsSuccess {
        blogs {
          _id
          active
          categoriesString
          created
          image
          name
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
  query BlogsWeekQuery {
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

const IMAGES_AMOUNT_QUERY: DocumentNode = gql`
  query ImagesAmountQuery {
    imagesAmount {
      ... on ImagesAmountSuccess {
        images {
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

interface IBlogsCount {
  count: number;
}

interface IImagesCount {
  count: number;
}

export interface IBlogsAmountData {
  blogsAmount: {
    blogs?: IBlogsCount;
    error?: IError;
  };
}

export interface IBlogsLastTwoData {
  blogsLastTwo: {
    blogs: IBlog[];
    error?: IError;
  };
}

export interface IBlogsWeekData {
  blogsWeek: {
    error?: IError;
    report: IBlogsReport[];
  };
}

export interface IBlogsLastTwoQueryInput {
  blogs: {
    active: boolean;
  };
}

export interface IImagesAmountQueryData {
  imagesAmount: {
    error?: IError;
    images?: IImagesCount;
  }
}

export const useBlogsAmountQuery = (): QueryResult<IBlogsAmountData> => {
  return useQuery<IBlogsAmountData>(BLOGS_AMOUNT_QUERY);
};

export const useBlogsLastTwoActiveQuery = (): QueryResult<IBlogsLastTwoData, IBlogsLastTwoQueryInput> => {
  return useQuery<IBlogsLastTwoData, IBlogsLastTwoQueryInput>(BLOGS_LAST_TWO_QUERY, {
    variables: {
      blogs: {
        active: true
      }
    }
  });
};

export const useBlogsLastTwoInactiveQuery = (): QueryResult<IBlogsLastTwoData, IBlogsLastTwoQueryInput> => {
  return useQuery<IBlogsLastTwoData, IBlogsLastTwoQueryInput>(BLOGS_LAST_TWO_QUERY, {
    variables: {
      blogs: {
        active: false
      }
    }
  });
};

export const useBlogsWeekQuery = (): QueryResult<IBlogsWeekData> => {
  return useQuery<IBlogsWeekData>(BLOGS_WEEK_QUERY);
};

export const useImagesAmountQuery = (): QueryResult<IImagesAmountQueryData> => {
  return useQuery<IImagesAmountQueryData>(IMAGES_AMOUNT_QUERY);
};
