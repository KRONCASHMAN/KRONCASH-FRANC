import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import table_icon_kroncash from "../../assets/KRONCASH/KCF.png";
import table_icon_kronlet from "../../assets/image/name-logo.png";
import table_icon_ETH from "../../assets/image/eth.png";
import table_icon_rocket from "../../assets/image/blockchain/16.svg";
import main_img_1 from "../../assets/KRONCASH/22.png";
import main_img_2 from "../../assets/KRONCASH/23.png";
import main_img_3 from "../../assets/KRONCASH/Bitmap.png";
import main_img_4 from "../../assets/KRONCASH/BonusCharactor.png";
import baron_img from "../../assets/KRONCASH/BaronPro.png";
import viscount_img from "../../assets/KRONCASH/ViscountPro.png";
import marques_img from "../../assets/KRONCASH/MarquessPro.png";
import duke_img from "../../assets/KRONCASH/DukePro.png";
import Princess_img from "../../assets/KRONCASH/PrincessPro.png";
import VoteCard from "../home_data/Votepage_card";
import "./Vote.scss";

const Vote = () => {

  const [faqFlags, setFaqFlags] = useState([
    {
      id: 1,
      flag: 0,
      question: "Portion of Transaction Fees",
      answer:
        "A significant percentage of transaction fees collected is allocated directly to the reserve fund. This ensures that there is always sufficient backing for the Kronlets in circulation, safeguarding against market volatility and financial uncertainties.",
    },
    {
      id: 2,
      flag: 0,
      question: "Revenue from Financial Products",
      answer:
        "Profits from the sale of financial products are partially funneled into the reserve. This not only enhances the reserve’s size but also ties the ecosystem's financial health directly to its innovative offerings, aligning product success with financial stability.",
    },
    {
      id: 3,
      flag: 0,
      question: "Tiered Voting Contributions",
      answer:
        "The revenues generated from the sale of higher voting rights contribute directly to the reserve. This innovative approach not only encourages active governance participation but also ensures that those who have a greater stake in the system contribute correspondingly to its stability.",
    },
    {
      id: 4,
      flag: 0,
      question: "Strategic Investments and Reinvestment",
      answer:
        "Returns from investments made using reserve assets are reinvested back into the reserve. This compounding effect not only grows the reserve size over time but also aligns with the principle of sustainable financial management.",
    },
  ]);

  const [account, setAccounts] = useState("");

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

  const Baron_handleVote = () => {
    if (account == undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    // wallet connection part
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          setAccounts(accounts[0]);
        })
        .catch((error) => {
          alert(`Something went wrong: ${error}`);
          window.location.href = "/";
        });
    } else {
      alert("Please install Metamask wallet!");
      window.location.href = "/";
    }
  }, []);

  const Viscount_handleVote = () => {
    if (account == undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const Marquesss_handleVote = () => {
    if (account == undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const Duke_handleVote = () => {
    if (account == undefined) {
      toast.warn('Connect Wallet!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="main-background">
        <div className="container">
          <div className="banner">
            Reserve Financing through Strategic Revenue Allocation
          </div>
          <div className="cards">
            <div class="card">
              <div class="image">
                <img src={main_img_3} alt="" />
              </div>
              <div class="content">
                <h3>MicroEconomy of France</h3>
                <p>
                  KronCash aims to use French exchange themes from history to support an ecosystem of money and luxury.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="image">
                <img src={main_img_2} alt="" />
              </div>
              <div class="content">
                <h3>French It Has A Typo</h3>
                <p>
                  To integrate French businesses seamlessly into the burgeoning
                  DeFi ecosystem, enhancing their fincial operations through
                  modern, blockchain-based solutions.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="image">
                <img src={main_img_1} alt="" />
              </div>
              <div class="content">
                <h3>Democratic Allocation</h3>
                <p>
                  Our governance board DAAE uses democratic allocation of resources that promote french related causes to strengthen our french themed token and generate extremely high returns and bonuses for our members.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="image">
                <img src={main_img_4} alt="" />
              </div>
              <div class="content">
                <h3>Bonuses System</h3>
                <p>
                  Finance the Reserve through our crypto nobility rental program. Get bonuses and characters that support the ecosystem whilst promoting the elegant themes of France and its wealth.
                </p>
              </div>
            </div>
          </div>
          {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.kroncash.org"
        >
          <button class="vote_btn" type="button">
            Subscibe kroncash
          </button>
        </a> */}
          <VoteCard />
          <h1 className="vot_title">Aristocracy Titles</h1>
          <div className="vote_box" style={{ marginTop: "50px" }}>
            <div className="vote_card">
              <div class="card__face card__face--front">
                <img src={baron_img} alt="" />
              </div>
              <div class="card__face card__face--back">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className="sticky">
                          <span>Coin</span>
                        </th>
                        <th>Name</th>
                        <th>Chain</th>
                        <th>Price In ETH</th>
                        <th>Price In USDT</th>
                        <th>Launch</th>
                        <th>Vote Price</th>
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="sticky">
                          <img
                            className="kronCash_img"
                            src={table_icon_kroncash}
                            alt=""
                          />
                        </td>
                        <td>Kroncash</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.063 ETH</td>
                        <td>200 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 200
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="sticky">
                          <img className="kronlet_img" src={table_icon_kronlet} alt="" />
                        </td>
                        <td>Kronlet</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.063 ETH</td>
                        <td>200 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 200
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button onClick={() => Baron_handleVote()} className="flip_btn">Vote X 200</button>
              </div>
            </div>
            <div className="vote_card">
              <div class="card__face card__face--front">
                <img src={viscount_img} alt="" />
              </div>
              <div class="card__face card__face--back">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className="sticky">
                          <span>Coin</span>
                        </th>
                        <th>Name</th>
                        <th>Chain</th>
                        <th>Price In ETH</th>
                        <th>Price In USDT</th>
                        <th>Launch</th>
                        <th>Vote Price</th>
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="sticky">
                          <img
                            className="kronCash_img"
                            src={table_icon_kroncash}
                            alt=""
                          />
                        </td>
                        <td>Kroncash</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.16 ETH</td>
                        <td>500 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 500
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="sticky">
                          <img className="kronlet_img" src={table_icon_kronlet} alt="" />
                        </td>
                        <td>Kronlet</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.16 ETH</td>
                        <td>500 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 500
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button onClick={() => Viscount_handleVote()} className="flip_btn">Vote X 500</button>
              </div>
            </div>
          </div>
          <div className="vote_box">
            <div className="vote_card">
              <div class="card__face card__face--front">
                <img src={marques_img} alt="" />
              </div>
              <div class="card__face card__face--back">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className="sticky">
                          <span>Coin</span>
                        </th>
                        <th>Name</th>
                        <th>Chain</th>
                        <th>Price In ETH</th>
                        <th>Price In USDT</th>
                        <th>Launch</th>
                        <th>Vote Price</th>
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="sticky">
                          <img
                            className="kronCash_img"
                            src={table_icon_kroncash}
                            alt=""
                          />
                        </td>
                        <td>Kroncash</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.31 ETH</td>
                        <td>1000 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 1000
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="sticky">
                          <img className="kronlet_img" src={table_icon_kronlet} alt="" />
                        </td>
                        <td>Kronlet</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>0.31 ETH</td>
                        <td>1000 USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 1000
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button onClick={() => Marquesss_handleVote()} className="flip_btn">Vote X 1000</button>
              </div>
            </div>
            <div className="vote_card">
              <div class="card__face card__face--front">
                <img src={duke_img} alt="" />
              </div>
              <div class="card__face card__face--back">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className="sticky">
                          <span>Coin</span>
                        </th>
                        <th>Name</th>
                        <th>Chain</th>
                        <th>Price In ETH</th>
                        <th>Price In USDT</th>
                        <th>Launch</th>
                        <th>Vote Price</th>
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="sticky">
                          <img
                            className="kronCash_img"
                            src={table_icon_kroncash}
                            alt=""
                          />
                        </td>
                        <td>Kroncash</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>3.14 ETH</td>
                        <td>10K USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 10K
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="sticky">
                          <img className="kronlet_img" src={table_icon_kronlet} alt="" />
                        </td>
                        <td>Kronlet</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_ETH}
                              style={{ width: "30px", height: "30px" }}
                              alt=""
                            />{" "}
                            ETH
                          </div>
                        </td>
                        <td>3.14 ETH</td>
                        <td>10K USDT</td>
                        <td>In 2 months</td>
                        <td>
                          <div className="center">
                            <img
                              src={table_icon_rocket}
                              style={{ width: "22px", height: "22px" }}
                              alt=""
                            />{" "}
                            X 10K
                          </div>
                        </td>
                        <td>
                          <button className="vote">Vote</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button onClick={() => Duke_handleVote()} className="flip_btn">Vote X 10K</button>
              </div>
            </div>
          </div>
          <div className="vote_box" style={{ justifyContent: "center" }}>
            <div className="vote_card">
              <div class="card__face card__face--front">
                <img src={Princess_img} alt="" />
              </div>
              <div class="card__face card__face--back">
                <div>To maintain your nobility title and authority within the Kroncash ecosystem's DAAE treasury, you must form an alliance with a Crypto Princess. Pair your NFT with a Crypto Princess after six months to preserve your power and status.</div>
                <button onClick={() => Marquesss_handleVote()} className="flip_btn">Vote</button>
              </div>
            </div>
          </div>
          <div className="sub-section">
            <div id="faq" className="title">
              <h1>VOTING PROTOCAL</h1>
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
      </div>
    </>
  );
};

export default Vote;
