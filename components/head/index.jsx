import NextHead from "next/head";

const Head = () => {
  const title = "Talent Protocol - Web3 Professional Network";
  const description = "Talent Protocol is the web3 professional network where high-potential individuals can build an on-chain resume and launch a talent token, allowing anyone to easily invest in their careers."

  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:url" content="https://www.talentprotocol.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content="/metaimage.png" />

      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  )
};

export default Head;
