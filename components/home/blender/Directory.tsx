import Image from "next/image";
import { FunctionComponent } from "react";

const Directory: FunctionComponent = (): JSX.Element => {
  return (
    <div className="grid-flow-row grid auto-rows-[auto auto] w-full h-fit relative text-offBlack md:w-56">
      <div className="relative row-start-1 w-full h-fit font-lib text-xl lg:text-2xl border-b-2 border-offBlack p-4">
        Mesh
      </div>
      <div className="relative row-start-2 w-full h-full text-sm lg:text-base self-start md:self-center">
        <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit text-offBlack font-lib pr-4 md:pr-0 pl-4 pt-4">
          <div className="relative row-start-1 col-start-1 w-full h-fit">
            <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit">
              <div className="relative col-start-1 w-full h-fit pr-3 place-self-center">
                <Image height={20} width={20} src="/images/arrowdown.png" />
              </div>
              <div className="relative col-start-2 w-full h-fit">Blender</div>
            </div>
          </div>
          <div className="relative row-start-2 w-fit sm:w-full h-full place-self-center">
            <div className="relative grid grid-flow-row auto-rows-[auto auto] w-fit h-fit">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-1 pl-3 pt-2 col-start-1">
                <div className="relative col-start-1 w-full h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">plugin</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-2 col-start-1 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">synth</div>
              </div>
              <div className="relative grid col-start-2 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-1 md:row-start-3 pl-5 sm:pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  segmentation
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit col-start-2 md:col-start-1 row-start-2 md:row-start-4 pl-5 sm:pl-3  pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  open datasets
                </div>
              </div>
              <div className="relative grid col-start-1 sm:col-start-3 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-3 sm:row-start-1 md:row-start-5 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid col-start-2 sm:col-start-3 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-3 sm:row-start-2 md:row-start-6 pl-5 sm:pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid col-start-1 sm:col-start-4 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-4 sm:row-start-1 md:row-start-7 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative col-start-2 sm:col-start-4 md:col-start-1 grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-4 sm:row-start-2 md:row-start-8 pl-5 sm:pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid col-start-1 sm:col-start-5 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-5 sm:row-start-1 md:row-start-9 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid col-start-2 sm:col-start-5 md:col-start-1 grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-5 sm:row-start-2 md:row-start-10 pl-5 sm:pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
