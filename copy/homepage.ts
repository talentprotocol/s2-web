import { Type as SubTitleType } from "atomic/_atom/subTitle/types";
import { Variant as ButtonType } from "atomic/_atom/button/types";

export const LandingSection = {
  subTitle: {
    content: "Season 02",
    type: SubTitleType.PRIMARY,
  },
  label:
    "#white#The web3 #yellow#professional network #white#for high-potential #yellow#builders#white#.",
  footer: {
    label: "#grey#We’re still in #white#beta",
    button: {
      text: "Sign Up",
      href: "https://beta.talentprotocol.com/sign_up",
    },
  },
};

export const SupportedBlockChainsSection = {
  subTitle: {
    content: "Supported Blockchains",
    type: SubTitleType.PRIMARY,
    isCentered: true,
  },
  footer: {
    label: "More coming",
  },
};

export const TalentSection = {
  subTitle: {
    content: "Talent",
    type: SubTitleType.SECONDARY,
  },
  title: "Made for builders and designed for the future of work.",
  description:
    "Where top talent can create an on-chain resume, launch their own token, and start building the support network they need to succeed. From loose connections to committed communities.",
};

export const SuccessSection = {
  title: "Success is collective.",
  description:
    "Until now careers have mostly been a single-player game where only a privileged few can win. With web3, careers are becoming multiplayer journeys where early support is rewarded and success is shared.",
};

export const SupporterSection = {
  subTitle: {
    content: "Supporter",
    type: SubTitleType.SECONDARY,
  },
  title: "Support talent early and be rewarded as they grow.",
  description:
    "Discover inspiring new talent, invest in their careers, and unlock the exclusive perks they offer. Receive crypto rewards for holding tokens, scouting talent and inviting new users to join the community.",
};

export const WelcomeSection = {
  subTitle: {
    content: "Welcome to Season 2",
    type: SubTitleType.SECONDARY,
  },
  title: "Your last chance to be an OG.",
  description:
    "Season 2 will bring NFTs, on-chain career goals, public profiles, and a new UI. Join the waitlist to access the $TAL token at a discounted price before token launch.",
  footer: {
    button: {
      text: "Sign up",
      href: "https://beta.talentprotocol.com/sign_up",
    },
  },
};

export const MarketingSection = {
  title: "Where professional connections have real value.",
  description:
    "A carbon-negative, interoperable, and user-owned social network that values quality of connections more than number of followers. Reputation is not how many people follow you, but how much they believe in you.",
};

export const CommunitySection = {
  subTitle: {
    content: "Help the community, earn NFTs.",
    type: SubTitleType.SECONDARY,
  },
  title: "A community, not a company.",
  description:
    "We're incorporated as a non-profit, building in public with our community, and on a path to progressive decentralization. Our code is open-source and our platform free to use.",
  footer: {
    button: {
      text: "Join us on Discord",
      href: "https://discord.com/invite/talentprotocol",
    },
  },
};

export const ProfileSection = {
  title:
    "Create your web3-native profile. No crypto experience needed.",
  description:
    "Join +200 other talent that already launched a token and a global community of +20,000 supporters that can help onboard you to web3.",
  footer: {
    button: {
      text: "Sign Up",
      href: "https://beta.talentprotocol.com/sign_up",
      type: ButtonType.SECONDARY,
    },
  },
};
