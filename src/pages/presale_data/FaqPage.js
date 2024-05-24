import React, { useState } from "react";

// load assets
import "./FaqPage.scss";

const FaqPage = () => {
  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: 0,
      question:
        "What is ICO?",
      answer:
        "Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.",
    },
    {
      id: 2,
      flag: 0,
      question:
        "What cryptocurrencies I use to purchase?",
      answer:
        "Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.",
    },
    {
      id: 3,
      flag: 0,
      question:
        "How do I benefit from the ICO?",
      answer:
        "Pretium mauris viverra eget nulla eu auctor scelerisque risus. Ornare morbi pulvinar ipsum gravida rutrum. Aliquam aliquet ac vitae pellentesque lectus elementum. Nunc mus et, pulvinar facilisi viverra. At amet mauris fermentum sed. Aliquam ut rhoncus et semper non purus massa risus. Tristique mattis in sed dictum cursus eu lorem placerat.",
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
          <h1>FAQS</h1>
          <p className="StyledDescription">
            {`Here is our full docments that help you to understand`}{" "}
            {`deeply about us and our operation`}
          </p>
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
