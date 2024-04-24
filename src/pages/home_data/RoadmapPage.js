import React from "react";
import RoadMapItem from "../../components/RoadMapItem";

// load assets
import "./RoadmapPage.scss";

const tempList = [
  {
    id: 0,
    title: "Launch",
    content: "Moonstar is born and a new journey start.",
    flag: true,
  },
  {
    id: 1,
    title: "INITIAL EXPOSURE",
    content: "Advertising, influencers marketing push",
    flag: true,
  },
  {
    id: 2,
    title: "CORE TEAM BUILDING",
    content: "We are at 50% at the moment and looking for some new members",
    flag: true,
  },
  {
    id: 3,
    title: "COMMUNITY 65%",
    content:
      "Fudders and people that came for a quick buck are starting to leave out of boredom, wholesome community is building",
    flag: true,
  },
  {
    id: 4,
    title: "PRODUCT DEVELOPMENT 40%",
    content:
      "We are working on a new website, talking with a dev to bring a dApp and NFT shop",
    flag: false,
  },
  {
    id: 5,
    title: "FURTHER EXPOSURE",
    content: "We are preparing soon for a second marketing push",
    flag: false,
  },
  {
    id: 6,
    title: "PARTNERSHIPS 30%",
    content:
      "We are in the talks with 2 big projects to collaborate with, this will boost us even more than cmc and cg listing",
    flag: false,
  },
  {
    id: 7,
    title: "TO THE STARS",
    content: "Much more to come!",
    flag: false,
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
