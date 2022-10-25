import Image from "next/image";
import { FunctionComponent } from "react";
import { SocialProps } from "../../../types/general.types";
import Feed from "./Feed";
import Grid from "./Grid";
import GridSmall from "./GridSmall";

const Social: FunctionComponent<SocialProps> = ({
  getMoreFeed,
  publicationsFeed,
  queryWindowSize,
  queryWindowSizeMobile,
  queryWindowSizeXL
}): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-full relative">
      {queryWindowSizeMobile ? (
        <GridSmall
          queryWindowSize={queryWindowSize}
          publicationsFeed={publicationsFeed}
          getMoreFeed={getMoreFeed}
          queryWindowSizeMobile={queryWindowSizeMobile}
          queryWindowSizeXL={queryWindowSizeXL}
        />
      ) : (
        <Grid
          queryWindowSize={queryWindowSize}
          publicationsFeed={publicationsFeed}
          getMoreFeed={getMoreFeed}
          queryWindowSizeMobile={queryWindowSizeMobile}
          queryWindowSizeXL={queryWindowSizeXL}
        />
      )}
    </div>
  );
};

export default Social;
