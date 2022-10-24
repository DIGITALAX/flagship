import { useRef, useState } from "react";
import { useLibraryResult } from "../../../../types/general.types";

const useLibrary = (): useLibraryResult => {
  const [showImage, setShowImage] = useState<string>("/images/library/og.png");
  const [link, setLink] = useState<string>("https://docs.digitalax.xyz");

  const lastBook = useRef<null | HTMLDivElement>(null);
  const handleLastBook = (): void => {
    if (lastBook.current) {
      lastBook.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { setShowImage, showImage, setLink, link, handleLastBook, lastBook };
};

export default useLibrary;
