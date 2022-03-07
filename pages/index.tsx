import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useMediaQuery } from "utils/useMediaQuery";
import { Page } from "atomic/_static/containers";
import LandingSection from "components/page-sections/landing-section";
import SupportedBlockChainsSection from "components/page-sections/supported-blockchains-section";
import TalentSection from "components/page-sections/talent-section";
import SuccessSection from "components/page-sections/success-section";
import SupporterSection from "components/page-sections/supporter-section";
import WelcomeSection from "components/page-sections/welcome-section";
import MarketingSection from "components/page-sections/marketing-section";
import CommunitySection from "components/page-sections/community-section";

const DynamicProfileSectionNoSSR = dynamic(
  // @ts-ignore
  () => import("components/page-sections/profile-section"),
  { ssr: false }
);

const Home: NextPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Page>
      <LandingSection />
      <SupportedBlockChainsSection />
      <TalentSection />
      <SuccessSection />
      <SupporterSection />
      <WelcomeSection />
      <MarketingSection />
      <CommunitySection />
      {isMobile && <DynamicProfileSectionNoSSR />}
    </Page>
  );
};

export default Home;
