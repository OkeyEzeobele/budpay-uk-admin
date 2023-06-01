import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Transactions from "./screens/Transactions.jsx";
import Revenue from "./screens/Revenue.jsx";
import Wallet from "./screens/Wallet.jsx";
import Cards from "./screens/Cards.jsx";
import Customers from "./screens/Customers.jsx";
import Support from "./screens/Support.jsx";
import Settings from "./screens/Settings.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
          `
        </Helmet>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/transactions" element={<Transactions />}></Route>
          <Route exact path="/revenue" element={<Revenue />}></Route>
          <Route exact path="/wallet" element={<Wallet />}></Route>
          <Route exact path="/cards" element={<Cards />}></Route>
          <Route exact path="/customers" element={<Customers />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route exact path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
