import { useMemo } from "react";
import type { AppProps } from "next/app";
import "normalize.css";
import "@fontsource/plus-jakarta-sans";
import GlobalStyles from "atomic/_static/global-styles";
import Header from "components/header";
import Footer from "components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const MemoizedGlobalStyles = useMemo(() => <GlobalStyles />, []);
  return (
    <>
      {MemoizedGlobalStyles}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
