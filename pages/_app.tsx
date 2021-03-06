import { useMemo } from "react";
import type { AppProps } from "next/app";
import "normalize.css";
import "animate.css";
import "@fontsource/plus-jakarta-sans";
import GlobalStyles from "atomic/_static/global-styles";
import Header from "components/header";
import Footer from "components/footer";
import Sidebar from "components/sidebar";
import Head from "components/head";
import { useSidebar } from "components/sidebar/useSidebar";
import GoogleAnalytics from "components/google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const memoizedGlobalStyles = useMemo(() => <GlobalStyles />, []);
  const sidebarState = useSidebar();
  const memoizedSidebar = useMemo(
    () => (
      <Sidebar
        isSidebarVisible={sidebarState.isSidebarVisible}
        isClosing={sidebarState.isClosing}
        toggleSidebar={sidebarState.toggleSidebar}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sidebarState.isClosing]
  );
  return (
    <>
      <Head />
      {memoizedGlobalStyles}
      {sidebarState.isSidebarVisible && memoizedSidebar}
      <Header
        toggleSidebar={sidebarState.toggleSidebar}
        isSidebarVisible={sidebarState.isSidebarVisible}
      />
      <Component {...pageProps} />
      <Footer />
      <GoogleAnalytics />
    </>
  );
}

export default MyApp;
