import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/banner/Banner";
import Blender from "../components/home/blender/Blender";
import Dials from "../components/home/dials/Dials";
import Display from "../components/home/display/Display";
import Glass from "../components/home/glass/Glass";
import Library from "../components/home/library/Library";
import Poster from "../components/home/poster/Poster";
import Slider from "../components/home/slider/Slider";
import Social from "../components/home/social/Social";
import Static from "../components/home/static/Static";
import TV from "../components/home/tv/TV";
import World from "../components/home/world/World";
import Header from "../components/layout/Header";
import Title from "./../components/home/title/Title";
import { useContext, useRef, useState } from "react";
import Description from "../components/home/description/Description";
import useFeed from "../components/home/social/hooks/useFeed";
import { GlobalContext } from "./_app";
import { HomeProps } from "../types/general.types";
import RefactorElement from "../components/common/modals/RefactorElement";

const Home: NextPage<HomeProps> = ({ rewind }) => {
  const lastBook = useRef<null | HTMLDivElement>(null);
  const handleLastBook = (): void => {
    if (lastBook.current) {
      lastBook.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const shop = useRef<null | HTMLDivElement>(null);
  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [RefactorModal, setRefactorModal] = useState<boolean>(false);

  const { setExpressInterest } = useContext(GlobalContext);

  const { publicationsFeed, getMoreFeed, queryWindowSize, queryWindowSizeMobile} = useFeed();
  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-midWhite">
      <Head>
        <title>DIGITALAX</title>
        <meta name="description" content="DIGITALAX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header rewind={rewind} handleShop={handleShop} />
      <Title />
      <Banner />
      <Display shop={shop} setExpressInterest={setExpressInterest} />
      <Description />
      <Blender />
      <Dials />
      <TV />
      <Glass />
      <Static />
      <Poster />
      <World />
      <Social
        publicationsFeed={publicationsFeed}
        getMoreFeed={getMoreFeed}
        queryWindowSize={queryWindowSize}
        queryWindowSizeMobile={queryWindowSizeMobile}
      />
      <Library
        lastBook={lastBook}
        handleLastBook={handleLastBook}
        setRefactorModal={setRefactorModal}
      />
      <Slider />
      {RefactorModal && <RefactorElement setRefactorModal={setRefactorModal} />}
    </div>
  );
};

export default Home;
