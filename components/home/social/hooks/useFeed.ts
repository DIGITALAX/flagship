import { useEffect, useState } from "react";
import exploreInariPublications from "../../../../graphql/queries/explorePublications";
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
      const response = await exploreInariPublications({
        sources: "inarisynth",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
        sortCriteria: "LATEST",
        noRandomize: true,
      });
      const arr: any[] = [...response.data.explorePublications.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed(sortedArr);
      setPageInfo(response.data.explorePublications.pageInfo);
      return sortedArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getMoreFeed = async (): Promise<any> => {
    try {
      const response = await exploreInariPublications({
        sources: "inarisynth",
        publicationTypes: ["POST", "COMMENT", "MIRROR"],
        limit: 30,
        sortCriteria: "LATEST",
        noRandomize: true,
        cursor: pageInfo.next,
      });
      const arr: any[] = [...response.data.explorePublications.items];
      const sortedArr: any[] = arr.sort(
        (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setPublicationsFeed([...publicationsFeed, ...sortedArr]);
      setPageInfo(response.data.explorePublications.pageInfo);
      return sortedArr;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return {
    publicationsFeed,
    getMoreFeed,
    queryWindowSize,
    queryWindowSizeMobile,
    queryWindowSizeXL
  };
};

export default useFeed;
