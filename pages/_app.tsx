import { useMemo } from "react";
import ReactGA from "react-ga";
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
import CustomScripts from "components/custom-scripts";

ReactGA.initialize("G-2H0VWLM7LB");

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
      <CustomScripts />
    </>
  );
}

export default MyApp;
