import { NextPage } from "next";
import Head from "next/head";

const Whitepaper: NextPage = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen min-h-screen">
      <Head>
        <title>Whitepaper V3</title>
        <meta name="og:url" content="https://digitalax.xyz/whitepaper" />
        <meta name="og:title" content="Whitepaper V3" />
        <meta name="og:description" content="Whitepaper V3" />
        <meta name="og:image" content="https://digitalax.xyz/card.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:url" content="https://digitalax.xyz/whitepaper" />
        <meta name="og:image" content="https://digitalax.xyz/whitepaper" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalax" />
        <meta name="twitter:creator" content="@digitalax" />
        <meta name="twitter:image" content="https://digitalax.xyz/whitepaper" />
        <meta name="twitter:url" content="https://digitalax.xyz/whitepaper" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://digitalax.xyz/whitepaper" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <embed
        className="w-full h-full"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
};

export default Whitepaper;
