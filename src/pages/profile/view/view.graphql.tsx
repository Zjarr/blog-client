import { DocumentNode, gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { QueryResult } from '@apollo/client/react/types/types';

import { IError, IUser } from '../../../utils/interfaces';

const PROFILE_QUERY: DocumentNode = gql`
  query Profile ($user: GetUserInput!) {
    user(user: $user) {
      ... on UserSuccess {
        user {
          _id
          about
          created
          email
          image
          lastname
          name
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

interface IProfileQueryInput {
  user: {
    _id?: string;
    email?: string;
  }
}

export interface IProfileQueryData {
  user: {
    error?: IError;
    user?: IUser;
  }
}

export const useProfileQuery = (email: string): QueryResult<IProfileQueryData, IProfileQueryInput> => {
  return useQuery<IProfileQueryData, IProfileQueryInput>(
    PROFILE_QUERY,
    {
      variables: {
        user: {
          email
        }
      }
    }
  );
};
