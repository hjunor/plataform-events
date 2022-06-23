import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qcaiwq3oy001z49iyz82kt/master",
  cache: new InMemoryCache(),
});
