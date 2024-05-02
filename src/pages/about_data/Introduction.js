import React from "react";

// load assets
import intro_img from "../../assets/KRONCASH/5.png";
import history_img from "../../assets/KRONCASH/7.png";
import revenue_img from "../../assets/KRONCASH/13.jpg";
import network_img from "../../assets/KRONCASH/16.png";
import chart_img from "../../assets/KRONCASH/19.png";
import Innovation_img from "../../assets/KRONCASH/20.png";
import contract_img from "../../assets/KRONCASH/21.jpg";
import "./Introduction.scss";

const Introduction = () => {
  return (
    <div className="container detail-about-section">
      <div className="sub-section">
        <div className="left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={intro_img}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>KronCash Introduction</h1>
            <p className="text">
              Kroncash, as a decentralized application (DApp) on the Ethereum
              blockchain, seeks to reintegrate the economic value and functions
              of historical currencies like the French Franc into contemporary
              digital finance. By resurrecting these past economies, Kroncash
              not only provides a unique financial instrument but also enriches
              the Ethereum ecosystem, driving further innovation, usage, and
              growth. This essay explores the ways Kroncash benefits the
              Ethereum blockchain, focusing on economic implications, growth in
              transaction volumes, and enhancements in blockchain utility.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>Economic Revitalization through Historical Value</h1>
            <p className="text">
              Kroncash taps into the historical significance and economic
              frameworks of past currencies, adjusting them for current economic
              realities using blockchain technology. This innovative approach
              allows users to leverage the stable, historically adjusted values
              of currencies like the French Franc, now represented by Kronlets,
              Kroncash's stablecoin. By providing a stablecoin indexed to
              historical economic data rather than just contemporary fiat
              currencies, Kroncash introduces a new layer of economic stability
              and investment opportunity to the blockchain ecosystem.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
        <div className="left ml-80 order-left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={history_img}
          />
        </div>
      </div>
      <div className="sub-section">
        <div className="left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={revenue_img}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Revenue Implications</h1>
            <p className="text">
              - Transaction Fees: Every transaction involving Kronlets generates
              fees paid in Ether, contributing to the overall economic
              throughput on the Ethereum network. Assuming modest adoption rates
              in its initial years, Kroncash could generate transaction volumes
              upwards of $100 million annually, translating into significant
              Ether transaction fees.
              <br />- Staking and DeFi Integration: By engaging in DeFi
              protocols, Kroncash encourages the locking up of Ether and
              Kronlets in various financial instruments, enhancing liquidity and
              financial stability on the Ethereum network. This activity
              supports the DeFi ecosystem's growth, estimated to be worth over
              $100 billion in total value locked.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>Growth and Network Utilization</h1>
            <p className="text">
              Kroncash not only contributes economically but also drives
              substantial growth in network utilization on Ethereum. By
              attracting users interested in the historical economic narrative
              and stability offered by Kronlets, Kroncash increases daily
              transactions and active wallets within the network.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
        <div className="left ml-80 order-left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={network_img}
          />
        </div>
      </div>
      <div className="sub-section">
        <div className="left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={chart_img}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Growth Statistics</h1>
            <p className="text">
              - User Adoption: With targeted marketing and the unique value
              proposition of historical economic stability, Kroncash could
              attract over 500,000 new users to the Ethereum network within the
              first two years, based on adoption rates of similar financial
              DApps.
              <br />- Transaction Growth: An increase in user base and
              transaction volume directly correlates with higher network
              utilization, which strengthens the network effect of Ethereum and
              supports higher valuation of Ether due to increased demand.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>Enhancing Blockchain Utility and Innovation</h1>
            <p className="text">
              Kroncash does not merely add transactions to the Ethereum
              blockchain; it also pioneers innovative uses of blockchain
              technology. By using smart contracts to adjust the supply and
              value of Kronlets based on historical inflation data, Kroncash
              adds a layer of dynamic economic management that could be applied
              to other areas of finance and governance.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
        <div className="left ml-80 order-left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={Innovation_img}
          />
        </div>
      </div>
      <div className="sub-section">
        <div className="left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={contract_img}
          />
        </div>
        <div className="right">
          <div className="title">
            <h1>Innovation Impact</h1>
            <p className="text">
              - Smart Contract Use Cases: Kroncash’s smart contracts can serve
              as a model for other DApps, demonstrating how to integrate complex
              historical data with blockchain technology to manage economic
              indices dynamically.
              <br />- Financial Product Development: The introduction of
              Kronlets encourages the development of other sophisticated
              financial products on Ethereum, such as derivatives, futures, and
              more, which can be pegged to historical economic values, enhancing
              the diversity and complexity of financial options available.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
      </div>
      <div className="sub-section">
        <div className="right ml-0 order-right">
          <div className="title">
            <h1>VOTING PROTOCOLS</h1>
            <p className="text">
              The Kroncash governance process incorporates a sophisticated and
              transparent voting system, designed to engage token holders in key
              decisions impacting the platform. Based on the Kroncash Valuation
              Governance Protocol, token holders have the ability to participate
              in various governance decisions, including those related to
              inflation adjustments and protocol changes, which are crucial for
              maintaining the stability and relevance of Kronlets. This
              decentralized approach ensures that all adjustments to the
              Kronlet's value are made transparently and are auditable in
              real-time, enhancing trust and participation among users.
              Moreover, the protocol allows for tiered voting, where
              stakeholders can purchase increased voting rights, further
              aligning the interests of active participants with the long-term
              health and viability of the platform. This tiered system not only
              incentivizes deeper engagement by providing more significant
              influence over decisions but also serves as an additional revenue
              stream that supports the financial stability of the reserve.
            </p>
          </div>
          <a target="_blank" href="#" rel="noreferrer" className="learn-btn">
            <button type="button" className="btn">
              <span>Learn More</span>
            </button>
          </a>
        </div>
        <div className="left ml-80 order-left">
          <img
            className="badge-img"
            alt="opsec-logo"
            loading="lazy"
            decoding="async"
            src={Innovation_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
