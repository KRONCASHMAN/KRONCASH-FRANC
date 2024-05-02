import React from "react";

// load assets
import "./AboutPage.scss";

const walletList = [
  {
    id: 1,
    name: 1,
    url: require("../../assets/image/blockchain/1.svg").default,
  },
  {
    id: 2,
    name: 2,
    url: require("../../assets/image/blockchain/2.svg").default,
  },
  {
    id: 3,
    name: 3,
    url: require("../../assets/image/blockchain/3.svg").default,
  },
  {
    id: 4,
    name: 4,
    url: require("../../assets/image/blockchain/4.svg").default,
  },
  {
    id: 5,
    name: 5,
    url: require("../../assets/image/blockchain/5.svg").default,
  },
  {
    id: 6,
    name: 6,
    url: require("../../assets/image/blockchain/6.svg").default,
  },
  {
    id: 7,
    name: 7,
    url: require("../../assets/image/blockchain/7.svg").default,
  },
  {
    id: 8,
    name: 8,
    url: require("../../assets/image/blockchain/8.svg").default,
  },
  {
    id: 9,
    name: 9,
    url: require("../../assets/image/blockchain/9.svg").default,
  },
  {
    id: 10,
    name: 10,
    url: require("../../assets/image/blockchain/11.svg").default,
  },
  {
    id: 11,
    name: 11,
    url: require("../../assets/image/blockchain/14.svg").default,
  },
];

const AboutPage = () => {
  return (
    <div className="container about-section">
      <div className="sub-section">
        <p className="text">Projects Integrated into the KronCash Ecosystem</p>
        <div className="wallet-list">
          {walletList?.map((item, key) => {
            return (
              <a
                className="wallet-item"
                target="_blank"
                rel="noreferrer"
                href="https://venomwallet.com/"
                key={key}
              >
                <img
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  src={item.url}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
