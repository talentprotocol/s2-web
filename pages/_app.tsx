import { useMemo } from "react";
import type { AppProps } from "next/app";
import "normalize.css";
import "@fontsource/plus-jakarta-sans";
import GlobalStyles from "atomic/_static/global-styles";
import Header from "components/header";
import Footer from "components/footer";
import Sidebar from "components/sidebar";
import { useSidebar } from "components/sidebar/useSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const memoizedGlobalStyles = useMemo(() => <GlobalStyles />, []);
  const sidebarState = useSidebar();
  const memoizedSidebar = useMemo(
    () => (
      <Sidebar
        setSidebarStatus={sidebarState.setSidebarStatus}
        isSidebarVisible={sidebarState.isSidebarVisible}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      {memoizedGlobalStyles}
      {sidebarState.isSidebarVisible && memoizedSidebar}
      <Header
        setSidebarStatus={sidebarState.setSidebarStatus}
        isSidebarVisible={sidebarState.isSidebarVisible}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
