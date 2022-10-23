import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";

const BASE_URL: string = "https://api.lens.dev";

const httpLink = new HttpLink({ uri: BASE_URL });

const retryLink = new RetryLink();

let link: any;

link = ApolloLink.from([retryLink, httpLink]);

type decodedType = {
  exp: number;
  iat: number;
  id: string;
  role: string;
};
let decoded: decodedType;

// auth client
export const authClient = new ApolloClient({
  link: link,
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
