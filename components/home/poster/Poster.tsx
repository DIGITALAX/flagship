import Image from "next/image";
import { FunctionComponent } from "react";

const Poster: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-full relative grid grid-flow-col auto-cols-[auto auto] min-h-[180vh] h-[180vh] place-items-center mt-10 mb-10">
      <div className="w-[95%] h-full relative flex col-start-1 border-8 border-offBlack">
        <div className="w-full h-full absolute">
          <Image layout="fill" objectFit="cover" src="/images/latent.png" />
        </div>
        <div className="grid relative grid-flow-row auto-rows-[auto auto] w-full h-fit top-1/3">
          <div className="relative row-start-1 w-72 h-60 self-end pb-3 pl-10">
            <video
              autoPlay
              muted
              loop
              placeholder="blur"
              className="relative max-w-none h-full w-full object-cover rounded-xl flex"
            >
              <source src="/videos/glitch.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="relative row-start-2 w-72 h-60 self-end pb-3 pl-10">
            <video
              autoPlay
              muted
              loop
              placeholder="blur"
              className="relative max-w-none h-full w-full object-cover rounded-xl flex"
            >
              <source src="/videos/glitch.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="relative row-start-3 w-72 h-60 self-end pl-10 pb-10">
            <video
              autoPlay
              muted
              loop
              placeholder="blur"
              className="relative max-w-none h-full w-full object-cover rounded-xl flex"
            >
              <source src="/videos/glitch.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="relative row-start-4 w-full h-fit bg-offBlack pt-3 pb-3 font-mag text-offWhite text-[8.1vw] whitespace-nowrap text-center">
            LATENT THREADS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
