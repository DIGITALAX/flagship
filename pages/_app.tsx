import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";

export const GlobalProfileContextDefault = {
  expressInterest: "",
  setExpressInterest: (expressInterest: string) => {},
};

export const GlobalContext = createContext(GlobalProfileContextDefault);

function MyApp({ Component, pageProps }: AppProps) {
  const [expressInterest, setExpressInterest] = useState(
    GlobalProfileContextDefault.expressInterest
  );
  useEffect(() => {
    console.log(``);
  }, []);
  return (
    <GlobalContext.Provider value={{ expressInterest, setExpressInterest }}>
      <div className="min-h-full h-auto min-w-screen w-screen bg-midWhite relative selection:bg-skyBlue selection:text-dull cursor-sewingS">
        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  );
}

export default MyApp;
