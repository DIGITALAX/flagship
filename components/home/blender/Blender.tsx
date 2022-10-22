import Image from "next/image";
import { FunctionComponent } from "react";
import Box from "./Box";
import useBox from "./hooks/useBox";

const Blender: FunctionComponent = (): JSX.Element => {
  const {
    currentImages,
    loading,
    currentPage,
    paginateBackward,
    paginateForward,
    pageBoundaryForward,
    pageBoundaryBackward,
  } = useBox();
  return (
    <div className="relative grid-flow-row auto-rows-[auto auto] max-w-screen overflow-hidden w-fit h-fit text-offBlack place-self-center pb-10">
      <div className="relative row-start-1 w-full h-fit md:pr-0 md:pl-0 pl-3 pr-3 sm:pr-10 sm:pl-10">
        <div className="grid grid-flow-col auto-cols-[auto auto] relative w-full h-fit pt-20">
          <div className="relative h-fit w-fit col-start-1 row-start-1">
            <div className="grid grid-flow-row auto-rows-[auto auto] relative w-full h-fit gap-6">
              <div className="relative h-fit w-fit row-start-1">
                <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit">
                  <div className="relative row-start-1 w-full h-fit font-lib text-xs text-center">
                    x03.m-4
                  </div>
                  <div className="relative row-start-2 w-full h-fit">
                    <Image height={15} width={60} src={"/images/bar.png"} />
                  </div>
                </div>
              </div>
              <div className="relative h-fit w-fit row-start-2 font-mag text-2xl w-72">
                MESH: FASHION SYNTH & SEGMENTATION FOR TAILOR MADE BLENDER
                DESIGN
              </div>
            </div>
          </div>
          <div className="sm:pt-0 pt-4 relative h-fit w-fit row-start-2 sm:row-start-1 col-start-1 sm:col-start-2 font-lib self-end md:self-start justify-self-end md:pl-0 pl-3">
            OPEN SOURCE <br />
            DEV FOR IRL, <br />
            VIRTUAL, AND <br />
            LATENT SPACE <br />
          </div>
        </div>
      </div>
      <div className="relative row-start-2 w-fit h-fit justify-center pt-10 sm:pt-20 self-center">
        <Box
          currentImages={currentImages}
          loading={loading}
          currentPage={currentPage}
          paginateBackward={paginateBackward}
          paginateForward={paginateForward}
          pageBoundaryForward={pageBoundaryForward}
          pageBoundaryBackward={pageBoundaryBackward}
        />
      </div>
    </div>
  );
};

export default Blender;
