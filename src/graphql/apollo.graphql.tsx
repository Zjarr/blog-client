import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const { REACT_APP_SERVER } = process.env;

const httpLink: ApolloLink = createUploadLink({
  credentials: 'include',
  uri: REACT_APP_SERVER
}) as unknown as ApolloLink;

const authLink: ApolloLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  };
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
