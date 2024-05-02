import React from "react";
// load the pages
import IntroPage from "./home_data/IntroPage";
import AboutPage from "./home_data/AboutPage";
import GeneratePage from "./home_data/GeneratePage";
import DetailFirstPage from "./home_data/DetailFirstPage";
import DetailSecondPage from "./home_data/DetailSecondPage";
import DetailThirdPage from "./home_data/DetailThirdPage";
import TokenomicsPage from "./home_data/TokenomicsPage";
import FaqPage from "./home_data/FaqPage";
import RoadmapPage from "./home_data/RoadmapPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="main-background">
      <IntroPage />
      <GeneratePage />
      <DetailFirstPage />
      <DetailSecondPage />
      <DetailThirdPage />
      <AboutPage />
      <TokenomicsPage />
      <FaqPage />
      <RoadmapPage />
      <Footer />
    </div>
  );
};

export default Home;
