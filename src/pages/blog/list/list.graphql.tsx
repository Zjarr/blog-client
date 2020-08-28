import { DocumentNode, gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { QueryTuple } from '@apollo/client/react/types/types';

import { IError, IBlog, IPagination } from '../../../utils/interfaces';

const BLOGS_QUERY: DocumentNode = gql`
  query Blogs($blogs: GetBlogsInput!) {
    blogs(blogs: $blogs) {
      ... on BlogsSuccess {
        blogs {
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

export interface IBlogsQueryData {
  blogs: {
    error?: IError;
    blogs?: IBlog[];
  }
}

export interface IBlogsQueryInput {
  blogs: {
    active: boolean;
    name: string;
    pagination: IPagination;
  }
}

export const useBlogsQuery = (): QueryTuple<IBlogsQueryData, IBlogsQueryInput> => {
  return useLazyQuery<IBlogsQueryData, IBlogsQueryInput>(BLOGS_QUERY, { fetchPolicy: 'cache-and-network' });
};
