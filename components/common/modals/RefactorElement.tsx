import React, { FunctionComponent } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { RefactorElementProps } from "../../../types/general.types";

const RefactorElement: FunctionComponent<RefactorElementProps> = ({
  setRefactorModal,
}): JSX.Element | null => {
  return (
    <div className="fixed inset-0 bg-offBlack bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="relative bg-offBlack p-4 rounded w-96 h-96 z-30">
        <div className="relative w-full h-full grid grid-flow-row auto-rows-auto">
          <div className="relative w-fit h-fit row-start-1 place-self-center">
            <RiEyeCloseFill
              color="#FAF4E8"
              size={40}
              className="relative cursor-sewingHS hover:scale-95"
              onClick={() => setRefactorModal(false)}
            />
          </div>
          <div className="font-aud text-center text-xl relative row-start-2 w-full h-fit text-midWhite">
            The refresh of these pages is still in the works. Check back soon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefactorElement;
