import { DocumentNode, gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { MutationTuple } from '@apollo/client/react/types/types';

import { IError, IUser } from '../../utils/interfaces';

const LOGIN_MUTATION: DocumentNode = gql`
  mutation Login ($user: LoginInput!) {
    login(user: $user) {
      ... on LoginSuccess {
        token
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

interface ILoginMutationInput {
  user: {
    email: string;
    password: string;
  }
}

export interface ILoginMutationData {
  login: {
    error?: IError;
    token?: string;
    user?: IUser;
  }
}

export const useLoginMutation = (): MutationTuple<ILoginMutationData, ILoginMutationInput> => {
  return useMutation<ILoginMutationData, ILoginMutationInput>(LOGIN_MUTATION);
};
