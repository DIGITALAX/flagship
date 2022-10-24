import { useState } from "react";
import shuffle from "shuffle-array";
import { useTvResults } from "../../../../types/general.types";

const useTV = (): useTvResults => {
  const [newImages, setNewImages] = useState<string[]>([
    "main1",
    "main2",
    "main3",
    "main4",
  ]);
  const images: string[] = [
    "main1",
    "main2",
    "main3",
    "main4",
    "main5",
    "main6",
    "main7",
    "main8",
    "main9",
    "main10",
    "main11",
    "main12",
    "main13",
    "main14",
    "main15",
    "main16",
    "main17",
    "main18",
  ];

  const refreshImages = (): void => {
    let newImages: string[] = [];
    shuffle<string>(images);
    for (let i = 0; i < 4; i++) {
      newImages.push(images[i]);
    }
    setNewImages(newImages);
  };

  return { refreshImages, newImages };
};

export default useTV;
