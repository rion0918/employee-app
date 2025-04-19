import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// apollo-client.ts
const httpLink = createHttpLink({
  uri: 'https://employee-app-service.onrender.com/graphql',
  fetchOptions: {
    mode: 'cors', // 明示的にCORS指定
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-apollo-operation-name': 'default-operation',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;