import React, { useState } from "react";
import { Link } from 'react-router-dom';
// load assets
import logoImageUrl from "../assets/image/name-logo.png";
import menuSquareUrl from "../assets/image/menu-square.png";
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
    name: "Roadmap",
    key: "roadmap",
  },
  {
    id: 4,
    name: "Documentation",
    key: "documentation",
  },
  {
    id: 5,
    name: "Faq",
    key: "faq",
  },
  {
    id: 6,
    name: "Cloudverse",
    key: "cloudverse",
  },
  {
    id: 7,
    name: "Cloudsec",
    key: "cloudsec",
  },
];

const Header = () => {
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
                <Link to={"/" + item.key}>
                  {item.name}
                </Link>
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
                  <span className="btn-span">BUY KCF Token</span>
                </button>
              </a>
            </div>
          </div>
        )}

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
