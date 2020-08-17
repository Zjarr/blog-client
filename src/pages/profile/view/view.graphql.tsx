import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IError, IUser } from '../../../utils/interfaces';

const USER_QUERY: DocumentNode = gql`
  query GetUser($user: GetUserInput!) {
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

export const useUserQuery = (_id: string): QueryResult<IUserQueryData, IUserQueryInput> => {
  return useQuery<IUserQueryData, IUserQueryInput>(USER_QUERY, {
    variables: {
      user: {
        _id
      }
    }
  });
};