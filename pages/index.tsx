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
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Title from "./../components/home/title/Title";
import { useRef } from "react";
import Description from "../components/home/description/Description";

const Home: NextPage = () => {
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  const lastBook = useRef<null | HTMLDivElement>(null);
  const otherBooks = useRef<null | HTMLDivElement>(null);
  const handleLastBook = (): void => {
    console.log("click")
    console.log(lastBook)
    lastBook.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-midWhite">
      <Head>
        <title>DIGITALAX</title>
        <meta name="description" content="DIGITALAX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header rewind={rewind} />
      <Title />
      <Banner />
      <Display />
      <Description />
      <Blender />
      <Dials />
      <TV />
      <Glass />
      <Static />
      <Poster />
      <World />
      <Social />
      <Library
        lastBook={lastBook}
        handleLastBook={handleLastBook}
        otherBooks={otherBooks}
      />
      <Slider />
      <Footer handleRewind={handleRewind} />
    </div>
  );
};

export default Home;
