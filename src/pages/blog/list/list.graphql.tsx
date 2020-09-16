import { DocumentNode, gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult, QueryTuple } from '@apollo/client/react/types/types';

import { IBlog, ICategory, IError, IPaginationInput } from '../../../utils/interfaces';

const BLOGS_QUERY: DocumentNode = gql`
  query BlogsQuery($blogs: GetBlogsInput!) {
    blogs(blogs: $blogs) {
      ... on BlogsSuccess {
        blogs {
          _id
          active
          categories
          image
          name
          updated
        }
        pagination {
          limit
          next
          page
          prev
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

export interface IBlogsQueryData {
  blogs: {
    error?: IError;
    blogs?: IBlog[];
  }
}

export interface IBlogsQueryInput {
  blogs: {
    active: boolean;
    category: string;
    name: string;
    pagination: IPaginationInput;
  }
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

export const useBlogsQuery = (): QueryTuple<IBlogsQueryData, IBlogsQueryInput> => {
  return useLazyQuery<IBlogsQueryData, IBlogsQueryInput>(BLOGS_QUERY);
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

