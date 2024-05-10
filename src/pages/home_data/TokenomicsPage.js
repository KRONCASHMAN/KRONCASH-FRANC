import React from "react";

// load assets
import BurnImageUrl from "../../assets/image/tokenomics/burn-1.png.webp";
import SupplyImageUrl from "../../assets/image/tokenomics/supply-1.png.webp";
import TaxesImageUrl from "../../assets/image/tokenomics/taxes-1.png.webp";
import TeamImageUrl from "../../assets/image/tokenomics/team-1.png.webp";
import "./TokenomicsPage.scss";

const TokenomicsPage = () => {
  return (
    <div className="container tokenomics-section">
      <div className="sub-section">
        <div className="title-section">
          <h1>DUAL Tokenomics</h1>
          <p className="text">
            Hard-coded into the KronCash contract are the following tokenomics,
            we are unable to change them and are fully rug-proof!
          </p>
          <div className="flex">
            <h1 className="text">Key Features</h1>
            <div className="line"></div>
          </div>
        </div>
        <div className="content">
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={SupplyImageUrl}
              />
            </div>
            <div className="description">
              <h3>Supply</h3>
              <p>100M KronCash Tokens.</p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={BurnImageUrl}
              />
            </div>
            <div className="description">
              <h3>Burn</h3>
              <p>We have completed an initial burn of 4M tokens.</p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={TaxesImageUrl}
              />
            </div>
            <div className="description">
              <h3>Taxes</h3>
              <p>
                10% tax on all transactions with a redistribution of 5% to all
                holders and 5% towards liquidity.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img
                className="about-right-img"
                alt="burn"
                loading="lazy"
                decoding="async"
                src={TeamImageUrl}
              />
            </div>
            <div className="description">
              <h3>Team</h3>
              <p>3% allocated to development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
