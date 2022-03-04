import { useEffect, useMemo, useState } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { Container } from "./styled";
import { Props } from "./types";

const DynamicCarouselWithNoSSR = dynamic(
  // @ts-ignore
  () => import("react-spring-3d-carousel"),
  { ssr: false }
);

const AUTO_SLIDE_INTERVAL = 3000;

const Slider = ({ slidesData }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const target =
        activeSlide === slidesData.length - 1 ? 0 : activeSlide + 1;
      setActiveSlide(target);
    }, AUTO_SLIDE_INTERVAL);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeSlide, setActiveSlide, slidesData.length]);
  const slides = useMemo(
    () =>
      slidesData.map((element, index) => {
        return { ...element, onClick: () => setActiveSlide(index) };
      }),
    [slidesData]
  );

  return (
    <Container>
      <DynamicCarouselWithNoSSR
        slides={slides}
        goToSlide={activeSlide}
        offsetRadius={20}
        showNavigation={false}
        animationConfig={config.default}
      />
    </Container>
  );
};

export default Slider;
