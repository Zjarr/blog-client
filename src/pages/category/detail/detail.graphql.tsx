import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { MutationTuple, QueryTuple } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';

import { ICategory, IError } from '../../../utils/interfaces';

const CATEGORY_MUTATION: DocumentNode = gql`
  mutation CategoryMutation ($category: CategoryInput!) {
    category(category: $category) {
      ... on CategorySuccess {
        category {
          _id
          active
          description
          icon
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

const CATEGORY_QUERY: DocumentNode = gql`
  query CategoryQuery ($category: GetCategoryInput!) {
    category(category: $category) {
      ... on CategorySuccess {
        category {
          _id
          active
          description
          icons
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

interface ICategoryQueryInput {
  category: {
    _id?: string;
    name?: string;
  }
}

export interface ICategoryMutationInput {
  category: {
    _id?: string;
    active: boolean;
    description?: string;
    icon: string;
    name: string;
  }
}

export interface ICategoryData {
  category: {
    category?: ICategory;
    error?: IError;
  }
}

export const useCategoryMutation = (): MutationTuple<ICategoryData, ICategoryMutationInput> => {
  return useMutation<ICategoryData, ICategoryMutationInput>(CATEGORY_MUTATION);
};

export const useCategoryQuery = (): QueryTuple<ICategoryData, ICategoryQueryInput> => {
  return useLazyQuery<ICategoryData, ICategoryQueryInput>(CATEGORY_QUERY);
};

