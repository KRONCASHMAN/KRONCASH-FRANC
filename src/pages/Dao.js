import React from "react";
import "./Dao.scss";

// load nft assets
import BaronNFT from "../assets/KRONCASH/BaronPro.png";
import ViscountNFT from "../assets/KRONCASH/ViscountPro.png";
import MarqueeNFT from "../assets/KRONCASH/MarquessPro.png";
import DukeNFT from "../assets/KRONCASH/DukePro.png";
import VivienneNFT from "../assets/KRONCASH/Dao/Vivienne/vivienne1.png"
import MargottNFT from "../assets/KRONCASH/Dao/Margott/Margott1.png";
import MediciNFT from "../assets/KRONCASH/Dao/Medici/Medici1.png";
import IsoldeNFT from "../assets/KRONCASH/Dao/Isolde/Isolde.png";

const Dao = () => {
  return (
    <div className="main-background">
      <div className="dao_title">Governance Protocol 2.0 Kroncash-France DAO Titles</div>
      <div className="NFT_group">
        <div className="NFT_Container">
          <img className="summary_img" src={BaronNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Baron NFT</div>
            <div className="NFT_price">Price: 500 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Baron collection. 3,000 exist, with a tonne of value and utility packed inside, most notably in the 10 KCF tokens each Baron NFT yields per day, everyday.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={ViscountNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Viscount NFT</div>
            <div className="NFT_price">Price: 1000 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Viscount collection. 1,500 exist, with a tonne of value and utility packed inside, most notably in the 50 KCF tokens each Viscount NFT yields per day, everyday.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MarqueeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Marquee NFT</div>
            <div className="NFT_price">Price: 2500 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Marquee collection. 750 exist, with a tonne of value and utility packed inside, most notably in the 100 KCF tokens each Marquee NFT yields per day, everyday.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={DukeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Baron NFT</div>
            <div className="NFT_price">Price: 5000 USDT</div>
          </div>
          <div className="NFT_detail">
            The glorious Duke collection. 300 exist, with a tonne of value and utility packed inside, most notably in the 200 KCF tokens each Duke NFT yields per day, everyday.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
      </div>
      <div className="NFT_group">
        <div className="NFT_Container">
          <img className="summary_img" src={VivienneNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Vivienne NFT</div>
            <div className="NFT_price">Price: 0.5 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            If you want to read more about Princess Vivienne of Bordeaux, please click the View More button.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MargottNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">MargottNFT NFT</div>
            <div className="NFT_price">Price: 0.6 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            <br />
            If you want to read more about Princess Margott, please click the View More button.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={MediciNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Medici NFT</div>
            <div className="NFT_price">Price: 0.3 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            If you want to read more about Princess Catherine Medici, please click the View More button.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
        <div className="NFT_Container">
          <img className="summary_img" src={IsoldeNFT} alt="Baron" />
          <div className="NFT_Price_detail">
            <div className="NFT_title">Isolde NFT</div>
            <div className="NFT_price">Price: 0.1 ETH</div>
          </div>
          <div className="NFT_detail">
            Here is amazing story!
            <br />
            <br />
            If you want to read more about Princess Isolde, please click the View More button.
          </div>
          <button className="NFT_rent_btn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Dao;
