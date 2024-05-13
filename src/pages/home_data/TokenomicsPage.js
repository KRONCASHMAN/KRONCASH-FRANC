import React from "react";

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
          <div className="items">
            <div className="item">
              <div className="radio-box">
                <img src="https://shibashootout.com/assets/images/svg-icons/per-amount.svg" />
                <div className="radio-text">30%</div>
              </div>
              <div className="item-text">
                <div className=""><b>Liquidity Pools</b></div>
                {/* <div className="">30% of each token to the Liquidity Pools</div> */}
              </div>
            </div>
            <div className="item">
              <div className="radio-box">
                <img src="https://shibashootout.com/assets/images/svg-icons/per-amount.svg" />
                <div className="radio-text">20%</div>
              </div>
              <div className="item-text">
                <div className=""><b>Community for governance and participation</b></div>
                {/* <div className="">20% of each token to the Community for governance and participation</div> */}
              </div>
            </div>
            <div className="item">
              <div className="radio-box">
                <img src="https://shibashootout.com/assets/images/svg-icons/per-amount.svg" />
                <div className="radio-text">20%</div>
              </div>
              <div className="item-text">
                <div className=""><b>Reserve reserves</b></div>
                {/* <div className="">20% of each token to the Reserve to ensure stability and backing of the currencies</div> */}
              </div>
            </div>
            <div className="item">
              <div className="radio-box">
                <img src="https://shibashootout.com/assets/images/svg-icons/per-amount.svg" />
                <div className="radio-text">20%</div>
              </div>
              <div className="item-text">
                <div className=""><b>Developer/Team Wallet for project</b></div> 
                {/* <div className="">20% of each token to the Developer/Team Wallet for project development, marketing, and operations</div> */}
              </div>
            </div>
            <div className="item">
              <div className="radio-box">
                <img src="https://shibashootout.com/assets/images/svg-icons/per-amount.svg" />
                <div className="radio-text">10%</div>
              </div>
              <div className="item-text">
                <div><b>Vesting Schedule</b></div>
                {/* <div>10% of each token held in a Vesting Schedule for the Developer/Team to align incentives and build long-term trust</div> */}
              </div>
            </div>
          </div>
          <div className="content-text">
            <div className="radio-content">
              <div className="radio-title">Liquidity Pools</div>
              <div className="radio-title-text">30% of each token to the Liquidity Pools.</div>
              <br />
              <div className="radio-title">Community for governance and participation</div>
              <div className="radio-title-text">20% of each token to the Community for governance and participation.</div>
              <br />
              <div className="radio-title">Reserve reserves</div>
              <div className="radio-title-text">20% of each token to the Reserve to ensure stability and backing of the currencies.</div>
              <br />
            </div>
            <div className="radio-content">
              
            <div className="radio-title">Developer/Team Wallet for project</div>
              <div className="radio-title-text">20% of each token to the Developer/Team Wallet for project development, marketing, and operations.</div>
              <br />
              <div className="radio-title">Vesting Schedule</div>
              <div className="radio-title-text">10% of each token held in a Vesting Schedule for the Developer/Team to align incentives and build long-term trust.</div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPage;
