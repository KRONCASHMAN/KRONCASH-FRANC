import React from "react";

// load assets
import LogoUrl from "../../assets/image/name-logo.png";
import CloudverseUrl from "../../assets/KRONCASH/coat.png";
import CloudsecUrl from "../../assets/image/name-logo.png";
import CloudnetworkUrl from "../../assets/KRONCASH/KCF.png";
import "./GeneratePage.scss";

const GeneratePage = () => {
  return (
    <div className="container generate-section">
      <div className="sub-section" id="about">
        <div className="fade-right">
          <img
            className="logo"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={LogoUrl}
          />
          <h1 className="title">
            TOKENIZING HISTORY OF
            <br />
            GREAT ECONOMIES OF THE PAST
          </h1>
          <div className="flex">
            <p className="text">Lordship NFTS - COAT OF ARMS</p>
            <div className="line"></div>
          </div>
          <div className="product">
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudverseUrl}
              />
              <p className="product-text">COAT OF ARMS NFT</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudsecUrl}
              />
              <p className="product-text">KF</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudnetworkUrl}
              />
              <p className="product-text">KCF</p>
            </div>
          </div>
        </div>
        <div className="fade-left">
          <h1 className="content">
            KronCash is a decentralized finance platform that tokenizes the historical economic data of the former French franc currency.
            It offers two tokens - Kronlet Francs (KF) which is a stable asset tracking the franc's inflation-adjusted purchasing power, and Kroncash Francs (KCF) which is a more volatile token reflecting the franc's historical market dynamics.
            <br />
            <br />
            This allows investors to gain exposure to the franc's past economic strength while hedging against inflation.
            <br />
            <br />
            The platform utilizes blockchain technology, smart contracts and decentralized governance to ensure transparency, security and community control. KronCash aims to provide an innovative alternative to traditional currencies and investment vehicles by resurrecting the economic legacy of the French franc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
