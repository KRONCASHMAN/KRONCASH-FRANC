import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/6.png";
import "./DetailFirstPage.scss";

const DetailFourthPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>KRONCASH ECOSYSTEM</h1>
            <p className="text">
              The Kroncash platform introduces a groundbreaking Decentralized Autonomous Asset Ecosystem (DAAE) that empowers users to actively participate in the management and financing of the Kronlet reserve through the acquisition and staking of unique Non-Fungible Tokens (NFTs) representing historical coats of arms and feudal roles.

              These NFTs not only hold symbolic value but also grant their holders governance rights within the ecosystem, allowing them to vote on crucial matters such as reserve allocation strategies, interest rates, and the introduction of new financial products or services.

              The DAAE fosters a sense of community engagement and shared responsibility, incentivizing users to contribute to the long-term success of the platform through direct asset allocation towards financing the Kronlet reserve.

              This innovative approach ensures transparency, decentralized control, and a true public good by aligning the interests of users with the overall stability and growth of the ecosystem, while paying homage to the historical significance and economic legacy of the French Franc.
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

export default DetailFourthPage;
