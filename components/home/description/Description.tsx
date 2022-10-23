import { FunctionComponent } from "react";

const Description: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-screen h-fit grid grid-flow-col auto-col-[auto auto] items-center justify-center bg-offBlack pt-10 pb-10">
      <div
        id="world"
        className="text-center font-mag text-[4.6vw] sm:text-[3.4vw] whitespace-nowrap pt-3 pb-10 w-fit h-full relative col-start-1 row-start-1 leading-snug pl-[8vw] pr-[8vw] place-self-center"
      >
        Our worlds are run by interfaces,
        <br /> machine code, and APIs.
      </div>
      <div className="relative h-fit text-skyBlue col-start-1 row-start-2 font-fut w-fit text-left pl-6 sm:pl-[19vw] text-xs pr-6 sm:pr-[19vw] place-self-center sm:text-sm">
        Here cypherpunks write prompts, design across multiple dimensions by
        hand, and build the end to end decentralize-it-yourself network economy.
        <br />
        <br />
        We create fashion, co•operate complex machinery, and collect NFTs as
        conductors for what move people to action in every reality –– virtual,
        latent, or IRL. We are drawn as if by a dreaming machine to works that
        have something to say through their stunning appearance, the novel
        status they carry, and innate keys to social mobility in code.
      </div>
    </div>
  );
};

export default Description;
