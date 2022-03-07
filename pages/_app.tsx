import { useMemo } from "react";
import ReactGA from "react-ga";
import type { AppProps } from "next/app";
import "normalize.css";
import "animate.css";
import "@fontsource/plus-jakarta-sans";
import GlobalStyles from "atomic/_static/global-styles";
import Header from "components/header";
import Footer from "components/footer";
import Head from "components/head";

ReactGA.initialize("G-2H0VWLM7LB");

function MyApp({ Component, pageProps }: AppProps) {
  const memoizedGlobalStyles = useMemo(() => <GlobalStyles />, []);
  return (
    <>
      <Head />
      {memoizedGlobalStyles}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
