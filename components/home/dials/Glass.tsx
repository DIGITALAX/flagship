import Image from "next/image";
import { FunctionComponent } from "react";

const Glass: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-col auto-col-[auto auto] bg-offBlack pt-3 pb-3 border-t-4 border-b-4 border-darkP">
      <div className="relative w-fit h-full col-start-1 place-self-center">
        <div className="relative w-full h-full gap-8 grid grid-flow-col auto-col-[auto auto]">
          <div className="relative w-14 h-14 col-start-1 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-45 active:rotate-45 cursor-sewingHS">
            <Image layout="fill" className="rounded-full" src="/images/dial1.png" />
          </div>
          <div className="relative w-14 h-14 col-start-2 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-180 active:rotate-180 cursor-sewingHS">
            <Image layout="fill" className="rounded-full" src="/images/dial2.png" />
          </div>
          <div className="relative w-14 h-14 col-start-3 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-90 active:rotate-90 cursor-sewingHS">
            <Image layout="fill" className="rounded-full" src="/images/dial3.png" />
          </div>
        </div>
      </div>
      <div className="relative w-fit h-full col-start-2 place-self-center">
        <div className="relative w-24 h-24 col-start-4 rounded-full border-2 border-offBlack place-self-center flex hover:rotate-180 active:rotate-180 cursor-sewingHS">
          <Image layout="fill" objectFit="cover" className="rounded-full" src="/images/diallarge.png" />
        </div>
      </div>
    </div>
  );
};

export default Glass;
