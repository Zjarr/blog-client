import { DocumentNode, gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { QueryTuple } from '@apollo/client/react/types/types';

import { IError, IImage, IPagination } from '../../../utils/interfaces';

const IMAGES_QUERY: DocumentNode = gql`
  query Images($images: GetImagesInput!) {
    images(images: $images) {
      ... on ImagesSuccess {
        images {
          _id
          active
          alt
          description
          name
          url
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

export interface IImagesQueryData {
  images: {
    error?: IError;
    images?: IImage[];
  }
}

export interface IImagesQueryInput {
  images: {
    active: boolean;
    name: string;
    pagination: IPagination;
  }
}

export const useImagesQuery = (): QueryTuple<IImagesQueryData, IImagesQueryInput> => {
  return useLazyQuery<IImagesQueryData, IImagesQueryInput>(IMAGES_QUERY, { fetchPolicy: 'cache-and-network' });
};
