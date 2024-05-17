import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/32.jpg";
import "./votecard.scss";

const VoteCard = () => {
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
            <h3>Price 200 USD</h3>
            <h3>Voting with</h3>
            <p className="text">
              As a Cripto Knight, you are elevated to the ranks of an elite
              class entrusted with shaping the future trajectory of KronCash.
              YOur ownership of a Cripto Knighthood NFT secures your place in
              the decentralized aristocracy, granting you a powerful vote in key
              decisions that impact the allocation of resources, implementation
              of new featuresm and the preservation of Frace's economic
              heritage.
            </p>
          </div>
          <a
            target="_blank"
            href="https://www.kroncash.org"
            rel="noreferrer"
            className="learn-btn"
          >
            <button type="button">
              <span>Buy Nobility Titles and Knightship</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
