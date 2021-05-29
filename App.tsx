import React from 'react'
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import RootScreenContainer from './src/screen/RootScreen';

const httpLink = createHttpLink({
  uri:"https://7qmuwezkd5gyvjemaqige5keqq.appsync-api.ap-northeast-2.amazonaws.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key": "da2-qp3y6x33rnegjmr2dt7sjennau",
      "userId":"dayeon"
    },
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <RootScreenContainer />
  </ApolloProvider>
);

export default App;
