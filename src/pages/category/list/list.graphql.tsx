import { DocumentNode, gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { QueryTuple } from '@apollo/client/react/types/types';

import { ICategory, IError, IPagination } from '../../../utils/interfaces';

const CATEGORIES_QUERY: DocumentNode = gql`
  query GetCategories ($categories: GetCategoriesInput!) {
    categories(categories: $categories) {
      ... on CategoriesSuccess {
        categories {
          _id
          active
          description
          icon
          name
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

export interface ICategoriesQueryData {
  categories: {
    error?: IError;
    categories?: ICategory[];
  }
}

export interface ICategoriesQueryInput {
  categories: {
    active: boolean;
    name: string;
    pagination: IPagination;
  }
}

export const useCategoriesQuery = (): QueryTuple<ICategoriesQueryData, ICategoriesQueryInput> => {
  return useLazyQuery<ICategoriesQueryData, ICategoriesQueryInput>(CATEGORIES_QUERY, { fetchPolicy: 'cache-and-network' });
};
