import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/7.png";
import "./DetailFirstPage.scss";

const DetailFirstPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>Cloudsec Router</h1>
            <p className="text">
              Provide community members with a better way to connect: from
              follow requests and social links, to shared collections,
              interests, and NFT updates - and know more about your audience
              than just their wallet address.
            </p>
          </div>
          <a
            target="_blank"
            href="https://docs.opsec.computer/category/opsec-cloudverse"
            rel="noreferrer"
            className="learn-btn"
          >
            <button type="button">
              <span>Learn More</span>
            </button>
          </a>
        </div>
        <div className="left ml-80 order-left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={BadgeUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailFirstPage;
