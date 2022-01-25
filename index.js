import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  uri: 'https://apollo-gateway-t4modcxifa-uc.a.run.app',
  headers: {
      'client-name': 'web-client',
      'client-version': '1.1',
      'queryDeduplication': false
  },
});

queries = [
  gql("query getFlights { flights { flightNumber, departureDate }}")
]
