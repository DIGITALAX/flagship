import Image from "next/image";
import { FunctionComponent } from "react";

const Directory: FunctionComponent = (): JSX.Element => {
  return (
    <div className="grid-flow-row grid auto-rows-[auto auto] w-fit h-fit relative text-offBlack w-56">
      <div className="relative row-start-1 w-full h-fit font-lib text-2xl border-b-2 border-offBlack p-4">
        Mesh
      </div>
      <div className="relative row-start-2 w-full h-full">
        <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit text-offBlack font-lib pl-4 pt-4">
          <div className="relative row-start-1 w-full h-fit">
            <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit">
              <div className="relative col-start-1 w-full h-fit pr-3 place-self-center">
                <Image height={20} width={20} src="/images/arrowdown.png" />
              </div>
              <div className="relative col-start-2 w-full h-fit">Blender</div>
            </div>
          </div>
          <div className="relative row-start-2 w-full h-full">
            <div className="relative grid grid-flow-row auto-rows-[auto auto] w-fit h-fit">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-1 pl-3 pt-2">
                <div className="relative col-start-1 w-full h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">plugin</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-2 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">synth</div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-3 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  segmentation
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-4 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  open datasets
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-5 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-6 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-7 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-8 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-9 pl-3 pt-2">
                <div className="relative col-start-1 w-fit h-fit pr-3">
                  <Image height={20} width={20} src="/images/arrowright.png" />
                </div>
                <div className="relative col-start-2 w-full h-fit">
                  other worlds
                </div>
              </div>
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-fit row-start-10 pl-3 pt-2">
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
