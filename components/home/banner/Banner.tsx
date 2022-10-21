import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Banner: FunctionComponent = (): JSX.Element => {
  return (
    <div className="pt-8 pb-8 relative grid grid-flow-row auto-rows-[auto auto] w-full h-fit">
      <div className="bg-offBlack w-full h-fit pt-1 pb-1 sm:pt-3 sm:pb-3">
        <motion.div className="font-fira inline text-[2vw] text-dull whitespace-nowrap overflow-x-hidden max-h-fit">
          <p>
            Collection of the Week{" "}
            <span className="font-firaB">// MEV Override // 0.32 ETH</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
