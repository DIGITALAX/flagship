import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useRef, useState } from "react";
import Footer from "../components/layout/Footer";
// import restoreScrollPosition from 'next-restore-scroll'


export const GlobalProfileContextDefault = {
  expressInterest: "",
  setExpressInterest: (expressInterest: string) => {},
};

export const GlobalContext = createContext(GlobalProfileContextDefault);

function MyApp({ Component, pageProps }: AppProps) {
  // restoreScrollPosition(router, '#scrolling-element')
  const [expressInterest, setExpressInterest] = useState(
    GlobalProfileContextDefault.expressInterest
  );
  useEffect(() => {
    console.log(``);
  }, []);
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <GlobalContext.Provider value={{ expressInterest, setExpressInterest }}>
      <div className="min-h-full h-auto min-w-screen w-screen bg-midWhite relative selection:bg-skyBlue selection:text-dull cursor-sewingS">
        <Component {...pageProps} rewind={rewind} />
        <Footer handleRewind={handleRewind} />
      </div>
    </GlobalContext.Provider>
  );
}

export default MyApp;
