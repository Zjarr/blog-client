import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';

import React from 'react';
import { useCookies } from 'react-cookie';

export const GraphqlClient: React.FC<IGraphqlClient> = ({ children }) => {
  const [cookies] = useCookies(['authorization_cookie']);

  const httpLink: ApolloLink = createHttpLink({
    uri: 'http://localhost:9001/graphql',
  });

  const authLink = (token: string): ApolloLink => {
    return setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      };
    });
  };

  const client = (token: string): ApolloClient<NormalizedCacheObject> => {
    return new ApolloClient({
      link: authLink(token).concat(httpLink),
      cache: new InMemoryCache()
    });
  };

  return (
    <ApolloProvider client={client(cookies.authorization_cookie)}>
      {children}
    </ApolloProvider>
  );
};

interface IGraphqlClient { }
