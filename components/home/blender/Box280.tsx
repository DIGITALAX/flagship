import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { BoxProps } from "../../../types/general.types";
import Directory280 from "./Directory280";
import Gallery280 from "./Gallery280";
import Paginate from "./Paginate";

const Box280: FunctionComponent<BoxProps> = ({
  currentImages,
  loading,
  paginateBackward,
  paginateForward,
  pageBoundaryForward,
  pageBoundaryBackward,
  currentPage,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="w-full h-full border-b-8 border-t border-offBlack rounded-xl relative">
      <div className="bg-grayMid w-full rounded-xl border-offBlack h-full relative">
        <div className="grid-flow-row grid auto-rows-[auto auto] w-full h-fit relative">
          <div className="relative row-start-1 border-r-0 border-l-0 md:border-l-2 md:border-r-2 border-b-2 md:border-2 rounded-none rounded-t-md border-offBlack w-full h-fit font-libB text-xs text-center text-offBlack pt-3 pb-1 pl-2">
            Research & Development Dept.
          </div>
          <div className="relative row-start-2 col-start-1 w-full h-full">
            <div className="grid-flow-col grid auto-cols-[auto auto] w-full h-full relative md:border-r-2 md:border-l-2 border-offBlack">
              <div className="relative row-start-1 col-start-1 w-full h-full border-r-0 border-offBlack border-t-0 row-start-1 flex">
                <Directory280 />
              </div>
              <div className="relative col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 w-full h-fit">
                <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit">
                  <div className="relative row-start-1 w-full h-fit">
                    <Gallery280 currentImages={currentImages} />
                  </div>
                  <div className="relative row-start-2 w-full h-fit p-8">
                    <Paginate
                      paginateBackward={paginateBackward}
                      paginateForward={paginateForward}
                      pageBoundaryForward={pageBoundaryForward}
                      pageBoundaryBackward={pageBoundaryBackward}
                      currentPage={currentPage}
                    />
                  </div>
                  <div className="relative row-start-3 w-full h-full p-8 pb-1">
                    <div
                      className={`relative w-full h-[55vw] ${
                        blur && "blur-sm animate-unblur"
                      }`}
                    >
                      <Image
                        src="/images/blender/imagelarge.png"
                        layout="fill"
                        priority
                        onLoadingComplete={() => setBlur(false)}
                        blurDataURL={"/images/blurred/imagelarge.png"}
                      />
                    </div>
                  </div>
                  <div className="relative row-start-4 w-fit h-full pt-1 p-8 place-self-end font-lib text-offBlack text-xs">
                    bl_info: fashion syntheziser
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box280;
