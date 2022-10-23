import Image from "next/image";
import { FunctionComponent } from "react";
import Feed from "./Feed";

const Social: FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-offBlack w-screen h-fit relative grid grid-flow-row auto-rows-[auto auto] pb-4 pt-4 pl-2 pr-2">
      <div className="row-start-1 col-start-1 relative w-full h-full bg-offWhite border-offBlack border-8 border-r-4 border-b-4 text-offBlack text-5xl font-thun">
        NEW SOCIAL <br /> INTEGRATIONS <br /> FOR <br />
        REALMS <br />
        INTERFACES
      </div>
      <div id="static" className="row-start-1 col-start-2 relative w-full h-full border-offBlack border-8 border-l-4 border-r-4 border-b-4"></div>
      <div className="row-start-1 col-start-3 relative w-full h-96 border-offBlack border-8 border-l-4 border-b-4">
        <Image
          objectFit="cover"
          layout="fill"
        //   width={50}
        //   height={80}
        className="w-full h-full"
          src="/images/digifizzy/digifizzy1.png"
        />
      </div>
      <div className="row-start-2 col-start-1 relative w-full h-fit border-offBlack border-8 border-r-4 border-b-4 text-white">
        NOUS AIDENS LES VE
      </div>
      <div id="static2" className="row-start-2 col-start-2 relative w-10 h-fit border-offBlack border-8 border-l-4 border-r-4 border-b-4"></div>
      <div className="row-start-2 col-start-3 relative w-full h-fit bg-offWhite border-offBlack border-8 border-l-4 border-b-4">
        <Feed />
      </div>
    </div>
  );
};

export default Social;
