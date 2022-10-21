import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(``);
  }, []);
  return (
    <div className="min-h-full h-auto min-w-screen w-screen bg-midWhite relative cursor-empire selection:bg-skyBlue selection:text-dull cursor-sewingS">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
