import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/banner/Banner";
import Blender from "../components/home/blender/Blender";
import Dials from "../components/home/dials/Dials";
import Display from "../components/home/display/Display";
import DIY from "../components/home/diy/DIY";
import Poster from "../components/home/poster/Poster";
import Static from "../components/home/static/Static";
import TV from "../components/home/tv/TV";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Title from "./../components/home/title/Title";

const Home: NextPage = () => {
  return (
    <div className="min-w-screen min-h-full h-full flex flex-col bg-midWhite">
      <Head>
        <title>DIGITALAX</title>
        <meta name="description" content="DIGITALAX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
      <Banner />
      <Display />
      <Blender />
      <Dials />
      <TV />
      <DIY />
      <Poster />
      <Static />
      <Footer />
    </div>
  );
};

export default Home;
