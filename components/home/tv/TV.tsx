import Image from "next/image";
import { FunctionComponent } from "react";

const TV: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full min-w-full h-fit pb-8">
      <div className="w-[90%] h-full min-h-full border-8 border-offBlack rounded-3xl relative col-start-1 relative place-self-center">
        <video
          autoPlay
          muted
          loop
          placeholder="blur"
          className="relative max-w-none min-h-full h-full w-full object-cover rounded-lg flex"
        >
          <source src="/videos/glitch.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute top-0 w-full max-h-full h-full">
          <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full">
            <div className="relative col-start-1 w-fit h-fit place-self-center pl-2 pr-2 top-32 opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70">
              <Image
                src="/images/digifizzy/digifizzy1.png"
                width={260}
                height={370}
              />
            </div>
            <div className="relative col-start-2 w-fit h-fit place-self-center pb-20 pl-2 pr-2 top-16 active:scale-95 cursor-sewingHS opacity-90 hover:opacity-70">
              <Image
                src="/images/digifizzy/digifizzy2.png"
                width={260}
                height={370}
              />
            </div>
            <div className="relative col-start-3 w-fit h-fit place-self-center pl-2 pr-2 bottom-16 opacity-90 active:scale-95 hover:opacity-70 cursor-sewingHS">
              <Image
                src="/images/digifizzy/digifizzy3.png"
                width={260}
                height={370}
              />
            </div>
            <div
              className="relative col-start-4 w-fit h-fit place-self-center pl-2 pr-2
            bottom-32 opacity-90 active:scale-95 hover:opacity-70 cursor-sewingHS"
            >
              <Image
                src="/images/digifizzy/digifizzy4.png"
                width={260}
                height={370}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TV;
