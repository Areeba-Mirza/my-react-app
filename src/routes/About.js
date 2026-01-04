import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";// ensure file name Hero.jsx or Hero.js
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/images/travel.jpg" // ✅ public folder image
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
