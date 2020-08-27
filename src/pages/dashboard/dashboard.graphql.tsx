import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IError, IUser } from '../../utils/interfaces';

const SYSTEM_QUERY: DocumentNode = gql`
  query SystemQuery {
    system {
      version
    }
  }
`;

const USER_QUERY: DocumentNode = gql`
  query UserQuery($user: GetUserInput!) {
    user(user: $user) {
      ... on UserSuccess {
        user {
          _id
          image
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

export interface ISystemQueryData {
  system: {
    version: string;
  }
}

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

export const useSystemQuery = (): QueryResult<ISystemQueryData> => {
  return useQuery<ISystemQueryData>(SYSTEM_QUERY);
};

export const useUserQuery = (_id: string): QueryResult<IUserQueryData, IUserQueryInput> => {
  return useQuery<IUserQueryData, IUserQueryInput>(USER_QUERY, {
    variables: {
      user: {
        _id
      }
    }
  });
};
