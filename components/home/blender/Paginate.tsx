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
    <div className="relative grid grid-flow-col auto-cols-auto w-full h-fit">
      <div className="relative col-start-1 w-fit h-fit place-self-start text-offBlack">
        <div className="relative grid grid-flow-col auto-cols-auto w-full h-fit gap-1.5 lg:gap-4 text-xs lg:text-sm font-lib">
          <div className="relative row-start-1 col-start-1 w-fit h-full">
            <div className="w-fit h-fit bg-offWhite p-1 lg:p-2 border-2 border-offBlack rounded-lg flex">
              <div className="w-fit h-fit justify-center leading-normal">
                (1,0,0)
              </div>
            </div>
          </div>
          <div className="relative col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 w-fit h-fit">
            <div className="w-fit h-fit bg-offWhite p-1 lg:p-2 border-2 border-offBlack rounded-lg flex">
              <div className="w-fit h-fit justify-center leading-normal">
              (3,2,2)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative col-start-2 w-fit h-fit place-self-end text-offBlack">
        <div className="relative grid grid-flow-col auto-cols-auto w-full h-fit gap-3">
          <div className="relative col-start-1 row-start-1 w-fit h-fit">
            <div className="relative grid grid-flow-col auto-cols-auto w-full h-fit rounded-xl bg-offWhite border-2 border-offBlack">
              <div
                className={`relative col-start-1 w-fit h-fit p-1 pr-2 pl-2 text-xs  lg:text-base ${
                  !pageBoundaryBackward &&
                  "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                } ${pageBoundaryBackward && "opacity-50"}`}
                onClick={() => paginateBackward(currentPage)}
              >
                prev
              </div>
              <div className="relative w-1 col-start-2 h-full bg-grayMid border-r border-l border-offBlack"></div>
              <div
                className={`relative col-start-3 w-fit h-fit p-1 pr-2 pl-2 text-xs  lg:text-base ${
                  !pageBoundaryForward &&
                  "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                } ${pageBoundaryForward && "opacity-50"}`}
                onClick={() => paginateForward(currentPage)}
              >
                next
              </div>
            </div>
          </div>
          <div className="relative col-start-1 row-start-2 lg:row-start-1 lg:col-start-2 w-full h-fit">
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
