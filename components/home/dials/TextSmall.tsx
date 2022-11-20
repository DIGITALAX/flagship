import Image from "next/image";
import { FunctionComponent } from "react";

const TextSmall: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative max-w-screen w-fit pb-20 h-full grid grid-flow-col auto-col-auto text-mainText">
      <div className="relative w-full h-fit row-start-1">
        <div className="relative w-screen h-full grid grid-flow-col auto-col-auto pb-4">
          <div className="relative h-10 w-6 grid grid-flow-col auto-cols-auto col-start-1 place-self-center">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-mainText"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-mainText"></div>
          </div>
          <div className="relative w-fit place-self-center h-fit col-start-2 font-libB text-xs whitespace-nowrap pr-0 sm:pr-4 pl-3 text-center">
            109 101 115 104
          </div>
          <div className="relative w-fit place-self-center h-fit col-start-3 font-libB text-xs whitespace-nowrap pr-1 pl-0 sm:pl-4 text-center">
            x03.m-4
          </div>
          <div className="relative h-10 w-6 grid grid-flow-col auto-cols-auto col-start-4 place-self-center">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-mainText"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-mainText"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit row-start-2 p-6">
        <div className="relative w-fit text-center h-fit col-start-1 row-start-2 font-libB text-sm p-6 border border-mainText place-self-center">
          With a public release some timeskip from now, fabric synth in Blender
          changes the narrative from “NFTs, lol, speculative altcoins with
          JPEGs“ to “We like the looks made for material use”
        </div>
      </div>
      <div className="relative w-full h-full row-start-3 col-start-1 text-mainText pt-12 pr-6">
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

export default TextSmall;
