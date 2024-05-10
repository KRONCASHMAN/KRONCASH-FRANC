import React from "react";

// load assets
import IntroUrl from "../../assets/KRONCASH/25.png";
import MagnicficCanvas from "../../components/MagnicficCanvas";
import LogoImageUrl from "../../assets/image/name-logo.png";
import "./IntroPage.scss";

const IntroPage = () => {
  return (
    <div className="intro-section">
      <div class="intro-title-img">
        <div class="intro-title">
          KRONCASH
          <br />
          <label className="font-small">
            TOKENIZING HISTORY OF FRANCE'S ECONOMIC EMPIRE
          </label>
        </div>
        <div className="intro-img">
          <img
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={IntroUrl}
          />
        </div>
      </div>
      <div className="canvas-section">
        <MagnicficCanvas />
      </div>
    </div>
  );
};

export default IntroPage;
