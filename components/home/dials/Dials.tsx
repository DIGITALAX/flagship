import { FunctionComponent } from "react";
import Glass from "./Glass";
import Text from "./Text";

const Dials: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-row auto-rows-[auto auto] pt-8 pb-8">
      <div className="relative w-full h-fit row-start-1 place-self-center lg:pl-28 lg:pr-28 pr-20 pl-20">
        <Text />
      </div>
      <div className="relative w-full h-fit row-start-2 place-self-center">
        <Glass />
      </div>
    </div>
  );
};

export default Dials;
