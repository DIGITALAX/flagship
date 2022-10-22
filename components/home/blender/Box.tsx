import Image from "next/image";
import { FunctionComponent } from "react";
import { BoxProps } from "../../../types/general.types";
import Directory from "./Directory";
import Gallery from "./Gallery";
import Paginate from "./Paginate";

const Box: FunctionComponent<BoxProps> = ({
  currentImages,
  loading,
  paginateBackward,
  paginateForward,
  pageBoundaryForward,
  pageBoundaryBackward,
  currentPage,
}): JSX.Element => {
  return (
    <div className="w-[85.5vw] h-full border-r-8 border-b-8 border-t-4 border-l-2 border-offBlack rounded-xl relative">
      <div className="bg-grayMid w-[85vw] h-full rounded-lg relative">
        <div className="grid-flow-row grid auto-rows-[auto auto] w-full h-fit relative">
          <div className="relative row-start-1 border-2 rounded-none rounded-t-md border-offBlack w-full h-fit font-libB text-offBlack pt-3 pb-1 pl-2">
            Research & Development Dept.
          </div>
          <div className="relative row-start-2 col-start-1 w-full h-full">
            <div className="grid-flow-col grid auto-cols-[auto auto] w-full h-full relative border-r-2 border-l-2 border-offBlack">
              <div className="relative col-start-1 w-fit h-full border-r-2 border-offBlack border-t-0 row-start-1">
                <Directory />
              </div>
              <div className="relative col-start-2 row-start-1 w-full h-fit">
                <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit">
                  <div className="relative row-start-1 w-full h-fit">
                    <Gallery currentImages={currentImages} />
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
                  <div className="relative row-start-3 w-full h-full p-8">
                    <div className="relative w-full h-[40vw]">
                      <Image
                        src="/images/blender/imagelarge.png"
                        layout="fill"
                      />
                    </div>
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

export default Box;
