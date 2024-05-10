import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// load the pages
import Header from "./pages/Header";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Doc from "./pages/Doc";
import Vote from "./pages/Vote";
import Contact from "./pages/Contact";

// load css
import "./App.scss";

const App = () => {
  useEffect(() => {
    const node = document.createElement("link");
    node.setAttribute("rel", "stylesheet");
    if (localStorage.themeMode === "dark") {
      node.setAttribute("href", "./theme/dark.css");
    } else {
      node.setAttribute("href", "./theme/light.css");
    }
    node.setAttribute("id", "lightlink");
    document.getElementById("kroncash").append(node);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage isLoading={isLoading} />;
  }

  return (
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;