import type { NextPage } from "next";
import { Page } from "atomic/_static/containers";
import LandingSection from "components/page-sections/landing-section";
import TalentSection from "components/page-sections/talent-section";
import SuccessSection from "../components/page-sections/success-section";
import SupporterSection from "../components/page-sections/supporter-section";
import WelcomeSection from "../components/page-sections/welcome-section";
import MarketingSection from "../components/page-sections/marketing-section";
import CommunitySection from "../components/page-sections/community-section";
import ProfileSection from "../components/page-sections/profile-section";

const Home: NextPage = () => {
  return (
    <Page>
      <LandingSection />
      <TalentSection />
      <SuccessSection />
      <SupporterSection />
      <WelcomeSection />
      <MarketingSection />
      <CommunitySection />
      <ProfileSection />
    </Page>
  );
};

export default Home;
