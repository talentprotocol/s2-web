import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const getMatches = useCallback((query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);
  const [matches, setMatches] = useState<boolean>(getMatches(query));
  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [setMatches]);
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

// thanks: https://usehooks-ts.com/react-hook/use-media-query
