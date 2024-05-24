import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// load the pages
import Header from "./pages/Header";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Dao from "./pages/dao_data/Dao";
import Presale from "./pages/presale_data/Presale";
import Vote from "./pages/vote_data/Vote";
import Contact from "./pages/Contact";

// load css
import "./App.scss";
import Footer from "./pages/Footer";

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
          <Route path="/dao" element={<Dao />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
