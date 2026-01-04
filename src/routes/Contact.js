import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero"; // ensure file name Hero.jsx
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg="/images/contact.jpg" // ✅ public folder image
        title="Contact"
        btnClass="hide"
      />

      <ContactForm />

      <Footer />
    </>
  );
}

export default Contact;
