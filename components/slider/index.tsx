import { useMemo, useState } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";
import { Container } from "./styled";
import { slidesData } from "./slides-data";

const DynamicCarouselWithNoSSR = dynamic(
  // @ts-ignore
  () => import("react-spring-3d-carousel"),
  { ssr: false }
);

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = useMemo(
    () =>
      slidesData.map((element, index) => {
        return { ...element, onClick: () => setActiveSlide(index) };
      }),
    []
  );

  return (
    <Container>
      <DynamicCarouselWithNoSSR
        slides={slides}
        goToSlide={activeSlide}
        offsetRadius={1}
        showNavigation={false}
        animationConfig={config.stiff}
      />
    </Container>
  );
};

export default Slider;
