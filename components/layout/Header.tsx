import Image from "next/image";
import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full gap-10 md:gap-1 md:justify-between md:content-between pt-6 md:pt-10 min-h-96 md:h-80 justify-center md:min-h-80 md:pl-8 md:pr-8 pb-4 overflow-x-hidden">
      <div className="relative col-start-1 row-start-1 md:w-fit min-h-full h-full">
        <div className="relative grid-flow-row auto-rows-[auto auto] md:w-fit h-full min-h-full font-fira text-xs grid md:place-self-start place-self-center text-center md:text-left md:pr-20 lg:pr-11">
          <div className="relative h-fit md:w-fit row-start-1">PR D CTS</div>
          <div className="relative h-fit md:w-fit row-start-2">
            <p className="pb-4">ET I O IE RA R ES</p>
            <p className="pl-2">OL OG I C AL</p>
            <p>FRO M MO DE M ODE</p>
          </div>
          <div className="relative h-fit md:w-fit row-start-3">
            <p>ET I O IE RA R ES</p>
            <p className="pl-2 pt-4">OL OG I C AL</p>
            <p>FRO M MO DE M ODE</p>
          </div>
        </div>
      </div>
      <div className="relative col-start-1 row-start-2 md:col-start-2 w-full md:row-start-1 text-center min-h-full h-full justify-self-center">
        <div className="grid grid-row-flow auto-rows-[auto auto] relative md:w-fit h-fit justify-center w-full">
          <div className="relative w-10 h-16 row-start-1 place-self-center pb-2">
            <div className="border border-2 border-darkP w-full h-full min-h-full relative flex">
              <Image
                width={50}
                height={70}
                src="/images/header/diagram.png"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="relative w-fit h-fit row-start-2 font-fira text-xs pt-4 text-center place-self-center">
            0001: APPEARANCE, STATUS,
            <br /> AND MATERIAL USE
          </div>
        </div>
      </div>
      <div className="relative col-start-1 md:col-start-3 row-start-3 md:row-start-1 w-full md:w-fit min-w-full min-h-full h-full">
        <div className="grid grid-row-flow auto-rows-[auto auto] relative w-full h-full gap-4">
          <div className="relative w-fit h-fit row-start-1 place-self-center md:place-self-end pb-3">
            <div className="relative w-screen md:w-40 h-fit bg-white border-t border-b md:border border-1 border-offBlack pt-1.5 pb-1.5 text-sm flex overflow-x-hidden whitespace-nowrap cursor-sewingHS hover:bg-skyBlue hover:text-purp active:text-purp active:bg-skyBlue">
              <Marquee direction="right" speed={25} gradient={false}>
                {" "}
                GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO
                SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING ❤️ 👉 GO SHOPPING
                ❤️ 👉 GO SHOPPING ❤️ 👉{" "}
              </Marquee>
            </div>
          </div>
          <div className="relative w-fit h-fit row-start-2 place-self-end self-end pr-3 pt-4 md:pt-0 md:pr-10">
            <div className="border border-2 rounded-full border-offBlack w-fit h-fit pr-5 pl-5 flex pt-2 pb-2 cursor-sewingHS">
              <Image width={40} height={28} src="/images/header/heart.png" />
            </div>
          </div>
          <div className="relative w-full h-fit row-start-3 place-self-start pr-5">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2 pt-4">
              <div className="relative w-fit h-full col-start-1 place-self-end pt-2 hover:-rotate-12">
                <Image src="/images/header/arrow.svg" height={20} width={60} />
              </div>
              <div className="relative w-fit h-full whitespace-nowrap col-start-2 font-firaL">
                DO NOT BEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
