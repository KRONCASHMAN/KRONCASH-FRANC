import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/NFTLORD.png";
import "./DetailFirstPage.scss";

const DetailFirstPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="left">
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
            <h1>NFT LORDSHIP + Knights</h1>
            <p className="text">
              Within the KronCash ecosystem, owning a Coat of Arms NFT signifies membership in an exclusive digital aristocracy, granting holders a noble status that transcends mere financial investment.

              These limited NFTs, each representing one of the prestigious communes of France, elevate you to the ranks of nobility, bestowing lordship rights and elevated voting power over key decisions that shape the future of this innovative platform. By acquiring a Coat of Arms NFT, you not only secure an esteemed position in the decentralized governance structure but also directly contribute to preserving France's rich cultural heritage through the financing of public good initiatives.

              In essence, these NFTs symbolize your commitment to upholding the nation's prestigious legacy while wielding influential power as a member of the KronCash nobility
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
      </div>
    </div>
  );
};

export default DetailFirstPage;
