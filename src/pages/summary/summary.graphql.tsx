import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IBlog, IError, IImage, IPagination } from '../../utils/interfaces';

const BLOGS_QUERY: DocumentNode = gql`
  query BlogsQuery($blogs: GetBlogsInput!) {
    blogs(blogs: $blogs) {
      ... on BlogsSuccess {
        blogs {
          _id
          active
          categories
          description
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

export interface IBlogsQueryData {
  blogs: {
    error?: IError;
    blogs?: IBlog[];
    pagination?: IPagination;
  }
}

export interface IBlogsQueryInput {
  blogs: {}
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

export const useBlogsQuery = (): QueryResult<IBlogsQueryData, IBlogsQueryInput> => {
  return useQuery<IBlogsQueryData, IBlogsQueryInput>(BLOGS_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      blogs: {}
    }
  });
};

export const useImagesQuery = (): QueryResult<IImagesQueryData, IImagesQueryInput> => {
  return useQuery<IImagesQueryData, IImagesQueryInput>(IMAGES_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      images: {}
    }
  });
};
