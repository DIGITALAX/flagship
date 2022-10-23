import { useState } from "react";
import { useLibraryResult } from "../../../../types/general.types";

const useLibrary = (): useLibraryResult => {
    const [showImage, setShowImage] = useState<string>("/images/latent.png");

    return {setShowImage, showImage}
}

export default useLibrary;