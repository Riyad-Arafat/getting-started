import { useMemo } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient: ApolloClient<any> | null = null;

function createIsomorphLink() {
  return new HttpLink({
    uri: process.env.GRAPHQL_URL,
    credentials: "same-origin",
    headers: {
      authorization:
        typeof window !== "undefined" ? localStorage.getItem("token") : "",
    },
  });
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
    headers: {},
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
