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
    name: "Finance The Reseve",
    key: "vote",
    img: voting,
  },
  {
    id: 4,
    name: "Documentation",
    key: "about",
  },
  {
    id: 5,
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
      node.setAttribute("href", "./theme/dark.css");
      setThemeFlag("light");
      localStorage.setItem("themeMode", "light");
    } else {
      node.setAttribute("href", "./theme/light.css");
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
                  />
                )}
              </div>
            );
          })}
        </div>

        {menuFlag && (
          <div className="route-list-mobile">
            {RouteList?.map((item, key) => {
              return (
                <div className="list-item" key={key}>
                  <a
                    href={"#" + item.key}
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}

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
