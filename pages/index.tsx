import type { NextPage } from "next";
import { Page } from "atomic/_static/containers";
import LandingSection from "components/page-sections/landing-section";

const Home: NextPage = () => {
  return (
    <Page>
      <LandingSection />
    </Page>
  );
};

export default Home;
