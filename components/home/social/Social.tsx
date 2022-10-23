import Image from "next/image";
import { FunctionComponent } from "react";
import { SocialProps } from "../../../types/general.types";
import Feed from "./Feed";

const Social: FunctionComponent<SocialProps> = ({
  getMoreFeed,
  publicationsFeed,
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-fit relative grid grid-flow-row auto-rows-[auto auto] pb-4 pt-4 pl-2 pr-2">
      <div className="row-start-1 col-start-1 relative w-fit h-full bg-offWhite border-offBlack border-8 border-r-4 border-b-4 text-offBlack text-6xl font-thun p-6 pb-48">
        NEW SOCIAL <br /> INTEGRATIONS <br /> FOR <br />
        REALMS <br />
        INTERFACES
      </div>
      <div
        id="static"
        className="row-start-1 col-start-2 relative w-16 h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4"
      ></div>
      <div className="row-start-1 col-start-3 relative w-full h-full border-offBlack border-8 border-l-4 border-b-4">
        <Image
          objectFit="cover"
          layout="fill"
          className="w-full h-full"
          src="/images/digifizzy/digifizzy1.png"
        />
      </div>
      <div className="row-start-2 col-start-1 relative w-full h-fit border-offBlack border-8 border-r-4 border-b-4 text-white">
        NOUS AIDENS LES VE
      </div>
      <div className="row-start-2 col-start-2 relative w-full h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4">
        <div className="grid-flow-col grid auto-cols-[auto auto] relative w-full h-full">
          <div
            id="static2"
            className="relative row-start-1 w-full h-full"
          ></div>
          <div className="relative row-start-2 w-full h-fit self-end justify-self-center bg-midWhite p-2 border-t-8 border-offBlack">
            <div className="grid grid-flow-col auto-cols-[auto auto] w-full h-fit relative">
              <div className="relative col-start-1 w-fit h-fit place-self-end self-end hover:rotate-12">
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
      <div className="row-start-2 col-start-3 relative w-full h-fit bg-offWhite border-offBlack border-8 border-l-4 border-b-4">
        <Feed publicationsFeed={publicationsFeed} getMoreFeed={getMoreFeed} />
      </div>
    </div>
  );
};

export default Social;
