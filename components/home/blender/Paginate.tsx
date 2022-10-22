import { FunctionComponent } from "react";
import { usePaginateProps } from "../../../types/general.types";

const Paginate: FunctionComponent<usePaginateProps> = ({
  pageBoundaryBackward,
  paginateBackward,
  currentPage,
  pageBoundaryForward,
  paginateForward,
}): JSX.Element => {
  return (
    <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit">
      <div className="relative col-start-1 w-fit h-fit place-self-start">
        <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit gap-4 text-sm font-lib">
          <div className="relative col-start-1 w-fit h-full">
            <div className="w-fit h-fit bg-offWhite p-2 border-2 border-offBlack rounded-lg flex">
              <div className="w-fit h-fit justify-center leading-normal">
                SOME TEXT
              </div>
            </div>
          </div>
          <div className="relative col-start-2 w-fit h-fit">
            <div className="w-fit h-fit bg-offWhite p-2 border-2 border-offBlack rounded-lg flex">
              <div className="w-fit h-fit justify-center leading-normal">
                SOME TEXT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative col-start-2 w-fit h-fit place-self-end">
        <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit gap-3">
          <div className="relative col-start-1 w-fit h-fit">
            <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit rounded-xl bg-offWhite border-2 border-offBlack">
              <div
                className={`relative col-start-1 w-fit h-fit p-1 pr-2 pl-2 ${
                  !pageBoundaryBackward &&
                  "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                } ${pageBoundaryBackward && "opacity-50"}`}
                onClick={() => paginateBackward(currentPage)}
              >
                prev
              </div>
              <div className="relative w-1 col-start-2 h-full bg-grayMid border-r border-l border-offBlack"></div>
              <div
                className={`relative col-start-3 w-fit h-fit p-1 pr-2 pl-2  ${
                  !pageBoundaryForward &&
                  "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                } ${pageBoundaryForward && "opacity-50"}`}
                onClick={() => paginateForward(currentPage)}
              >
                next
              </div>
            </div>
          </div>
          <div className="relative col-start-2 w-full h-fit">
            <div className="relative w-fit h-full font-libB text-xs align-middle text-right self-center items-center">
              ref. 109 101 <br />
              115 104
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
