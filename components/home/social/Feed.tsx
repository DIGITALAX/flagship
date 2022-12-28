import { FunctionComponent } from "react";
import { FaComments, FaRetweet } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { FeedProps } from "../../../types/general.types";
import Image from "next/image";

const Feed: FunctionComponent<FeedProps> = ({
  publicationsFeed,
  getMoreFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL,
}): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={publicationsFeed?.length}
      next={getMoreFeed}
      hasMore={true}
      loader={""}
      height={
        queryWindowSize
          ? "35rem"
          : !queryWindowSizeXL && !queryWindowSize
          ? "100rem"
          : "50rem"
      }
    >
      {publicationsFeed?.map((publication: any, index: number) => {
        let profileImage: string;
        if (
          !publication?.profile?.picture ||
          publication?.profile?.picture.original?.url.includes("svg") ||
          publication?.profile?.picture.original?.url.includes("object") ||
          publication?.profile?.picture.original?.url === undefined
        ) {
          profileImage = "/images/inaripfp.png";
        } else if (publication.profile.picture.original) {
          if (publication.profile.picture.original.url.includes("http")) {
            profileImage = publication.profile.picture.original.url;
          } else {
            const cut = publication.profile.picture.original.url.split("//");
            profileImage = "https://thedial.infura-ipfs.io/ipfs/" + cut[1];
          }
        } else {
          profileImage = publication.profile.picture.uri;
        }
        return (
          <div
            key={index}
            className={`relative w-full h-fit row-start-${index} grid grid-flow-col auto-cols-auto pb-4 pt-4 overflow-x-none`}
          >
            <div className="relative w-5/6 h-fit p-3 bg-white drop-shadow-xl grid grid-flow-row auto-rows-auto place-self-center col-start-1 rounded-xl border-2 border-offBlack">
              {publication.__typename === "Mirror" && (
                <div className="w-fit justify-self-end self-start relative h-fit row-start-1">
                  <FaRetweet />
                </div>
              )}
              <a
                className={`relative w-full h-fit grid grid-flow-col auto-cols-auto cursor-sewingHS justify-self-start galaxy:p-2 ${
                  publication.__typename === "Mirror"
                    ? "row-start-2"
                    : "row-start-1"
                }`}
                href={`https://lenster.xyz/u/${publication?.profile?.handle}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative w-fit h-fit col-start-1 justify-self-start self-center grid grid-flow-col auto-cols-auto gap-2 row-start-2 sm:row-start-1">
                  <img
                    src={profileImage}
                    className="w-8 h-8 rounded-full drop-shadow-md relative col-start-1"
                  />
                  <div className="text-lensDark relative font-fira text-xs xl:text-base w-fit h-fit col-start-2 place-self-center">
                    @{publication?.profile?.handle}
                  </div>
                </div>
                <div className="relative w-fit h-fit col-start-1 galaxy:col-start-2 place-self-center text-space text-xs font-firaL justify-self-end self-center md:pr-4 whitespace-nowrap pt-2 md:pt-0 row-start-1 galaxy:pb-0 pb-2">
                  {moment(`${publication?.createdAt}`).fromNow()}
                </div>
              </a>
              <div
                className={`relative w-fit h-full text-sm place-self-start text-offBlack pb-8 sm:px-3 pt-6 text-center font-gisL break-all ${
                  publication.__typename === "Mirror"
                    ? "row-start-3"
                    : "row-start-2"
                }`}
              >
                {publication?.metadata?.description}
              </div>
              {publication?.metadata?.media?.length !== 0 && (
                <div
                  className={`relative w-full h-fit ${
                    publication.__typename === "Mirror"
                      ? "row-start-4"
                      : "row-start-3"
                  } grid grid-flow-col auto-cols-auto overflow-x-scroll place-self-center gap-2 px-4`}
                >
                  {publication?.metadata?.media.map(
                    (media: any, index: number) => {
                      const newLink = media?.original?.url.split("/");
                      const imageSource =
                        "https://thedial.infura-ipfs.io/ipfs/" + newLink[2];
                      return (
                        <div
                          key={index}
                          className={`relative col-start-${
                            index + 1
                          } gap-3 w-40 h-40 galaxy:w-60 galaxy:h-60 row-start-1`}
                        >
                          <a
                            href={imageSource}
                            target="_blank"
                            rel="noreferrer"
                            className="galaxy:w-60 galaxy:h-60 cursor-sewingHS w-40 h-40"
                          >
                            <Image
                              className="rounded-md border-2 border-black w-full h-full"
                              src={imageSource}
                              layout="fill"
                              objectFit="cover"
                            />
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
              <div
                className={`relative w-fit h-fit grid grid-flow-col auto-cols-auto ${
                  publication.__typename === "Mirror" &&
                  publication?.metadata?.media?.length !== 0
                    ? "row-start-5"
                    : (publication.__typename === "Mirror" &&
                        publication?.metadata?.media?.length === 0) ||
                      (publication.__typename !== "Mirror" &&
                        publication?.metadata?.media?.length !== 0)
                    ? "row-start-4"
                    : "row-start-3"
                } gap-3 font-fira text-sm pt-4`}
              >
                <div className="relative w-fit h-fit col-start-1 grid grid-flow-col auto-cols-auto gap-1 place-self-center cursor-sewingHS">
                  <div className="relative w-fit h-fit col-start-1 place-self-center">
                    <FaComments
                      className="relative align-middle"
                      color="#81A8F8"
                      size={15}
                    />
                  </div>
                  <div className="relative w-fit h-fit col-start-2 place-self-center grid grid-flow-col auto-cols-auto">
                    <div className="relative w-fit h-fit col-start-1 place-self-center">
                      {publication?.stats?.totalAmountOfComments}
                    </div>
                  </div>
                </div>
                <div className="relative w-fit h-fit col-start-2 grid grid-flow-col auto-cols-auto gap-1 place-self-center cursor-sewingHS">
                  <div className="relative w-fit h-fit col-start-1 place-self-center">
                    <HiCollection
                      className="relative align-middle"
                      color="#81A8F8"
                      size={15}
                    />
                  </div>
                  <div className="relative w-fit h-fit col-start-2 place-self-center grid grid-flow-col auto-cols-auto">
                    <div className="relative w-fit h-fit col-start-1 place-self-center">
                      {publication?.stats?.totalAmountOfCollects}
                    </div>
                  </div>
                </div>
                <div className="relative w-fit h-fit col-start-3 grid grid-flow-col auto-cols-auto gap-1 place-self-center cursor-sewingHS">
                  <div className="relative w-fit h-fit col-start-1 place-self-center">
                    <FaRetweet
                      className="relative align-middle"
                      color="#81A8F8"
                      size={15}
                    />
                  </div>
                  <div className="relative w-fit h-fit col-start-2 place-self-center grid grid-flow-col auto-cols-auto">
                    <div className="relative w-fit h-fit col-start-1 place-self-center">
                      {publication?.stats?.totalAmountOfMirrors}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default Feed;
