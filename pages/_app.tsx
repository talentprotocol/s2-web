import { useMemo } from "react";
import type { AppProps } from "next/app";
import "normalize.css";
import GlobalStyles from "atomic/_static/global-styles";
import Header from "components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const MemoizedGlobalStyles = useMemo(() => <GlobalStyles />, []);
  return (
    <>
      {MemoizedGlobalStyles}
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
