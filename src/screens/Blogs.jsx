import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Security from "../components/Sections/Security";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Details from "../components/Sections/Details";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      {/* <Header /> */}
      <Details />
      {/* <Pricing /> */}
      {/* <Security /> */}
      {/* <Projects /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}


