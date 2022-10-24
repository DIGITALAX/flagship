import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const TV: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full min-w-full h-fit pb-32 p-10 justify-center">
      <div className="w-fit max-w-screen h-fit row-start-1 relative place-self-center h-[57vw]">
        <video
          autoPlay
          muted
          loop
          placeholder="blur"
          className="absolute h-full w-full object-cover rounded-3xl flex border-8 border-offBlack"
        >
          <source src="/videos/glitch.mp4" type="video/mp4"></source>
        </video>
        <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full p-4 sm:p-4 md:p-10 pb-0 md:pb-0 sm:pb-0 md:pt-16 lg:pt-24 pt-8 sm:pt-12 gap-1 sm:gap-3 sm:gap-6 justify-center ">
          <Link href={"https://digifizzy.xyz"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              className="relative col-start-1 row-span-4 row-start-1 w-[20vw] h-[30vw] place-self-center opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70"
            >
              <Image src="/images/digifizzy/digifizzy1.png" layout="fill" />
            </a>
          </Link>
          <Link href={"https://digifizzy.xyz"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              className="relative col-start-2 row-span-3 row-start-1 w-[20vw] h-[30vw] place-self-center active:scale-95 cursor-sewingHS opacity-90 hover:opacity-70"
            >
              <Image src="/images/digifizzy/digifizzy2.png" layout="fill" />
            </a>
          </Link>
          <Link href={"https://digifizzy.xyz"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              className="relative col-start-3 row-span-2 row-start-1 w-[20vw] h-[30vw] place-self-center opacity-90 active:scale-95 hover:opacity-70 cursor-sewingHS"
            >
              <Image src="/images/digifizzy/digifizzy3.png" layout="fill" />
            </a>
          </Link>
          <Link href={"https://digifizzy.xyz"}>
            <a
              target={"_blank"}
              rel="noreferrer"
              className="relative col-start-4 row-span-1 row-start-1 w-[20vw] h-[30vw] place-self-center
           opacity-90 active:scale-95 hover:opacity-70 cursor-sewingHS"
            >
              <Image src="/images/digifizzy/digifizzy4.png" layout="fill" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TV;
