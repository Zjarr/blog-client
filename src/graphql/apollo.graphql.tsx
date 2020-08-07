import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const { REACT_APP_SERVER } = process.env;

const httpLink: ApolloLink = createHttpLink({
  credentials: 'include',
  uri: REACT_APP_SERVER
});

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
