import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { MutationTuple } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';

import { IError, ISocial, IUser } from '../../../utils/interfaces';

const UPDATE_USER_MUTATION: DocumentNode = gql`
  mutation UpdateUser ($user: UserInput!) {
    user(user: $user) {
      ... on UserSuccess {
        user {
          _id
          about
          created
          email
          firstname
          image
          lastname
          social {
            _id
            icon
            name
            url
          }
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

export interface IUpdateUserMutationInput {
  user: {
    _id?: string;
    about?: string;
    email: string;
    file?: File;
    firstname: string;
    image?: string;
    lastname: string;
    password?: string;
    social?: ISocial[];
  };
}

export interface IUpdateUserMutationData {
  user: {
    error?: IError;
    user: IUser;
  }
}

export const useUpdateUserMutation = (): MutationTuple<IUpdateUserMutationData, IUpdateUserMutationInput> => {
  return useMutation<IUpdateUserMutationData, IUpdateUserMutationInput>(UPDATE_USER_MUTATION);
};
