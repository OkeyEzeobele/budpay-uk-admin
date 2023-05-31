import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Blog from "./components/Sections/Blog.jsx";
import Pricing from "./components/Sections/Pricing.jsx";
import Security from "./components/Sections/Security.jsx";
import Help from "./components/Sections/HelpCenter.jsx";


export default function App() {

  return (
    <Router>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />`
        </Helmet>
        <Routes>
        <Route exact path='/' element={< Landing />}></Route>
        <Route exact path='/blog' element={< Blog />}></Route>
        <Route exact path='/pricing' element={< Pricing />}></Route>
        <Route exact path='/security' element={< Security />}></Route>
        <Route exact path='/help-center' element={< Help />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
