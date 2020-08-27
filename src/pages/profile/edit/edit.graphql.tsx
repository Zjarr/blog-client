import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react/hooks/useMutation';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { MutationTuple, QueryResult } from '@apollo/client/react/types/types';
import { DocumentNode } from 'graphql';

import { IError, ISocial, IUser } from '../../../utils/interfaces';

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

const USER_MUTATION: DocumentNode = gql`
  mutation UserMutation($user: UserInput!) {
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

interface IUserQueryInput {
  user: {
    _id: string;
  }
}

export interface IUserMutationInput {
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

export interface IUserData {
  user: {
    error?: IError;
    user?: IUser;
  }
}

export const useUserQuery = (_id: string): QueryResult<IUserData, IUserQueryInput> => {
  return useQuery<IUserData, IUserQueryInput>(USER_QUERY, {
    variables: {
      user: {
        _id
      }
    }
  });
};

export const useUserMutation = (): MutationTuple<IUserData, IUserMutationInput> => {
  return useMutation<IUserData, IUserMutationInput>(USER_MUTATION);
};
