import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/vote.png";
import "./DetailFirstPage.scss";

const DetailFifthPage = () => {
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
            <h1>VOTE AND BECOME A KNIGHT</h1>
            <p className="text">
              Within the KronCash ecosystem, acquiring a Crypto Knighthood NFT represents a prestigious ownership stake that grants you voting rights and influence over the platform's governance. These limited digital assets symbolize your commitment to upholding the historical legacy of the French Franc while bestowing upon you the privileged status of a noble knight.

              As a Crypto Knight, you are elevated to the ranks of an elite class entrusted with shaping the future trajectory of KronCash. Your ownership of a Crypto Knighthood NFT secures your place in the decentralized aristocracy, granting you a powerful vote in key decisions that impact the allocation of resources, implementation of new features, and the preservation of France's economic heritage.

              This exclusive opportunity not only allows you to actively participate in the governance process but also serves as a testament to your dedication to the principles of decentralization and community empowerment. By embracing the role of a Crypto Knight, you become a custodian of history, wielding influential voting power to ensure the KronCash platform remains true to its vision while continuously evolving to meet the needs of its users.

              In essence, owning a Crypto Knighthood NFT within the KronCash ecosystem elevates you to nobility, granting you a coveted seat at the table where decisions are made, and the future of this groundbreaking financial endeavor is shaped by the collective wisdom of its most esteemed members.

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

export default DetailFifthPage;
