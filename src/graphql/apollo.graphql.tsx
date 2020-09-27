import { ApolloClient, ApolloLink, DefaultOptions, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { OperationDefinitionNode } from 'graphql';
import Cookies from 'js-cookie';
import OmitDeep from 'omit-deep-lodash';

import { STRING_AUTHORIZATION_COOKIE } from '../utils/values';

const { REACT_APP_SERVER } = process.env;

const AuthLink: ApolloLink = setContext((_, { headers }) => {
  const token = Cookies.get(STRING_AUTHORIZATION_COOKIE);

  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      ...headers
    }
  };
});

const ClearLink: ApolloLink = new ApolloLink((operation, forward) => {
  const keysToOmit = '__typename';

  const def = getMainDefinition(operation.query) as OperationDefinitionNode;

  if (def && def.operation === 'mutation') {
    operation.variables = OmitDeep(operation.variables, keysToOmit);
  }

  return forward ? forward(operation) : null;
});

const HttpLink: ApolloLink = createUploadLink({
  uri: REACT_APP_SERVER
}) as unknown as ApolloLink;


const link: ApolloLink = ApolloLink.from([
  AuthLink,
  ClearLink,
  HttpLink
]);

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'network-only'
  }
};

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions,
  link
});
