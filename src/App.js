import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Load web3 modal wallet provider

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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


// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '760f8d127d7a9b7c0dbb7dfc6ee6d1ca'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

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

      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default App;
