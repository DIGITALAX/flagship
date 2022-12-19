import { useEffect, useState } from "react";
import exploreInariPublications, {
  feedTimeline,
} from "../../../../graphql/queries/explorePublications";
import { useFeedResults } from "../../../../types/general.types";
import { useMediaQuery } from "@material-ui/core";

const useFeed = (): useFeedResults => {
  const [publicationsFeed, setPublicationsFeed] = useState<any[]>([]);
  const [pageInfo, setPageInfo] = useState<any>([]);
  let queryWindowSize: boolean = useMediaQuery("(max-width:1024px)");
  let queryWindowSizeMobile: boolean = useMediaQuery("(max-width:950px)");
  let queryWindowSizeXL: boolean = useMediaQuery("(max-width:1600px)");

  useEffect(() => {
    getFeedData();
  }, []);

  const getFeedData = async (): Promise<any> => {
    try {
      const response = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
      });
      const arr: any[] = [...response?.data.publications.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed(sortedArr);
      setPageInfo(response?.data.publications.pageInfo);
      return sortedArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getMoreFeed = async (): Promise<any> => {
    try {
      const morePublications = await feedTimeline({
        profileId: "0x016305",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
        cursor: pageInfo?.next,
      });

      const arr = [...morePublications?.data.publications.items];
      const sortedArr = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed([...publicationsFeed, ...sortedArr]);
      setPageInfo(morePublications?.data.publications.pageInfo);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return {
    publicationsFeed,
    getMoreFeed,
    queryWindowSize,
    queryWindowSizeMobile,
    queryWindowSizeXL,
  };
};

export default useFeed;
