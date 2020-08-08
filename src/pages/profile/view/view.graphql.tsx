import { DocumentNode, gql } from '@apollo/client/core';

import { IError, IUser } from '../../../utils/interfaces';

export const PROFILE_QUERY: DocumentNode = gql`
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

export interface IProfileQuery {
  user: {
    error?: IError;
    user?: IUser;
  }
}

export interface IGetUserInput {
  user: {
    _id?: string;
    email?: string;
  }
}
