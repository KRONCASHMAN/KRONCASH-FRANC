import React from "react";

// load assets
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="section">
        <div className="sub-section">
          <div className="first">
            <div className="company">
              <h1>Company</h1>
            </div>
            <div className="item">
              <a
                href="https://docs.opsec.computer/category/getting-started"
                target="_blank"
                rel="noreferrer"
              >
                Products
              </a>
            </div>
            <div className="item">
              <a
                href="https://docs.opsec.computer/getting-started/cloudsec"
                target="_blank"
                rel="noreferrer"
              >
                Hardware
              </a>
            </div>
            <div className="item">
              <a
                href="https://docs.opsec.computer/category/opsec-network"
                target="_blank"
                rel="noreferrer"
              >
                Network
              </a>
            </div>
          </div>
          <div className="second">
            <h1>Socials</h1>
            <div className="content">
              <a
                href="https://twitter.com/opseccloud"
                target="_blank"
                rel="noreferrer"
              >
                X (Twitter)
              </a>
              <a
                href="https://t.me/OpSecCloud"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="copyright">
        <span>©{new Date().getFullYear()}</span> KronCash - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
