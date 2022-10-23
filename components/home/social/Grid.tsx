import Image from "next/image";
import { FunctionComponent } from "react";
import { GridProps } from "../../../types/general.types";
import Feed from "./Feed";

const Grid: FunctionComponent<GridProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-fit relative grid grid-flow-row auto-rows-[auto auto] pb-4 pt-4">
      <div className="row-start-1 col-start-1 relative w-fit h-full border-offBlack border-8 border-r-4 border-b-4 text-foot text-[4.6vw] lg:text-[5.6vw] xl:text-[4.6vw] font-thun">
        <Image layout="fill" objectFit="cover" src={"/images/tele.png"} />
        <div className="relative grid grid-flow-col w-full h-full pb-56 md:pr-6 pr-2 lg:pr-10 xl:pr-40">
          <div className="relative col-start-1 w-fit h-fit pl-4 md:pl-10 pt-10 leading-normal">
            NEW SOCIAL <br /> INTEGRATIONS <br /> FOR <br />
            REALMS <br />
            INTERFACES
          </div>
        </div>
      </div>
      <div
        id="static"
        className="row-start-1 col-start-2 relative w-6 md:w-16 h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4"
      ></div>
      <div className="row-start-1 col-start-3 relative w-full h-full border-offBlack md:border-8 md:border-l-4 md:border-b-4">
        <Image
          objectFit="cover"
          layout="fill"
          className="w-full h-full"
          src="/images/digifizzy/digifizzy1.png"
        />
      </div>
      <div className="row-start-2 col-start-1 relative w-full pb-12 lg:pb-0 h-full border-offBlack border-8 border-r-4 border-b-4 text-darkG bg-grayL font-aud text-[2.5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-tight p-6">
        THE FIRST PROFILES ARE LIVE ON LENS, <br /> WITH NEW PROTOCOL
        INTEGRATONS
        <br />
        RELEASED AT A STEADY CLIP. <span className="text-lensG">
          WHY LENS?
        </span>{" "}
        <br />
        DECENTRAIZED SOCIAL CONNECTS YOU <br /> WITH COLLECTORS AND CREATORS{" "}
        <br /> WITHOUT ALL THE EXTRA ANGST OVER
        <br /> WHY THE ALGORITHM DECIDED YOU’RE
        <br /> SHADOWBANNED –––––––– BECAUSE,
        <br /> WHY SHOULD ANYONE CARE WHAT ELON,
        <br /> JACK, ZUCK AND OTHER 4-LETTER
        <br /> CELEBRITIES THINK ABOUT WHAT WE
        <br /> HAVE TO SAY, WHEN WE HAVE WEB3?
      </div>
      <div className="row-start-2 col-start-2 relative w-full h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4">
        <div className="grid-flow-row grid auto-rows-[auto auto] relative w-full h-full">
          <div
            id="static2"
            className="relative row-start-1 w-6 md:w-16 h-full bg-offBlack"
          ></div>
          <div className="relative row-start-2 w-fit h-full border-t-8 border-offBlack self-end place-self-end">
            <div className="relative w-fit p-2 h-fit bg-midWhite ">
              <div className="relative w-fit h-full hover:rotate-12">
                <Image
                  width={40}
                  height={50}
                  src={"/images/inari.png"}
                  className="justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-start-3 relative w-full h-fit lg:h-full bg-offWhite border-offBlack lg:border-8 lg:border-l-4 lg:border-b-4">
        <div className="relative w-full h-full grid grid-flow-row auto-rows-[auto auto] content-center">
          <Feed
            publicationsFeed={publicationsFeed}
            getMoreFeed={getMoreFeed}
            queryWindowSize={queryWindowSize}
            queryWindowSizeMobile={queryWindowSizeMobile}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
