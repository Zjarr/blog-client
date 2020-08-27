import { gql } from '@apollo/client/core';
import { useLazyQuery } from '@apollo/client/react/hooks/useLazyQuery';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { MutationTuple, QueryTuple } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';

import { IImage, IError } from '../../../utils/interfaces';

const IMAGE_MUTATION: DocumentNode = gql`
  mutation ImageMutation($image: ImageInput!) {
    image(image: $image) {
      ... on ImageSuccess {
        image {
          _id
          active
          alt
          description
          name
          url
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

const IMAGE_QUERY: DocumentNode = gql`
  query ImageQuery($image: GetImageInput!) {
    image(image: $image) {
      ... on ImageSuccess {
        image {
          _id
          active
          alt
          description
          name
          url
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

interface IImageQueryInput {
  image: {
    _id?: string;
  }
}

export interface IImageMutationInput {
  image: {
    _id?: string;
    active: boolean;
    alt: string;
    description?: string;
    file?: File;
    name: string;
    url?: string;
  }
}

export interface IImageData {
  image: {
    error?: IError;
    image?: IImage;
  }
}

export const useImageMutation = (): MutationTuple<IImageData, IImageMutationInput> => {
  return useMutation<IImageData, IImageMutationInput>(IMAGE_MUTATION);
};

export const useImageQuery = (): QueryTuple<IImageData, IImageQueryInput> => {
  return useLazyQuery<IImageData, IImageQueryInput>(IMAGE_QUERY);
};

