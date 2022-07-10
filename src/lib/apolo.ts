import { ApolloClient, InMemoryCache } from "@apollo/client";

const Token = import.meta.env.VITE_API_ACCESS_TOKEN.toString();
const headers = {
  Authorization: Token,
};
export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers,
  cache: new InMemoryCache(),
});
