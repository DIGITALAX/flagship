import Image from "next/image";
import { FunctionComponent, useState } from "react";

const Directory280: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="grid-flow-row grid auto-rows-auto w-full h-full relative text-offBlack">
      <div className="relative row-start-1 col-start-1 w-full h-full font-lib text-xl border-b-2 border-offBlack text-center pt-2 pb-2">
        Mesh
      </div>
      <div className="relative col-start-1 row-start-2 w-full h-full text-xs sm:text-sm self-start border-b-2 border-offBlack pb-5 pt-5 p-3">
        <div className="relative grid grid-flow-row auto-rows-auto w-full h-full text-offBlack font-lib">
          <div className="relative row-start-1 col-start-1 w-fit h-full">
            <div className="relative grid grid-flow-col auto-cols-auto w-full h-full">
              <div
                className={`relative col-start-1 w-full h-fit pr-3 place-self-start ${
                  blur && "blur-sm animate-unblur"
                }`}
              >
                <Image
                  height={20}
                  width={20}
                  src="/images/arrowdown.png"
                  priority
                  onLoadingComplete={() => setBlur(false)}
                  blurDataURL={"/images/blurred/arrowdown.png"}
                />
              </div>
              <div className="relative col-start-2 w-fit h-fit pl-1 self-center">Blender</div>
            </div>
          </div>
          <div className="relative row-start-2 w-fit sm:w-full h-full place-self-center">
            <div className="relative grid grid-flow-row auto-rows-auto w-fit h-fit">
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit row-start-1 pt-2 col-start-1 pl-2">
                <div
                  className={`relative col-start-1 w-full h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">plugin</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit row-start-2 col-start-1 pt-2 pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">synth</div>
              </div>
              <div className="relative grid col-start-2 grid-flow-col auto-cols-auto w-fit h-fit row-start-1 pt-2 pl-4 sm:pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">
                  segmentation
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-auto w-fit h-fit col-start-2 row-start-2 pt-2 pl-4 sm:pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">
                  open datasets
                </div>
              </div>
              <div className="relative grid col-start-1 row-start-3 sm:col-start-3 sm:row-start-1 grid-flow-col auto-cols-auto w-fit h-fit pt-2 pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">
                  zero waste
                </div>
              </div>
              <div className="relative grid col-start-2 row-start-3 sm:col-start-3 sm:row-start-2 grid-flow-col auto-cols-auto w-fit h-fit pt-2 pl-4 sm:pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">packing</div>
              </div>
              <div className="relative grid col-start-1 row-start-4 sm:col-start-4 sm:row-start-1 grid-flow-col auto-cols-auto w-fit h-fit pt-2 pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">
                  3d design
                </div>
              </div>
              <div className="relative grid md:col-start-4 md:row-start-2 grid-flow-col auto-cols-auto w-fit h-fit sm:col-start-4 sm:row-start-2 pt-2 pl-4 sm:pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">restitch</div>
              </div>
              <div className="relative grid sm:row-start-3 sm:col-start-1 md:col-start-5 md:row-start-1 grid-flow-col auto-cols-auto w-fit h-fit pt-2 pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">
                  rematerialize
                </div>
              </div>
              <div className="relative grid md:col-start-5 md:row-start-2 sm:col-start-2 sm:row-start-3 grid-flow-col auto-cols-auto w-fit h-fit pt-2 pl-4 sm:pl-2">
                <div
                  className={`relative col-start-1 w-fit h-fit pr-2 ${
                    blur && "blur-sm animate-unblur"
                  }`}
                >
                  <Image
                    height={20}
                    width={20}
                    src="/images/arrowright.png"
                    priority
                    onLoadingComplete={() => setBlur(false)}
                    blurDataURL={"/images/blurred/arrowright.png"}
                  />
                </div>
                <div className="relative col-start-2 w-fit h-fit">mint</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory280;
