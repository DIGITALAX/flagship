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
}): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={publicationsFeed?.length}
      next={getMoreFeed}
      hasMore={true}
      loader={""}
      height={"50rem"}
      scrollableTarget="scrollableDiv"
    >
      {publicationsFeed?.map((publication: any, index: number) => {
        const splitContent = publication.metadata.content.split("\n", +10);
        const prompt = splitContent[0];
        const meta = splitContent.slice(2, 3);
        const description = splitContent.slice(4, 10);
        let profileImage: any;
        if (
          !publication.profile.picture ||
          publication.profile.picture.original?.url.includes("svg") ||
          publication.profile.picture.original?.url.includes("object")
        ) {
          profileImage = "/images/inaripfp.png";
        } else if (publication.profile.picture.original) {
          if (publication.profile.picture.original.url.includes("http")) {
            profileImage = publication.profile.picture.original.url;
          } else {
            const cut = publication.profile.picture.original.url.split("/");
            profileImage = "https://" + cut[2] + ".ipfs.dweb.link/";
          }
        } else {
          profileImage = publication.profile.picture.uri;
        }
        return (
          <div
            key={index}
            className={`relative w-fit h-fit p-6 row-start-${index}`}
          >
            <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-full">
              <div className="relative w-fit h-full row-start-1 pt-4 place-self-center">
                <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full">
                  <div className="relative w-fit h-fit col-start-1 place-self-center pr-4">
                    <a
                      href={`https://lenster.xyz/u/${publication.profile.handle}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={profileImage}
                        className="w-8 h-8 rounded-full drop-shadow-md"
                      />
                    </a>
                  </div>
                  <div className="relative w-fit h-fit col-start-2 self-center">
                    <a
                      href={`https://lenster.xyz/u/${publication.profile.handle}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <b className="text-lensDark relative font-sourceReg text-xs sm:text-base whitespace-nowrap">
                        @{publication.profile.handle}
                      </b>
                    </a>
                  </div>
                  <div className="relative w-fit h-fit col-start-3 text-space text-xs font-sourceReg self-center">
                    {moment(`${publication.createdAt}`).fromNow()}
                  </div>
                    {publication.__typename === "Mirror" && (
                      <div className="w-fit self-center relative col-start-4 h-fit">
                        <FaRetweet />
                      </div>
                    )}
                </div>
              </div>
              <div className="relative w-full h-full row-start-2 text-black text-base font-sourceReg">
                <b>{prompt}</b>
              </div>
              <div className="relative w-full h-full row-start-3 text-xs text-offBlack">
                {meta} {description}
              </div>
              {publication.metadata.media.length !== 0 && (
                <div>
                  {publication.metadata.media.map(
                    (media: any, index: number) => {
                      const newLink = media.original.url.split("/");
                      const imageSource =
                        "https://" + newLink[2] + ".ipfs.dweb.link/";
                      return (
                        <div
                          key={index}
                          className={`relative flex justify-center row-start-${
                            index + 3
                          }`}
                        >
                          <a
                            href={imageSource}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer"
                          >
                            <img src={imageSource} />
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
              <div
                className={`relative w-full h-full row-start-${
                  publication.metadata.media.length !== 0
                    ? publication.metadata.media.length + 3
                    : "5"
                }`}
              >
                <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit">
                  <div className="relative w-fit h-fit col-start-1">
                    <HiCollection className="relative align-middle" />
                    <span className="relative text-xs">
                      {publication.stats.totalAmountOfCollects}
                    </span>
                  </div>
                  <div className="relative w-fit h-fit col-start-2">
                    <FaComments className="relative text-xsalign-middle" />
                    <span className="relative text-xs">
                      {publication.stats.totalAmountOfComments}
                    </span>
                  </div>
                  <div className="relative w-fit h-fit col-start-3">
                    <FaRetweet className="relative text-xs align-middle" />
                    <span className="relative text-xs">
                      {publication.stats.totalAmountOfMirrors}
                    </span>
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
