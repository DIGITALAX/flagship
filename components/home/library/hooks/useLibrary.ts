import { useState } from "react";
import { useLibraryResult } from "../../../../types/general.types";

const useLibrary = (): useLibraryResult => {
    const [showImage, setShowImage] = useState<string>("/images/latent.png");
    const [link, setLink] = useState<string>("https://digitalax.xyz");

    return {setShowImage, showImage, setLink, link}
}

export default useLibrary;