import Image from "next/image";
import { FunctionComponent } from "react";
import { Blender, useGalleryBoxProps } from "../../../types/general.types";

const Gallery: FunctionComponent<useGalleryBoxProps> = ({
  currentImages,
}): JSX.Element => {
  return (
    <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit justify-evenly gap-8 p-8">
      {currentImages.slice(0, 3).map((image: Blender, index: number) => {
        return (
          <div
            key={index}
            className={`h-fit w-full relative col-start-${index + 1}`}
          >
            <div className="rounded-lg w-fit h-fit border-2 border-offBlack relative flex">
              <Image
                src={image.image}
                height={300}
                width={300}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
