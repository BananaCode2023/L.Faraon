import React from "react";
import { Link } from "react-router-dom";
import "../css/contact.css";
import Headings from "../components/Headings";
import Titles from "../components/Titles";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <>
      <Navbar />
        <div className="contact-heading">
          <Headings text="CONTACT" />
        </div>

        <section className="contact-info">
          <div className="contact-info-container">
            <div className="contact-title">
              <Titles text="WANT TO WORK WITH ME?" />
              <p>You can easily contact me through:</p>
            </div>
            <div className="contact-container">
              <Link
                to="https://www.facebook.com/Lfaraon14"
                target="_blank"
                className="contact"
              >
                <FaFacebookF />
                <p>@LFaraon14</p>
              </Link>
              <Link
                to="https://www.instagram.com/l.faraon_arts/"
                target="_blank"
                className="contact"
              >
                <RiInstagramFill />
                <p>@l.faraon_arts</p>
              </Link>
              <a href="mailto:janleonardfaraon@gmail.com" className="contact">
                <SiGmail />
                <p>janleonardfaraon@gmail.com</p>
              </a>
              <Link to={""} className="contact">
                <BsFillTelephoneFill />
                <p>+63 955 892 3079</p>
              </Link>
            </div>
          </div>
          <div className="contact-hero"></div>
        </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Contact;
