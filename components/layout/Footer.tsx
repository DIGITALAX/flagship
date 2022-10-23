import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsTwitter } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { FooterProps } from "../../types/general.types";

const Footer: FunctionComponent<FooterProps> = ({
  handleRewind,
}): JSX.Element => {
  return (
    <div className="relative min-w-screen bg-offBlack h-fit min-h-full flex w-full">
      <div className="relative grid auto-rows-[auto auto] grid-flow-row w-full h-full  pt-12">
        <div className="relative row-start-1 w-full h-full">
          <div className="relative grid auto-cols-[auto auto] grid-flow-col h-full w-full">
            <div className="col-start-1 w-full md:w-fit lg:h-full lg:w-full relative md:pl-6 row-start-1 p-2 md:pb-0 pb-8">
              <div className="relative flex border-2 w-full h-fit lg:h-full pb-2">
                <Image layout="fill" src="/images/footerstatic.png" />
                <div className="relative w-full h-full grid grid-flow-row auto-rows-[auto auto]">
                  <div
                    id="digi"
                    className="relative w-full text-center h-fit text-offWhite font-mag text-[8.5vw] row-start-1 p-4"
                  >
                    DIGITALAX
                  </div>
                  <div
                    id="code"
                    className="font-fut text-[1.4vw] lg:text-[1vw] relative row-start-2 place-self-center pb-2"
                  >
                    100 105 103 105 116 97 108 97 120
                  </div>
                  <div className="relative w-full pl-8 pr-8 h-10 grid grid-flow-row auto-rows-[auto auto] row-start-3 lg:pb-0 pb-6">
                    <div className="w-full h-full border-2 border-l-2 border-r-2 border-t-0 border-white row-start-1 relative"></div>
                    <div className="w-full h-full border-l-2 border-r-2 border-t-0 border-b-0 border-white row-start-2 relative"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-start-2 relative h-fit w-full md:w-72 lg:w-96 text-xs text-midWhite place-self-end font-lib text-left sm:text-right leading-8 col-start-1 row-start-2 md:row-start-1 pr-10 pl-6">
              Just in case you haven’t figured it out yet, you now have
              everythig you need to blah blah blah… this is what this is… i
              can’t really be bothered. maybe here is where it should have some
              missing letters in the same way as the top nav? hmmm, not so sure.
              but a bunch of text is goood. also need to add some line height.
              <br />
              <br />
              maybe change the font?
            </div>
          </div>
        </div>
        <div className="relative row-start-2 w-full h-full pt-16">
          <div className="grid grid-flow-row auto-rows-[auto auto] relative w-full h-fit gap-2">
            <div id="foot1" className="relative row-start-1 w-full h-1"></div>
            <div id="foot2" className="relative row-start-2 w-full h-1"></div>
            <div id="foot3" className="relative row-start-3 w-full h-1"></div>
          </div>
        </div>
        <div className="relative row-start-3 w-full h-full text-midWhite pt-10">
          <div className="relative grid auto-cols-[auto auto] grid-flow-col h-full w-full">
            <div className="col-start-1 h-full w-full relative pt-6">
              <div className="relative w-fit h-fit grid grid-flow-row auto-rows-[auto auto]">
                <div className="relative w-fit h-fit col-start-1 row-start-1 sm:row-start-1 pl-6 pb-1 hover:text-skyBlue cursor-sewingHS hover:rotate-3">
                  END OF LINE
                </div>
                <div className="relative w-36 h-4 row-start-2">
                  <Image
                    src="/images/footerblur.png"
                    layout="fill"
                    width={160}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="col-start-1 row-start-1 sm:col-start-2 h-full w-fit relative sm:pl-0 sm:pb-0 sm:pr-0 pr-6 pb-6 pl-6 place-self-center pt-6 cursor-sewingHS active:scale-95">
              <div
                className="grid grid-flow-col auto-cols-[auto auto] relative w-fit h-fit"
                onClick={() => handleRewind()}
              >
                <div className="col-start-1 w-full h-fit pr-3 place-self-center">
                  <BiArrowToTop color="#F7F8E8" size={20} />
                </div>
                <div className="col-start-2 w-full h-fit place-self-center">
                  BE KIND, REWIND
                </div>
              </div>
            </div>
            <div className="col-start-1 row-start-2 sm:row-start-1 sm:col-start-3 h-full w-fit relative place-self-center sm:pb-0 pb-8 pl-6 sm:pl-0 sm:place-self-end pr-4 md:pr-14 pt-6">
              <div className="grid grid-flow-col auto-cols-[auto auto] relative h-fit w-fit gap-3">
                <div className="relative w-fit h-fit col-start-1 place-self-end">
                  <Link href={"https://mirror.xyz/f3manifesto.eth"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative pr-1"
                    >
                      <Image
                        src={"/images/mirror.png"}
                        width={21}
                        height={26}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-2 place-self-end">
                  <Link href={"https://github.com/digitalax"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative pr-1"
                    >
                      <Image
                        src={"/images/github.png"}
                        width={29}
                        height={28}
                      />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-3">
                  <Link href={"https://lenster.xyz/u/digitalax.lens"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative"
                    >
                      <Image src={"/images/lens.png"} width={30} height={30} />
                    </a>
                  </Link>
                </div>
                <div className="relative w-fit h-fit col-start-4">
                  <Link href={"https://twitter.com/digitalax_"}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-sewingHS h-fit relative"
                    >
                      <BsTwitter size={30} color={"#FFDCFF"} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
