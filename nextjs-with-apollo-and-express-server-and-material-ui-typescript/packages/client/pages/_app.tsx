import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@src/theme";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../Apollo";

// import { Title } from "../src/hooks";
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Nextjs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
