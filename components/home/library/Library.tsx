import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { LibraryProps } from "../../../types/general.types";
import LibraryLarge from "./LibraryLarge";
import LibrarySmall from "./LibrarySmall";

const Library: FunctionComponent<LibraryProps> = ({
  setRefactorModal,
}): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  return (
    <div className="relative grid w-full h-fit grid-flow-row auto-rows-auto pt-4">
      <div className={`row-start-1 relative w-full h-3 border-t-4 border-black ${
            blur && "blur-sm animate-unblur"
          }`}>
        <Image
          src="/images/checked.png"
          layout="fill"
          objectFit="cover"
          className="h-10"
          priority
          onLoadingComplete={() => setBlur(false)}
          blurDataURL={`/images/blurred/checked.png`}
        />
      </div>
      <div className="row-start-2 w-full hidden lg:flex h-full">
        <LibraryLarge setRefactorModal={setRefactorModal} />
      </div>
      <div className="row-start-2 w-full lg:hidden flex h-full">
        <LibrarySmall setRefactorModal={setRefactorModal} />
      </div>
    </div>
  );
};

export default Library;
