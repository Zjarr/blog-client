import { DocumentNode, gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { MutationTuple, QueryResult } from '@apollo/client/react/types/types';

import { IError, IUser } from '../../../utils/interfaces';

const USER_QUERY: DocumentNode = gql`
  query UserQuery($user: GetUserInput!) {
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

const PASSWORD_MUTATION: DocumentNode = gql`
  mutation PasswordMutation($password: UserPasswordInput!) {
    password(password: $password) {
      ... on UserSuccess {
        user {
          _id
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

export interface IUserQueryData {
  user: {
    error?: IError;
    user?: IUser;
  }
}

export interface IUserQueryInput {
  user: {
    _id: string;
  }
}

export interface IPasswordMutationData {
  password: {
    error?: IError;
    user?: IUser;
  }
}

export interface IPasswordMutationInput {
  password: {
    _id: string;
    current: string;
    updated: string;
  }
}

export const useUserQuery = (_id: string): QueryResult<IUserQueryData, IUserQueryInput> => {
  return useQuery<IUserQueryData, IUserQueryInput>(USER_QUERY, {
    variables: {
      user: {
        _id
      }
    }
  });
};

export const usePasswordMutation = (): MutationTuple<IPasswordMutationData, IPasswordMutationInput> => {
  return useMutation<IPasswordMutationData, IPasswordMutationInput>(PASSWORD_MUTATION);
};
