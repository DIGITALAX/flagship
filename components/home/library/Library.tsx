import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import { Library, LibraryProps } from "../../../types/general.types";
import library from "./../../../pages/api/library.json";
import useLibrary from "./hooks/useLibrary";

const Library: FunctionComponent<LibraryProps> = ({
  lastBook,
  handleLastBook,
  otherBooks
}): JSX.Element => {
  const { showImage, setShowImage } = useLibrary();
  return (
    <div className="relative grid w-full h-fit grid-flow-row auto-rows-[auto auto] pt-4">
      <div className="row-start-1 relative w-full h-3 border-t-4 border-black">
        <Image
          src="/images/checked.png"
          layout="fill"
          objectFit="cover"
          className="h-10"
        />
      </div>
      <div className="row-start-2 w-full h-[33vw]">
        <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full">
          <div className="relative col-start-1 row-start-1 w-80 h-full">
            <Image layout="fill" objectFit="cover" src={showImage} />
          </div>
          <div className="relative w-full h-full overflow-x-scroll overflow-y-hidden flex">
            {library.map((book: Library, index: number) => {
              return (
                <div
                  key={index}
                  className={`border-2 border-offBlack relative col-start-${(
                    Number(book.number) + 1
                  ).toString()} row-start-1 w-fit h-full bg-[${
                    book.color
                  }] p-2 pt-3 hover:scale-105 active:scale-95`}
                  onClick={() => setShowImage(book.image)}
                  ref={index === library.length ? lastBook : otherBooks}
                >
                  <div className="grid grid-flow-row auto-rows-[auto auto] relative w-full h-fit gap-3 p-4">
                    <div
                      className={`relative row-start-1 w-14 h-14 place-self-center rounded-full border-2 border-offBlack text-center font-lib self-start bg-${book.color}`}
                    >
                      <div className="relative w-full h-full justify-center flex content-center text-2xl top-1/4">
                        {Number(book.number) < 10
                          ? `0${book.number}`
                          : book.number}
                      </div>
                    </div>
                    <div className="relative row-start-2 w-full pb-16 pr-1 pl-1 h-fit self-start">
                      <div
                        id="foot3"
                        className="h-2 border border-offBlack w-full"
                      ></div>
                    </div>
                    <div className="relative row-start-3 self-end relative text-xs whitespace-nowrap font-lib place-self-center h-full w-10 rotate-90">
                      <div className="relative grid grid-flow-row auto-rows-[auto auto]">
                        <div className="border-2 border-offBlack relative h-full w-fit p-2 text-offBlack row-start-1 place-self-center self-center justify-self-center z-10 bg-offWhite">
                          {book.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`relative col-start-${
              library.length + 1
            } row-start-1 w-full h-full bg-offBlack`}
          >
            <div className="relative grid auto-cols-[auto auto] grid-flow-col w-full h-full pt-12 pb-12 pr-12 pl-12">
              <div className="relative w-6 h-[16vw] col-start-1 place-self-center">
                <Image src="/images/library/numbers.png" layout="fill" />
              </div>
              <div className="relative w-fit h-full col-start-2 place-self-center">
                <div className="relative h-full w-6 grid grid-flow-col auto-cols-[auto auto] col-start-1 md:row-start-1 lg:pr-1">
                  <div className="relative col-start-1 w-full h-full border-t-2 border-b-2 border-r border-midWhite"></div>
                  <div className="relative col-start-2 w-full h-full border-t-2 border-b-2 border-l border-midWhite"></div>
                </div>
              </div>
              <div
                className="relative w-10 h-10 col-start-3 place-self-center hover:opacity-90 active:mix-blend-hard-light"
                onClick={() => handleLastBook()}
              >
                <Image src="/images/library/player.png" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
