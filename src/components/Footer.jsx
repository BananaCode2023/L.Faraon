import React from "react";
import "../css/footer.css";
import Titles from "./Titles";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-heading">
        <Titles text="LIVE WITH YOUR PASSION IT IS THE FUEL THAT IGNITES YOUR SOUL" />
        <div className="footer-btns">
          <Link to="https://www.facebook.com/Lfaraon14" target="_blank">
            <FaFacebookF />
          </Link>
          <Link to="https://www.instagram.com/l.faraon_arts/" target="_blank">
            <RiInstagramFill />
          </Link>
          <a href="mailto:janleonardfaraon@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <p>Copyright @2023 L.Faraon</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Art Gallery</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
