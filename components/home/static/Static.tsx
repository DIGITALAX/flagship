import Image from "next/image";
import { FunctionComponent } from "react";

const Static: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-full relative grid grid-flow-row auto-rows-[auto auto] h-full place-items-center p-12">
      <div className="row-start-1 w-full h-fit font-lib text-offBlack relative">
        <div className="w-full h-fit grid grid-flow-col auto-cols-[auto auto] relative">
          <div className="col-start-1 w-full h-fit relative text-left">
            ref code text
          </div>
          <div className="col-start-2 w-full h-fit relative text-right">
            some other text
          </div>
        </div>
      </div>
      <div className="w-full h-full row-start-2 relative place-self-center">
        <div className="w-full h-[85vh] relative flex">
          <Image
            src="/images/static.png"
            layout="fill"
            className="w-full rounded-xl"
          />
        </div>
        <div className="relative z-30 w-60 h-80 border-6 border-offBlack rounded-xl">
          <video>
            <source></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Static;
