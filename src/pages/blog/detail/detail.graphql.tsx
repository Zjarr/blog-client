import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { MutationTuple, QueryResult, QueryTuple } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';

import { IBlog, ICategory, IError } from '../../../utils/interfaces';

const BLOG_MUTATION: DocumentNode = gql`
  mutation BlogMutation($blog: BlogInput!) {
    blog(blog: $blog) {
      ... on BlogSuccess {
        blog {
          _id
          active
          body
          categories
          created
          description
          image
          name
          slug
          sources {
            name
            url
          }
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

const BLOG_QUERY: DocumentNode = gql`
  query BlogQuery($blog: GetBlogInput!) {
    blog(blog: $blog) {
      ... on BlogSuccess {
        blog {
          _id
          active
          body
          categories
          created
          description
          image
          name
          slug
          sources {
            name
            url
          }
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

const CATEGORIES_QUERY: DocumentNode = gql`
  query CategoriesQuery($categories: GetCategoriesInput!) {
    categories(categories: $categories) {
      ... on CategoriesSuccess {
        categories {
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

interface IBlogQueryInput {
  blog: {
    _id?: string;
  }
}

export interface IBlogMutationInput {
  blog: {
    _id?: string;
    active: boolean;
    description?: string;
    icon: string;
    name: string;
  }
}

export interface IBlogData {
  blog: {
    blog?: IBlog;
    error?: IError;
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

export const useCategoriesQuery = (): QueryResult<ICategoriesQueryData, ICategoriesQueryInput> => {
  return useQuery<ICategoriesQueryData, ICategoriesQueryInput>(CATEGORIES_QUERY, {
    variables: {
      categories: {
        active: true
      }
    }
  });
};

export const useBlogMutation = (): MutationTuple<IBlogData, IBlogMutationInput> => {
  return useMutation<IBlogData, IBlogMutationInput>(BLOG_MUTATION);
};

export const useBlogQuery = (): QueryTuple<IBlogData, IBlogQueryInput> => {
  return useLazyQuery<IBlogData, IBlogQueryInput>(BLOG_QUERY);
};
