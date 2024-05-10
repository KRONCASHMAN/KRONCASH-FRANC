import React from "react";
import RoadMapItem from "../../components/RoadMapItem";

// load assets
import "./RoadmapPage.scss";

const tempList = [
  {
    id: 0,
    title: "Conceptualization and Planning",
    content:
      "-Whitepaper Creation  - Define the mission, vision, and goals of Kroncash and Kronlet.  - Specify technical requirements for stablecoin and other ecosystem components.  - Feasibility Study  - Research legal and regulatory requirements for operating in targeted jurisdictions.  - Analyze market demand and competitors in the stablecoin space. ",
    flag: true,
  },
  {
    id: 1,
    title: "Technical Infrastructure Setup",
    content:
      "- Smart Contract Development  - Design and develop the core smart contracts for Kronlet stablecoin. - Deployment on Testnet  - Use Hardhat framework for developing and debugging and deploying.  - Deploy contracts on a testnet for trial runs and debugging. - Security Audits   - Engage third-party services for security audits of the smart contracts.",
    flag: true,
  },
  {
    id: 2,
    title: "DApp and User Interface",
    content:
      "- Web Platform Development  - Design and develop the initial version of the DApp website interface. - Web3 Integration   - Integrate Web3 functionalities to allow users to interact with contracts directly from the DApp. - Wallet Integration  - Ensure compatibility with major wallets (e.g.,MetaMask, WalletConnect, Coinbase, Binance).",
    flag: true,
  },
];

const RoadmapPage = () => {
  return (
    <div className="container roadmap-section">
      <div className="sub-section">
        <div className="title">
          <h2>Our RoadMap</h2>
          <span>RoadMap</span>
        </div>
        <div className="content">
          <div className="stickLine"></div>
          {tempList?.map((item, key) => {
            return (
              <RoadMapItem
                position={key % 2 === 0 ? "right" : "left"}
                key={key}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
