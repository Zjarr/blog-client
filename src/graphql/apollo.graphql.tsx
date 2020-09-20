import { ApolloClient, ApolloLink, DefaultOptions, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { OperationDefinitionNode } from 'graphql';
import OmitDeep from 'omit-deep-lodash';

const { REACT_APP_SERVER } = process.env;

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

const AuthLink = (token?: string): ApolloLink => setContext((_, { headers }) => {
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      ...headers
    }
  };
});

const link = (token?: string): ApolloLink => ApolloLink.from([
  AuthLink(token),
  ClearLink,
  HttpLink
]);

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'network-only'
  }
};

export const client = (token?: string): ApolloClient<NormalizedCacheObject> => new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions,
  link: link(token)
});
