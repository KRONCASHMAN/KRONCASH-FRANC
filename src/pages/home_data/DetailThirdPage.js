import React from "react";

// load assets
import BadgeUrl from "../../assets/KRONCASH/6.png";
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
            <h1>KronCash Network</h1>
            <p className="text">
              Revolutionizing web hosting with decentralization and freedom.
              Experience the power of hosting what you want, free from
              censorship or monitoring. Leveraging IPFS technology, your
              websites are securely hosted, and once deployed, even we can't
              take them down. Enjoy the ease and speed of setup, with hosting
              ready in less than 5 minutes. Join us in shaping a decentralized
              future for web hosting with KronCash.
            </p>
          </div>
          <a
            target="_blank"
            href="https://docs.opsec.computer/category/opsec-cloudverse"
            rel="noreferrer"
            className="learn-btn"
          >
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailFirstPage;
