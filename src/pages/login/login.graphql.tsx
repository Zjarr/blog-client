import { DocumentNode, gql } from '@apollo/client/core';

import { IError } from '../../utils/interfaces';

export const LOGIN_MUTATION: DocumentNode = gql`
  mutation Login ($user: LoginInput!) {
    login(user: $user) {
      ... on LoginSuccess {
        token,
        user {
          email
        }
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
  login: {
    error?: IError;
    token?: string;
    user?: {
      email: string;
    }
  }
}

export interface ILoginInput {
  user: {
    email: string;
    password: string;
  }
}
