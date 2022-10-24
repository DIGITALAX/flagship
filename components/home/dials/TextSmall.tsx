import Image from "next/image";
import { FunctionComponent } from "react";

const TextSmall: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative max-w-screen w-fit pb-20 h-full grid grid-flow-col auto-col-[auto auto]">
      <div className="relative w-full h-fit row-start-1">
        <div className="relative w-screen h-full grid grid-flow-col auto-col-[auto auto] pb-4">
          <div className="relative h-10 w-6 grid grid-flow-col auto-cols-[auto auto] col-start-1 place-self-center">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-offBlack"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-offBlack"></div>
          </div>
          <div className="relative w-fit place-self-center h-fit col-start-2 font-libB text-xs whitespace-nowrap pr-0 sm:pr-4 pl-3 text-center">
            109 101 115 104
          </div>
          <div className="relative w-fit place-self-center h-fit col-start-3 font-libB text-xs whitespace-nowrap pr-1 pl-0 sm:pl-4 text-center">
            x03.m-4
          </div>
          <div className="relative h-10 w-6 grid grid-flow-col auto-cols-[auto auto] col-start-4 place-self-center">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-offBlack"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-offBlack"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit row-start-2 p-6">
        <div className="relative w-fit text-center h-fit col-start-1 row-start-2 font-libB text-sm p-6 border border-offBlack place-self-center">
          Since its public release two months ago, Stable Diffusion has been
          integrated into a number of programs like Photoshop, Figma, and Canva.
        </div>
      </div>
      <div className="relative w-full h-full row-start-3 col-start-1 text-offBlack pt-12 pr-6">
        <div className="relative w-fit h-fit text-right text-sm pl-4 font-gisL">
          CLO is a closed source and very limited tool for working with fabric.
          Blender can be a much more powerful and open source tool for working
          with fabric.
          <br />
          <br />
          But a few things have to happen first.
          <br />
          <br />
          Fabric synth, segmentation, design and materialisation in a tailor made
          Blender plugin? Where we're going, we're going to need a lot more GPUs.
        </div>
      </div>
    </div>
  );
};

export default TextSmall;
