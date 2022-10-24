import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Text: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative max-w-screen w-fit pb-8  h-full grid grid-flow-col auto-col-[auto auto]">
      <div className="relative place-self-center w-fit lg:w-full h-full row-start-1 col-start-1 text-mainText lg:pl-4">
        <div className="relative w-full h-full grid grid-flow-col auto-col-[auto auto]">
          <div className="relative h-full w-6 grid grid-flow-col auto-cols-[auto auto] col-start-1 md:row-start-1 lg:pr-1">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-mainText"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-mainText"></div>
          </div>

          <div
            className={`relative w-fit place-self-center h-fit  md:row-start-1 col-start-2 font-libB text-xs whitespace-nowrap pr-14 pl-3 lg:pr-3 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              height={100}
              width={10}
              src="/images/verttext1.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/verttext1.png"}
            />
          </div>

          <div className="relative w-96 text-center h-fit col-start-3 font-libB text-sm p-6 border border-mainText place-self-center md:row-start-1">
            With a public release some timeskip from now, fabric synth in
            Blender changes the narrative from “NFTs, lol, speculative altcoins
            with JPEGs“ to “We like the looks made for material use”
          </div>

          <div
            className={`relative w-fit place-self-center h-fit col-start-4 font-libB text-xs whitespace-nowrap pr-1 pl-14 lg:pl-3 md:row-start-1 ${
              blur && "blur-sm animate-unblur"
            }`}
          >
            <Image
              height={70}
              width={10}
              src="/images/verttext2.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/verttext2.png"}
            />
          </div>

          <div className="relative h-full w-6 grid grid-flow-col auto-cols-[auto auto] col-start-5 md:row-start-1">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-mainText"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-mainText"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 text-mainText lg:pl-4 lg:pt-0 pt-12 lg:pr-0 pr-6">
        <div className="relative w-fit h-fit text-right text-sm pl-4 font-gisL">
          Today, fashion designers use CLO, a closed source and very limited
          tool for working with fabric. Blender can be a much more powerful and
          open source tool for working with fabric.
          <br />
          <br />
          But a few things have to happen first.
          <br />
          <br />
          Fabric synth, segmentation, design and materialisation in a tailor
          made Blender plugin? Where we're going, we're going to need a lot more
          GPUs.
        </div>
      </div>
    </div>
  );
};

export default Text;
