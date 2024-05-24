import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// load assets
import logoImageUrl from "../assets/image/name-logo.png";
import menuSquareUrl from "../assets/image/menu-square.png";
import voting from "../assets/KRONCASH/voting.gif";
import "./Header.scss";

const RouteList = [
  {
    id: 1,
    name: "Home",
    key: "",
  },
  {
    id: 2,
    name: "About",
    key: "about",
  },
  {
    id: 3,
    name: "Finance The Reserve",
    key: "vote",
    img: voting,
  },
  {
    id: 4,
    name: "DAO Protocol",
    key: "dao",
    img: voting,
  },
  {
    id: 5,
    name: "PreSale",
    key: "presale",
    img: voting,
  },
  {
    id: 6,
    name: "Contact Us",
    key: "contact",
  },
];

const Header = () => {
  const [themeFlag, setThemeFlag] = useState(
    localStorage.themeMode === "dark" ? "dark" : "light"
  );

  const handleChangeTheme = () => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (themeFlag === "dark") {
      node.setAttribute("href", "./theme/light.css");
      setThemeFlag("light");
      localStorage.setItem("themeMode", "light");
    } else {
      node.setAttribute("href", "./theme/dark.css");
      setThemeFlag("dark");
      localStorage.setItem("themeMode", "dark");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("kroncash").append(node);
  };
  const [menuFlag, setMenuFlag] = useState(false);

  const handleShowMenu = () => {
    setMenuFlag(!menuFlag);
  };

  const [account, setAccounts] = useState("");

  const handleConnect = () => {
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
  }

  return (
    <div className="header-section">
      <div className="sub-section">
        <div className="logo">
          <img
            className="logo-image"
            alt="logo"
            loading="lazy"
            decoding="async"
            src={logoImageUrl}
          />
        </div>

        <div className="route-list">
          {RouteList?.map((item, key) => {
            return (
              <div className="list-item" key={key}>
                <Link to={"/" + item.key}>{item.name}</Link>
                {item.img && (
                  <img
                    src={item.img}
                    style={{
                      position: "absolute",
                      top: "0",
                      marginLeft: "-10px",
                    }}
                    alt=""
                  />
                )}
              </div>
            );
          })}
          {/* <div className="list-item">
            <a target="_blank" href="https://presale-dun.vercel.app/">Launch Presale</a>
          </div> */}
        </div>

        {menuFlag && (
          <div className="route-list-mobile">
            {RouteList?.map((item, key) => {
              return (
                <div className="list-item" key={key}>
                  <Link to={"/" + item.key}>{item.name}</Link>
                </div>
              );
            })}
            {/* <div className="list-item">
              <a target="_blank" href="https://presale-dun.vercel.app/">Launch Presale</a>
            </div> */}

            <div className="button-section">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.uniswap.org/swap?outputCurrency=0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98"
              >
                <button className="btn btn-link">
                  <span className="btn-span">BUY KF Token</span>
                </button>
              </a>
            </div>
            <div className="button-section">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.uniswap.org/swap?outputCurrency=0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98"
              >
                <button className="btn btn-link">
                  <span className="btn-span">BUY KCF Token</span>
                </button>
              </a>
              <div className="connetWallet">
                {account ? (<button className="btn btn-link" onClick={() => window.location.reload()}>
                  <span className="btn-span">{account.substring(0, 6)}...{account.substring(38, 42)} Disconnect</span></button>) : (<button className="btn  btn-link" onClick={() => handleConnect()}><span className="btn-span">Connect</span></button>)}
              </div>
            </div>
          </div>
        )}
        <div className="toggle-item">
          <div
            className={
              themeFlag === "light"
                ? "theme-section"
                : "theme-section right-theme"
            }
            onClick={handleChangeTheme}
          >
            <FontAwesomeIcon
              className={
                themeFlag === "light" ? "theme-icon left" : "theme-icon right"
              }
              icon={themeFlag === "light" ? faSun : faMoon}
            />
          </div>
        </div>
        <div className="button-section">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/swap?outputCurrency=0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98"
          >
            <button className="btn btn-link" style={{ marginRight: "10px" }}>
              <span className="btn-span">BUY KF Token</span>
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.uniswap.org/swap?outputCurrency=0x6a7eff1e2c355ad6eb91bebb5ded49257f3fed98"
          >
            <button className="btn btn-link">
              <span className="btn-span">BUY KCF Token</span>
            </button>
          </a>
          <a rel="noopener noreferrer">
            {account ? (<button className="btn btn-link" onClick={() => window.location.reload()}>
              <span className="btn-span">{account.substring(0, 6)}...{account.substring(38, 42)} Disconnect</span></button>) : (<button className="btn btn-link" onClick={() => handleConnect()}><span className="btn-span">Connect</span></button>)}
          </a>
        </div>
        <div className="drop-menu">
          <button className="btn drop-btn" onClick={handleShowMenu}>
            <img
              alt="menu"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={menuSquareUrl}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
