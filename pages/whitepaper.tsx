import { NextPage } from "next";

const Whitepaper: NextPage = (): JSX.Element => {
  return (
    <div className="relative w-full h-screen min-h-screen">
      <embed
        className="w-full h-full"
        src="/digitalaxwhitepaperv3.pdf"
        type="application/pdf"
      />
    </div>
  );
};

export default Whitepaper;
