import type { NextPage } from "next";
import { Page } from "atomic/_static/containers";
import Hero from "components/hero";
import HeroCopy from "components/hero-copy";
import {HERO_SECTION_1} from "copy/homepage"

const Home: NextPage = () => {
  return (
    <Page>
      <Hero>
        <HeroCopy subTitle={HERO_SECTION_1.subTitle}/>
      </Hero>
    </Page>
  );
};

export default Home;
