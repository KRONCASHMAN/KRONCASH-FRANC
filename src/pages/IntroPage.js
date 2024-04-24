import React from "react";

// load assets
import IntroUrl from "../assets/KRONCASH/8.png"
import introVideoUrl from "../assets/video/bg-hero.mp4";
import MagnicficCanvas from "../components/MagnicficCanvas";
import LogoImageUrl from "../assets/image/name-logo.png";
import "./IntroPage.scss";

const IntroPage = () => {
  return (
    <div className="intro-section">
      {/* <video
        src={introVideoUrl}
        className="video-tag"
        autoPlay
        loop
        muted
        playsInline
      ></video> */}
      <img
        className="intro-img"
        alt="opsec-logo"
        loading="lazy"
        decoding="async"
        src={IntroUrl}
      />
      <div className="canvas-section">
        <MagnicficCanvas />
      </div>
      <div className="intro-text">
        <img className="logo-img" src={LogoImageUrl} alt="logo">
        </img>
        <h2>AIM FOR THE MOON, SHOOT FOR THE STARS</h2>
      </div>
    </div>
  );
};

export default IntroPage;
