import Image from "next/image";
import { FunctionComponent } from "react";

const Poster: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-full relative grid grid-flow-col auto-cols-[auto auto] min-h-[120vw] h-[180vh] place-items-center pb-20">
      <div className="h-full relative flex col-start-1 border-8 border-offBlack place-self-center ">
        <Image layout="fill" objectFit="cover" src="/images/latent.png" />
        <div className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto]">
          <div className="relative w-fit h-fit place-self-end col-start-1">
            <div className="grid relative grid-flow-row auto-rows-[auto auto] w-full h-fit">
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
              <div className="relative row-start-4 w-full h-fit pb-8 ">
                <div className="relative text-offWhite text-[8.1vw] whitespace-nowrap text-center pl-10 pr-10 font-mag bg-offBlack pt-3 pb-3">
                  LATENT THREADS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
