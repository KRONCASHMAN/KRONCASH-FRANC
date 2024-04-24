import React from "react";

// load assets
import VideoUrl from "../assets/video/cloudverse-demo.mp4";
import BadgeUrl from "../assets/KRONCASH/5.png";
import "./DetailFirstPage.scss";

const DetailFirstPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="left">
          {/* <video
            src={VideoUrl}
            className="video-tag"
            autoPlay
            loop
            muted
            playsInline
          ></video> */}
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={BadgeUrl}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>KronCash Cloudverse</h1>
            <p className="text">
              Configure your membership pass royalties and collect them on every
              resale - be that on Opensea, LooksRare, or anywhere else. Enforced
              by the smart contract, our Royalty Engine ensures that your sales
              benefit your community and not the scalpers
            </p>
          </div>
          <a
            target="_blank"
            href="https://docs.opsec.computer/category/opsec-cloudverse"
            rel="noreferrer"
            className="learn-btn"
          >
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailFirstPage;
