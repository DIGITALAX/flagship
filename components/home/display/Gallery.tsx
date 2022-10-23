import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Gallery, GalleryProps } from "../../../types/general.types";

const Gallery: FunctionComponent<GalleryProps> = ({
  loading,
  currentImages,
  more,
  setExpressInterest,
}): JSX.Element => {
  return (
    <div
      className={`overflow-hidden ${
        more
          ? "h-full md:h-full lg:h-full"
          : "h-[70vh] md:h-[100vh] lg:h-[155vh]"
      } w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center relative content-evenly gap-5 items-center inline-flex`}
    >
      <div className="relative w-fit h-full">
        <div className="grid grid-flow-row auto-rows-[auto auto] w-fit h-fit relative gap-4">
          {currentImages.slice(0, 6).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-fit w-fit min-h-full flex relative row-start-${
                  index + 1
                } cursor-sewingHS`}
              >
                <div>
                  <Image
                    src={token.image}
                    width={token.width}
                    height={token.height}
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit font-lib text-midWhite">

                    <Link href={"/express-interest"}>
                      <a>
                        <div
                          className="relative col-start-1 decoration-1 underline underline-offset-2 mix-blend-screen hover:cursor-sewingHS"
                          onClick={() => setExpressInterest(token.name)}
                        >
                          Collect NFT
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-fit h-full place-items-center">
        <div className="grid grid-flow-row auto-rows-[auto auto] w-fit h-fit relative gap-4">
          {currentImages.slice(6, 12).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-fit w-fit min-h-full relative row-start-${
                  index + 1
                }`}
              >
                <div>
                  <Image
                    src={token.image}
                    width={token.width}
                    height={token.height}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-fit h-full">
        <div className="grid grid-flow-row auto-rows-[auto auto] w-fit h-fit relative gap-4">
          {currentImages.slice(12, 18).map((token: Gallery, index: number) => {
            return (
              <div
                key={index}
                className={`h-fit w-fit min-h-full relative row-start-${
                  index + 1
                }`}
              >
                <div>
                  <Image
                    src={token.image}
                    width={token.width}
                    height={token.height}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
