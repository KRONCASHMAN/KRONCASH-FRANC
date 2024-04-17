import React from "react";
import "./LoadingPage.scss";

// load assets
import LoadingUrl from "../assets/image/loading.png";

const LoadingPage = () => {
  return (
    <div className="loading-section">
      <img src={LoadingUrl} alt="loading..." />
    </div>
  );
};

export default LoadingPage;
