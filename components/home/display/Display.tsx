import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { DisplayProps } from "../../../types/general.types";
import Gallery from "./Gallery";
import useGallery from "./hooks/useGallery";

const Display: FunctionComponent<DisplayProps> = ({
  shop,
  setExpressInterest,
  queryWindowSize2XL,
}): JSX.Element => {
  const {
    currentImages,
    loading,
    currentPage,
    paginateBackward,
    paginateForward,
    pageBoundaryForward,
    pageBoundaryBackward,
    setMore,
    more,
  } = useGallery();
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative flex bg-offBlack w-full min-w-full h-fit min-h-fit">
      <div className="grid grid-flow-rows auto-row-[auto auto] w-full min-w-full p-4">
        <div className="relative h-fit w-full row-start-1">
          <div
            className="grid relative grid-flow-col auto-cols-[auto auto] content-between justify-between w-full h-fit pt-2 pb-2"
            ref={shop}
            id="shop"
          >
            <div className="col-start-1 w-fit h-fit relative text-white font-rain text-7xl pl-3">
              X
            </div>
            <div className="col-start-2 w-fit h-fit relative place-self-center">
              <div className="border border-offBlack rounded-full border-l border-r pl-1 pr-1 w-36 h-12 relative bg-skyBlue">
                <div className="border-r-2 border-l-2 border-offBlack rounded-full w-full h-full whitespace-nowrap relative bg-midWhite grid grid-col-flow auto-cols-[auto auto]">
                  <div
                    className={`col-start-1 relative w-fit h-fit place-self-center pt-1.5  ${
                      pageBoundaryBackward &&
                      "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                    } ${blur && "blur-sm animate-unblur"}`}
                    onClick={() => paginateBackward(currentPage)}
                  >
                    <Image
                      src="/images/left.png"
                      height={30}
                      width={30}
                      className={`${!pageBoundaryBackward && "opacity-50"}`}
                      priority
                      onLoadingComplete={() => setBlur(false)}
                      blurDataURL={"/images/blurred/left.png"}
                    />
                  </div>
                  <div className="col-start-2 relative w-1.5 h-full bg-grayMid place-self-center"></div>
                  <div
                    className={`col-start-3 relative w-fit h-fit place-self-center pt-1.5  ${
                      pageBoundaryForward &&
                      "active:scale-105 active:opacity-90 hover:opacity-90 cursor-sewingHS"
                    } ${blur && "blur-sm animate-unblur"}`}
                    onClick={() => paginateForward(currentPage)}
                  >
                    <Image
                      src="/images/right.png"
                      height={30}
                      width={30}
                      className={`${!pageBoundaryForward && "opacity-50"}`}
                      priority
                      onLoadingComplete={() => setBlur(false)}
                      blurDataURL={"/images/blurred/right.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full row-start-2 flex pt-10">
          <Gallery
            loading={loading}
            currentImages={currentImages}
            more={more}
            queryWindowSize2XL={queryWindowSize2XL}
            setExpressInterest={setExpressInterest}
          />
        </div>
        <div className="relative w-full h-fit pt-10 pb-2 flex justify-center cursor-sewingHS hover:opacity-70 active:opacity-70">
          <div
            className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit"
            onClick={() => setMore(!more)}
          >
            <div
              className={`col-start-1 relative w-fit h-fit pr-2 ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={"/images/eye.png"}
                height={10}
                width={20}
                priority
                onLoadingComplete={() => setBlur(false)}
                blurDataURL={"/images/blurred/eye.png"}
              />
            </div>
            <div className="col-start-2 relative w-fit h-fit font-firaL text-offWhite">
              {!more ? "more?" : "less?"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
