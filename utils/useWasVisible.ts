import { useEffect, useState, RefObject } from "react";

export const useWasVisible = (
  element: RefObject<HTMLDivElement> | null,
  rootMargin: string
) => {
  const [wasVisible, setWasVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!wasVisible) {
          setWasVisible(entry.isIntersecting);
        }
      },
      { rootMargin }
    );
    element?.current && observer.observe(element.current);
    return () => {
      element?.current && observer.unobserve(element.current);
    };
  }, [element?.current]);
  return wasVisible;
};
