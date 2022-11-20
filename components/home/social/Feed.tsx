import { FunctionComponent } from "react";
import { FaComments, FaRetweet } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { FeedProps } from "../../../types/general.types";

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
          publication.profile.picture.original?.url.includes("object") ||
          publication.profile.picture.original?.url === undefined
        ) {
          profileImage = "/images/inaripfp.png";
        } else if (publication.profile.picture.original) {
          if (publication.profile.picture.original.url.includes("http")) {
            profileImage = publication.profile.picture.original.url;
          } else {
            const cut = publication.profile.picture.original.url.split("/");
            profileImage = "https://" + cut[2] + ".ipfs.w3s.link";
          }
        } else {
          profileImage = publication.profile.picture.uri;
        }
        return (
          <div
            key={index}
            className={`relative w-full h-fit p-2 md:p-[1vw] md:pl-0 md:pr-0 row-start-${index}`}
          >
            <div className="relative grid grid-flow-row auto-rows-auto w-full h-full  rounded-xl drop-shadow-xl bg-white pb-4 pt-4 border-2 border-lightB">
              <div className="relative w-fit xl:w-full h-full row-start-1 pt-4 place-self-center sm:place-self-start half:place-self-center xl:place-self-start half:pr-2 half:pl-2 sm:pr-11 sm:pl-11 xl:pr-11 xl:pl-11 ">
                <div className="relative grid grid-flow-col auto-cols-auto w-fit h-full">
                  <a
                    href={`https://lenster.xyz/u/${publication.profile.handle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-sewingHS w-fit h-fit relative col-start-1 place-self-start md:place-self-center pr-3 row-start-1"
                  >
                    <img
                      src={profileImage}
                      className="w-8 h-8 rounded-full drop-shadow-md relative"
                    />
                  </a>

                  <a
                    href={`https://lenster.xyz/u/${publication.profile.handle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-sewingHS relative w-fit h-fit col-start-2 row-start-1 self-center pt-2 md:pt-0 pr-4 xl:pr-16"
                  >
                    <div className="text-lensDark relative font-fira text-xs xl:text-base whitespace-nowrap">
                      @{publication.profile.handle}
                    </div>
                  </a>

                  <div className="relative w-fit h-fit col-start-3 row-start-1 text-space text-xs font-firaL self-center justify-end place-self-center md:pr-4 whitespace-nowrap pt-2 md:pt-0 pr-6">
                    {moment(`${publication.createdAt}`).fromNow()}
                  </div>
                  {publication.__typename === "Mirror" && (
                    <div className="w-fit place-self-center self-center place-self-center  relative md:pt-0 pt-2 col-start-4 h-fit row-start-1">
                      <FaRetweet />
                    </div>
                  )}
                </div>
              </div>
              <div className="relative w-fit h-fit row-start-2 text-offBlack text-base font-gisL place-self-start p-14 pt-8 pb-6">
                {prompt}
              </div>
              <div className="relative w-fit h-full row-start-3 text-sm place-self-start text-offBlack p-14 pb-8 pt-0 font-gisL">
                {meta} {description}
              </div>
              {publication.metadata.media.length !== 0 && (
                <div>
                  {publication.metadata.media.map(
                    (media: any, index: number) => {
                      const newLink = media.original.url.split("/");
                      const imageSource =
                        "https://" + newLink[2] + ".ipfs.w3s.link";
                      return (
                        <div
                          key={index}
                          className={`relative row-start-${
                            index + 3
                          } pb-2 w-full h-fit p-10 pt-0`}
                        >
                          <a
                            href={imageSource}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full h-fit cursor-sewingHS"
                          >
                            <img
                              className="rounded-xl w-full h-fit"
                              src={imageSource}
                            />
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
              <div
                className={`relative w-fit place-self-center h-full row-start-${
                  publication.metadata.media.length !== 0
                    ? (publication.metadata.media.length + 4).toString()
                    : "4"
                }`}
              >
                <div className="relative grid grid-flow-col auto-cols-auto w-full h-fit">
                  <div className="relative w-fit h-fit col-start-1 p-2">
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div className="relative w-fit h-fit col-start-1 pr-1">
                        <HiCollection
                          className="relative align-middle"
                          color="#131313"
                        />
                      </div>
                      <div className="relative w-fit h-fit col-start-2 text-xs text-offBlack">
                        {publication.stats.totalAmountOfCollects}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-fit h-fit col-start-2 p-2">
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div className="relative w-fit h-fit col-start-1 pr-1">
                        <FaComments
                          className="relative align-middle"
                          color="#131313"
                        />
                      </div>
                      <div className="relative w-fit h-fit col-start-2 text-xs text-offBlack">
                        {publication.stats.totalAmountOfComments}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-fit h-fit col-start-3 p-2">
                    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
                      <div className="relative w-fit h-fit col-start-1 pr-1">
                        <FaRetweet
                          className="relative align-middle"
                          color="#131313"
                        />
                      </div>
                      <div className="relative w-fit h-fit col-start-2 text-xs text-offBlack">
                        {publication.stats.totalAmountOfMirrors}
                      </div>
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
