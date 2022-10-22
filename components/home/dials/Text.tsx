import Image from "next/image";
import { FunctionComponent } from "react";

const Text: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative max-w-fit w-fit pb-8  h-full grid grid-flow-col auto-col-[auto auto]">
      <div className="relative place-self-center w-fit lg:w-full h-full row-start-1 col-start-1 text-offBlack lg:pl-4">
        <div className="relative w-full h-full grid grid-flow-col auto-col-[auto auto]">
          <div className="relative h-full w-6 grid grid-flow-col auto-cols-[auto auto] col-start-1 md:row-start-1 lg:pr-1">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-offBlack"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-offBlack"></div>
          </div>

          <div className="relative w-fit place-self-center h-fit  md:row-start-1 col-start-2 font-libB text-xs whitespace-nowrap pr-14 pl-3 lg:pr-3">
            <Image height={100} width={10} src="/images/verttext1.png" />
          </div>

          <div className="relative w-96 text-center h-fit col-start-3 font-libB text-sm p-6 border border-offBlack place-self-center md:row-start-1">
            Since its public release two months ago, Stable Diffusion has been
            integrated into a number of programs like Photoshop, Figma, and
            Canva.
          </div>

          <div className="relative w-fit place-self-center h-fit col-start-4 font-libB text-xs whitespace-nowrap pr-1 pl-14 lg:pl-3 md:row-start-1">
            <Image height={70} width={10} src="/images/verttext2.png" />
          </div>

          <div className="relative h-full w-6 grid grid-flow-col auto-cols-[auto auto] col-start-5 md:row-start-1">
            <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-offBlack"></div>
            <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-offBlack"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 text-offBlack lg:pl-4 lg:pt-0 pt-12 lg:pr-0 pr-6">
        <div className="relative w-fit h-fit text-right text-sm pl-4 font-gisL">
          If it’s the first time you've heard about Stable Diffusion, it is an
          open-source AI model that generates images from a simple text prompt.
          <br />
          <br />
          A few days ago, developer Ben Rugg shared on Reddit a new AI Render
          add-on for Blender that controls the style of the image generated from
          within the Blender interface.
          <br />
          <br />
          You can download the AI Render add-on on Blender Market or Gumroad.
        </div>
      </div>
    </div>
  );
};

export default Text;
