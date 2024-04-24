import React from "react";

// load assets
import LogoUrl from "../../assets/image/name-logo.png";
import CloudverseUrl from "../../assets/image/cloudverse.png";
import CloudsecUrl from "../../assets/image/cloudsec.png";
import CloudnetworkUrl from "../../assets/image/cloudnetwork.png";
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
            PIONEERING THE
            <br />
            NEXT GENERATION
          </h1>
          <div className="flex">
            <h1 className="text">PRODUCTS</h1>
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
              <p className="product-text">KronCash Cloudverse</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudsecUrl}
              />
              <p className="product-text">CloudSec Router</p>
            </div>
            <div className="product-item">
              <img
                className="product-img"
                alt=""
                loading="lazy"
                decoding="async"
                src={CloudnetworkUrl}
              />
              <p className="product-text">KronCash Network</p>
            </div>
          </div>
        </div>
        <div className="fade-left">
          <h1 className="content">
            KronCash's decentralized architecture is built upon advanced cloud
            network technology and it forms the foundation of a secure and
            resilient computing environment.
            <br />
            <br />
            KronCash Nodes, the backbone of this infrastructure, allow users to
            deploy projects autonomously or collaboratively, fostering a diverse
            and inclusive ecosystem.
            <br />
            <br />
            KronCash's decentralized computing architecture is meticulously
            crafted to redefine the landscape of distributed systems. Whether
            you are hosting decentralized apps, deploying blockchain nodes, or
            remotely accessing your servers, KronCash makes sure that your journey
            is characterized by security, independence, and innovative
            forward-thinking.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;
