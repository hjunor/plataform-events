import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context";
import { client } from "./lib/apolo";

import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
