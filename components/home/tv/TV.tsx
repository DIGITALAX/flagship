import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import useTV from "./hooks/useTv";
import { motion } from "framer-motion";

const TV: FunctionComponent = (): JSX.Element => {
  const { newImages, refreshImages } = useTV();
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
          {newImages.map((image: string, index: number) => {
            return (
              <Link href={"https://digifizzy.xyz"} key={index}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className={`relative col-start-${index + 1} ${
                    index === 0 && "row-span-4"
                  } ${index === 1 && "row-span-3"} ${
                    index === 2 && "row-span-2"
                  } ${
                    index === 3 && "row-span-1"
                  } row-start-1 w-[20vw] h-[30vw] place-self-center opacity-90 active:scale-95 cursor-sewingHS hover:opacity-70`}
                >
                  <Image src={`/images/digifizzy/${image}.png`} layout="fill" />
                </a>
              </Link>
            );
          })}
          <motion.div
            whileHover={{
              rotate: 360,
            }}
            onClick={refreshImages}
            className="absolute bottom-4 right-4 w-fit col-fit col-start-4 row-start-1 place-self-end h-fit hover:rotate-180 cursor-sewingHS active:mix-blend-color-dodge w-6 h-6 z-10 md:w-10 md:h-10"
          >
            <Image
              src="/images/digifizzy/disk.png"
              layout="fill"
              width={50}
              height={50}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TV;
