import { DocumentNode, gql } from '@apollo/client/core';

import { IError } from '../../utils/interfaces';

export const LOGIN_MUTATION: DocumentNode = gql`
  mutation Login ($user: LoginInput!) {
    login(user: $user) {
      ... on LoginSuccess {
        token
      }
      ... on Error {
        error {
          code,
          message,
          status
        }
      }
    }
  }
`;

export interface ILoginMutation {
  error?: IError;
  token?: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}
