import { FunctionComponent } from "react";

const DIY: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-screen h-fit grid grid-flow-col auto-col-[auto auto] bg-diy pt-3 pb-3 border-t-4 border-b-4 border-deep justify-center">
      <div className="relative col-start-1 w-screen h-fit font-mag text-diyText text-[4.1vw] whitespace-nowrap place-self-center text-center">
      THE NEW DIY: DECENTRALIZE IT YOURSELF
      </div>
      
    </div>
  );
};

export default DIY;
