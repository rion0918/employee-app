import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://employee-app-service.onrender.com/graphql',
  // CORSでも問題なし（明示的に記載）
  fetchOptions: {
    mode: 'cors',
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json', // ✅ 必須
      'x-apollo-operation-name': 'some-operation', // ✅ どんな文字列でもOK
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;