import { useState } from "react";
import shuffle from "shuffle-array";
import { useTvResults } from "../../../../types/general.types";

const useTV = (): useTvResults => {
  const [newImages, setNewImages] = useState<string[]>([
    "digifizzy1",
    "digifizzy2",
    "digifizzy3",
    "digifizzy4",
  ]);
  const images: string[] = [
    "digifizzy1",
    "digifizzy2",
    "digifizzy3",
    "digifizzy4",
    "digifizzy5",
    "digifizzy6",
    "digifizzy7",
    "digifizzy8",
    "digifizzy9",
    "digifizzy10",
    "digifizzy11",
    "digifizzy12",
    "digifizzy13",
    "digifizzy14",
    "digifizzy15",
    "digifizzy16",
    "digifizzy17",
    "digifizzy18",
    "digifizzy19",
    "digifizzy20",
    "digifizzy21",
    "digifizzy22",
    "digifizzy23",
    "digifizzy24",
    "digifizzy25",
    "digifizzy26",
    "digifizzy27",
    "digifizzy28",
    "digifizzy29",
    "digifizzy30",
    "digifizzy31",
    "digifizzy32",
    "digifizzy33",
    "digifizzy34",
    "digifizzy35",
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
