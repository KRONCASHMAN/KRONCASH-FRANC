import React, { useState } from "react";

// load assets
import "./FaqPage.scss";

const FaqPage = () => {
  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: 0,
      question:
        "What makes KronCash's approach to inflation adjustment unique in the stablecoin market?",
      answer:
        "KronCash differentiates itself by pegging its stablecoin, Kronlet, not just to a static monetary value but to historical French Franc exchange rates, adjusted for inflation using real-time U.S. CPI data. This approach ensures that the value of Kronlets remains stable and reflective of true economic conditions, offering users a hedge against inflation and preserving purchasing power in a way that traditional stablecoins tied to current fiat currencies cannot match.",
    },
    {
      id: 2,
      flag: 0,
      question:
        "How does KronCash's decentralized governance model empower its users?",
      answer:
        "KronCash leverages a decentralized autonomous organization (DAO) structure, which allows all token holders to participate in key decision-making processes through a transparent voting mechanism. This model ensures that the development and operational decisions reflect the community’s interests and needs, fostering a truly user-driven ecosystem.",
    },
    {
      id: 3,
      flag: 0,
      question: "What role does KronCash play in supporting French businesses and cultural projects?",
      answer:
        "Through its innovative financial mechanisms and community-focused initiatives, KronCash supports French businesses by facilitating easier access to global markets and providing a stable digital currency for transactions. Additionally, a portion of transaction fees generated within the KronCash ecosystem is allocated to fund cultural reservation projects and public works, reinforcing the national heritage and promoting cultural identity.",
    },
    {
      id: 4,
      flag: 0,
      question:
        "How does the integration of blockchain technology enhance the security and efficiency of KronCash?",
      answer:
        "KronCash utilizes blockchain technology to ensure that all transactions are secure, transparent, and immutable. This not only enhances security by reducing the risk of fraud and tampering but also increases efficiency by streamlining transactions and reducing the need for intermediaries.",
    },
    {
      id: 5,
      flag: 0,
      question: "Can you explain the significance of KronCash’s venture into DeFi and how it benefits users?",
      answer:
        "KronCash actively participates in the decentralized finance (DeFi) landscape by offering features like staking, liquidity pools, and yield farming. These opportunities allow users to earn returns on their investments and engage with the financial system in a more interactive and profitable way, compared to traditional banking solutions.",
    },
    {
      id: 6,
      flag: 0,
      question:
        "What advancements has KronCash made in tokenizing assets, and how does this impact the ecosystem?",
      answer:
        "By tokenizing physical and digital assets, KronCash allows users to securely and efficiently represent ownership of a wide range of assets on the blockchain. This tokenization improves liquidity, makes assets easier to trade, and opens up new investment opportunities, thereby enhancing the overall dynamism and accessibility of the KronCash ecosystem.",
    },
  ]);

  const handleFaqFlag = (item) => {
    const tempFaqFlags = faqFlags.filter((filterItem) => {
      return filterItem.id !== item.id;
    });
    if (item.flag === 1) {
      tempFaqFlags.push({
        id: item.id,
        answer: item.answer,
        question: item.question,
        flag: 2,
      });
      tempFaqFlags.sort((a, b) => {
        return a.id - b.id;
      });
      setFaqFlags(tempFaqFlags);

      setTimeout(() => {
        const tempFaqFlags = faqFlags.filter((filterItem) => {
          return filterItem.id !== item.id;
        });
        tempFaqFlags.push({
          id: item.id,
          answer: item.answer,
          question: item.question,
          flag: 0,
        });
        tempFaqFlags.sort((a, b) => {
          return a.id - b.id;
        });
        setFaqFlags(tempFaqFlags);
      }, 100);
    } else {
      tempFaqFlags.push({
        id: item.id,
        answer: item.answer,
        question: item.question,
        flag: 1,
      });
      tempFaqFlags.sort((a, b) => {
        return a.id - b.id;
      });
      setFaqFlags(tempFaqFlags);
    }
  };

  return (
    <div className="faq-section">
      <div className="sub-section">
        <div id="faq" className="title">
          <h1>FAQ</h1>
        </div>
        <div className="menu">
          {faqFlags.map((item, key) => {
            return (
              <div className="item" key={key}>
                <h3 className="content">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleFaqFlag(item)}
                  >
                    {item.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={item.flag === 1 ? "rotate" : ""}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    item.flag === 1
                      ? "description"
                      : item.flag === 2
                      ? "description hiddenbefore"
                      : "description hidden"
                  }
                >
                  <div className="des-content">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
