import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://media.sift.com/wp/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export { apolloClient };
