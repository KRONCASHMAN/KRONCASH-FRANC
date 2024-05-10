import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/KCFDesc.png";
import "./DetailFirstPage.scss";

const DetailFirstPage = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>
              KRONCASH-FRANC:
              <p />
              OUR DIGITAL CASH
            </h1>
            <p className="text">
              The Kroncash Francs (KCF) is our ecosystems digital cash
              cryptocurrency token that allows investors to speculate on and
              potentially profit from the historical market dynamics of the
              former French franc currency. With a maximum supply of 100 million
              tokens, KCF introduces an exciting element of volatility into the
              Kroncash ecosystem. The value of KCF is pegged to the more stable
              Kronlet Franc (KF) token, with 1 KCF initially equal to 1/10th of
              a KF. However, KCF's price can fluctuate significantly based on
              market supply and demand, creating lucrative opportunities for
              traders to buy low and sell high for substantial gains. To
              incentivize participation and liquidity provision, KCF holders can
              take their tokens and earn lucrative rewards. This staking
              mechanism not only allows investors to potentially earn a return
              on their KCF holdings but also helps stabilize the ecosystem's
              liquidity.
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
