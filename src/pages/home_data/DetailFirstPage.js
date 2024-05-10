import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/KronLet.png";
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
            <h1>KRONLET-FRANC KF</h1>
            <p className="text">
              The Kronlet Franc is a stablecoin whose value is pegged to the
              exchange rate of the French franc against the US dollar in 2001,
              the year before the franc was replaced by the euro. Specifically,
              1 KF is initially valued at 6.04 French francs to 1 US dollar,
              reflecting the franc's strength at that time. However, what makes
              the Kronlet Franc truly innovative is its built-in inflation
              adjustment mechanism. The value of 1 KF is dynamically adjusted
              over time to account for inflation rates, ensuring it maintains
              its real purchasing power. So while traditional fiat currencies
              lose value due to inflation, the Kronlet Franc is designed to
              increase in value proportionally to offset inflation's eroding
              effects. This provides investors with a stable digital asset that
              not only preserves but potentially enhances its economic value
              over time.
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
