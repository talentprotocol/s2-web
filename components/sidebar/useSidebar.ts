import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarVisible, setSidebarStatus] = useState(false);
  return {
    isSidebarVisible,
    setSidebarStatus,
  };
};
