import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/32.jpg";
import CastUrl from "../../assets/KRONCASH/Cast.png";
import PrincesUrl from "../../assets/KRONCASH/Princes.png";
import "./votecard.scss";

const VoteCard = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="left">
          <img
            style={{width: "450px"}}
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
              As a Crypto Knight, you are elevated to the ranks of an elite class entrusted with shaping the future trajectory of KronCash. Our ownership of a Cripto Knighthood NFT secures your place as a defender of the decentralized aristocracy, granting you a powerful vote in key decisions that impact the allocation of resources, implementation of new features and the preservation of France's economic heritage.
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

      <div className="sub-section" style={{ marginTop: "100px" }}>
        <div className="left">
          <img
            style={{ width: "300px" }}
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={CastUrl}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Coat Of Arms NFT</h1>
            <p className="text">
              The coat of arms NFT represents your lordship and ownership of the blockchain by celebrating the theme of France. This historically accurate coat of arms represents power you wield in our new digital French Universe. You are a crypto lord and the world is yours.
            </p>
          </div>
        </div>
      </div>

      <div className="sub-section" style={{ marginTop: "100px" }}>
        <div className="left">
          <img
            style={{ width: "450px" }}
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={PrincesUrl}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Crypto Princesses NFT Pairing</h1>
            <p className="text">
              Your NFT is only as valuable as you hold your power through a fixed NFT period. To maintain lordship, you can pair your NFT with a French Princess NFT to produce an heir NFT. Live like a king would in our timeless adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
