import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
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
  credentials: 'include',
  uri: REACT_APP_SERVER
}) as unknown as ApolloLink;

const AuthLink: ApolloLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  };
});

const link = ApolloLink.from([
  AuthLink,
  ClearLink,
  HttpLink
]);

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
