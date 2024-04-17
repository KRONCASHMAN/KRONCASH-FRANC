import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// load assets
import "./RoadMapItem.scss";

const RoadMapItem = ({ position, item }) => {
  return (
    <>
      <div className="roadmapitem-section">
        <div className="item">
          {position === "left" && (
            <div className={"description " + position}>
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.content}</p>
            </div>
          )}
        </div>
        <div className={item.flag ? "mark" : "mark nobackground"}>
          {item.flag && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className="item">
          {position === "right" && (
            <div className={"description " + position}>
              <h2 className="title">{item.title}</h2>
              <p className="text">{item.content}</p>
            </div>
          )}
        </div>
      </div>
      <div className="roadmapitem-mobile-section">
        <div className={item.flag ? "mark" : "mark nobackground"}>
          {item.flag && <FontAwesomeIcon icon={faCheck} />}
        </div>
        <div className="item">
          <div className="description right">
            <h2 className="title">{item.title}</h2>
            <p className="text">{item.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMapItem;
