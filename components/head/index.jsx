import NextHead from "next/head";
import { COLORS } from "atomic/_static/color-palette";

const Head = () => {
  const title = "Talent Protocol - Web3 Professional Network";
  const description = "Talent Protocol is the web3 professional network where high-potential individuals can build an on-chain resume and launch a talent token, allowing anyone to easily invest in their careers."

  return (
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
      <style>
        {`
          @font-face {
            font-family: 'Plus Jakarta Sans';
            src: url('/fonts/PlusJakartaSans-Regular.ttf');
          }
          @font-face {
            font-family: 'Plus Jakarta Sans';
            src: url('/fonts/PlusJakartaSans-Bold.ttf');
            font-weight: bold;
          }
          
          * {
            box-sizing: border-box;
          }
          
          html, body {
            overflow-x: hidden;
          }
          
          body {
            background: ${COLORS.BLACK};
            box-sizing: border-box;
            width: 100%;
          }

          .css-1fzpoyk:nth-child(3) {
            opacity: 1 !important;
          }

          .css-1fzpoyk:nth-child(1) {
            opacity: 0 !important;
            transition: 0.5s;
          }

          .css-1fzpoyk:nth-child(5) {
            opacity: 0 !important;
            transition: 0.5s;
          }`
        }
      </style>
    </NextHead>
  )
};

export default Head;
