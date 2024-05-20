import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/8.png";
import "./DetailFirstPage.scss";

const DetailSixthPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>200% Backed reserve</h1>
            <p className="text">
              Solving Terra-Luna Problems with NFT status and power that grows as the DAPP grows.
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

export default DetailSixthPage;
