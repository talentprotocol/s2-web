import NextHead from "next/head";

const title = "Talent Protocol - Web3 Professional Community";
const description = "Talent Protocol is the web3 professional community where high-potential individuals can build an on-chain resume and launch a talent token, allowing anyone to easily invest in their careers."

const Head = () => (
    <NextHead>
      <title>{title}</title>
      <meta property="og:url" content="https://www.talentprotocol.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content="/metaimage.jpeg" />

      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
);

export default Head;
