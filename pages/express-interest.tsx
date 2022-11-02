import type { NextPage } from "next";
import { AiFillBackward } from "react-icons/ai";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "./_app";
import Form from "../components/expressInterest/Form";
import Head from "next/head";
import { PreOrderProps } from "../types/general.types";

const PreOrder: NextPage<PreOrderProps> = ({heartColor}): JSX.Element => {
  const { expressInterest } = useContext(GlobalContext);
  return (
    <div className="flex min-h-screen h-fit min-w-screen w-screen relative selection:bg-lightYellow selection:text-lightYellow bg-mainBg">
      <Head>
        <title>Express Interest</title>
        <meta name="og:url" content="https://digitalax.xyz/express-interest" />
        <meta name="og:title" content="Express Interest" />
        <meta name="og:description" content="Express Interest IRL" />
        <meta name="og:image" content="https://digitalax.xyz/card.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:url" content="https://digitalax.xyz/express-interest" />
        <meta name="og:image" content="https://digitalax.xyz/express-interest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalax" />
        <meta name="twitter:creator" content="@digitalax" />
        <meta
          name="twitter:image"
          content="https://digitalax.xyz/express-interest"
        />
        <meta name="twitter:url" content="https://digitalax.xyz/express-interest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://digitalax.xyz/express-interest" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <div className="flex flex-col w-full flex-auto h-full min-h-full">
        <div className="relative grid auto-rows-[auto auto] grid-flow-row w-full h-fit gap-3">
          <Link href={"/"}>
            <div className="text-mainText font-fira left-7 self-center pt-8 pl-6 place-self-start h-fit w-fit top-7 opacity-80 hover:opacity-20 cursor-sewingHS row-start-1">
              <AiFillBackward
                color={heartColor}
                size={25}
                className="float-left mr-2"
              />{" "}
              Return
            </div>
          </Link>
          <div className="relative row-start-2 h-fit w-fit justify-self-start sm:justify-self-center pr-4 pl-4 pt-20 sm:pl-20 sm:pr-8">
            <div className="text-mainText font-firaB text-3xl leading-relaxed">
              This work is not yet for sale.
            </div>
          </div>
          <div className="relative row-start-3 h-fit w-fit justify-self-start sm:justify-self-center pl-4 pr-4 sm:pl-20">
            <div className="font-fira text-base text-mainText leading-snug relative w-full">
              Let its Creator know that you'd like it to be.
            </div>
          </div>
          <div className="relative row-start-4 h-fit w-fit justify-self-center sm:pl-20 pt-10 pr-4 pl-4 sm:pr-8 pb-20">
            {expressInterest !== "" ? (
              <Form />
            ) : (
              <Link href={"/#shop"}>
                <div className="relative text-mainText font-fira text-lg cursor-sewingHS hover:text-lightYellow h-fit w-fit">
                  Please Select the NFT you'd like to collect.
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
