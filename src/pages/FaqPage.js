import React, { useState } from "react";

// load assets
import "./FaqPage.scss";

const FaqPage = () => {
  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: 0,
      question:
        "What sets Celtex apart from other project deployment platforms?",
      answer:
        "One unique feature of Celtex is its decentralized architecture, which allows users total control over their projects. Because of its decentralization, Celtex stands apart in the field of project deployment because of its increased security and autonomy",
    },
    {
      id: 2,
      flag: 0,
      question:
        "How does Celtex leverage supercomputing power and what value does it bring?",
      answer:
        "With the integration of supercomputing capabilities, Celtex offers users computational capability never before seen. This leads to unrivaled performance when handling data-intensive operations, complicated simulations, and scientific research, establishing Celtex as a platform at the forefront of innovation.",
    },
    {
      id: 3,
      flag: 0,
      question: "What is the significance of Celtex’s mesh network technology?",
      answer:
        "The mesh network from Celtex guarantees a durable architecture, lowers latency, and improves network connectivity. Celtex distinguishes itself by eliminating single points of failure and offering consumers a dependable and effective computing environment.",
    },
    {
      id: 4,
      flag: 0,
      question:
        "Can you elaborate on Celtex’s GPU acceleration and how versatile it is?",
      answer:
        "Celtex combines a series of high-performance GPUs to support a wide range of applications, including graphics-intensive projects and AI/ML applications. Celtex stands out in providing effective and enhanced performance because of its flexible GPU capabilities.",
    },
    {
      id: 5,
      flag: 0,
      question: "What makes Celtex privacy-centric?",
      answer:
        "Celtex places a high priority on privacy and applies this design philosophy to all infrastructure layers. Celtex stands out as a platform dedicated to protecting user privacy since user data is kept private and secure.",
    },
    {
      id: 6,
      flag: 0,
      question:
        "What are the attributes of OpsSec’s RWA and how does it benefit users?",
      answer:
        "Celtex presents the idea of tokenizing physical assets, enabling users to represent and exchange physical goods using blockchain technology. This improves the Celtex ecosystem's liquidity, accessibility, and transparency.",
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
