import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/home/banner/Banner";
import Display from "../components/home/display/Display";
import Gallery from "../components/home/display/Gallery";
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
      <Footer />
    </div>
  );
};

export default Home;
