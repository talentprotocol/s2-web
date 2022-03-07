import { useCallback, useEffect, useState, useRef } from "react";

export const useMediaQuery = (query: string): boolean => {
  const isServerSide = useRef(typeof window === "undefined");
  const getMatches = useCallback((query: string): boolean => {
    if (!isServerSide.current) {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);
  const [matches, setMatches] = useState<boolean>(
    !isServerSide.current && getMatches(query)
  );
  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [setMatches]);
  useEffect(() => {
    if (isServerSide.current) {
      return () => undefined;
    }
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
