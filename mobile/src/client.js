import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

let server = 'http://146.185.149.19:3000/graphql';
let local = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: server }),
  cache: new InMemoryCache()
});

export default client;