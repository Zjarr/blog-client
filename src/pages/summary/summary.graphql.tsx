import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IBlog, IBlogsReport, ICategory, IError, IImage, IPagination } from '../../utils/interfaces';

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
          categories
          image
          name
          updated
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

const CATEGORIES_QUERY: DocumentNode = gql`
  query CategoriesQuery($categories: GetCategoriesInput!) {
    categories(categories: $categories) {
      ... on CategoriesSuccess {
        categories {
          _id
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

export interface IBlogsLastTwoData {
  blogsLastTwo: {
    blogs: IBlog[];
    error?: IError;
  };
}

export interface IBlogsWeekData {
  blogsWeek: {
    report: IBlogsReport[];
    error?: IError;
  };
}

export interface IBlogsLastTwoQueryInput {
  blogs: {
    active: boolean;
  };
}

export interface ICategoriesQueryData {
  categories: {
    error?: IError;
    categories?: ICategory[];
  }
}

export interface ICategoriesQueryInput {
  categories: {
    active: boolean;
  }
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

export const useBlogsLastTwoActiveQuery = (): QueryResult<IBlogsLastTwoData, IBlogsLastTwoQueryInput> => {
  return useQuery<IBlogsLastTwoData, IBlogsLastTwoQueryInput>(BLOGS_LAST_TWO_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      blogs: {
        active: true
      }
    }
  });
};

export const useBlogsLastTwoInactiveQuery = (): QueryResult<IBlogsLastTwoData, IBlogsLastTwoQueryInput> => {
  return useQuery<IBlogsLastTwoData, IBlogsLastTwoQueryInput>(BLOGS_LAST_TWO_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      blogs: {
        active: false
      }
    }
  });
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

export const useCategoriesQuery = (): QueryResult<ICategoriesQueryData, ICategoriesQueryInput> => {
  return useQuery<ICategoriesQueryData, ICategoriesQueryInput>(CATEGORIES_QUERY, {
    variables: {
      categories: {
        active: true
      }
    }
  });
};
