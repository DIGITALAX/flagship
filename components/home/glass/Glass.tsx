import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Glass: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative w-full h-fit grid grid-flow-col auto-col-[auto auto] bg-diy pt-3 pb-3 border-t-4 border-b-4 border-deep 2xl:pt-5 2xl:pb-5">
      <div className="relative w-fit h-full col-start-1 place-self-center">
        <div className="relative w-full h-full gap-8 grid grid-flow-col auto-col-[auto auto]">
          <div className="relative w-[14vw] h-[14vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] col-start-1 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-45 active:rotate-45 cursor-sewingHS">
            <Image
              layout="fill"
              className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
              src="/images/dial1.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/dial1.png"}
            />
          </div>
          <div className="relative  w-[14vw] h-[14vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] col-start-2 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-180 active:rotate-180 cursor-sewingHS">
            <Image
              layout="fill"
              className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
              src="/images/dial2.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/dial2.png"}
            />
          </div>
          <div className="relative  w-[14vw] h-[14vw] sm:w-14 sm:h-14 2xl:w-[6vw] 2xl:h-[6vw] col-start-3 row-start-1 rounded-full border-2 border-offBlack place-self-center hover:rotate-90 active:rotate-90 cursor-sewingHS">
            <Image
              layout="fill"
              className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
              src="/images/dial3.png"
              priority
              onLoadingComplete={() => setBlur(false)}
              blurDataURL={"/images/blurred/dial3.png"}
            />
          </div>
        </div>
      </div>
      <div className="relative w-fit h-full col-start-2 place-self-center">
        <div className="relative w-[24vw] h-[24vw] sm:w-24 sm:h-24 2xl:w-[8vw] 2xl:h-[8vw] col-start-4 rounded-full border-2 border-offBlack place-self-center flex hover:rotate-180 active:rotate-180 cursor-sewingHS">
          <Image
            layout="fill"
            objectFit="cover"
            className={`rounded-full ${blur && "blur-sm animate-unblur"}`}
            src="/images/diallarge.png"
            priority
            onLoadingComplete={() => setBlur(false)}
            blurDataURL={"/images/blurred/diallarge.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Glass;
