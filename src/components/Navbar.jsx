import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Logo from "./Logo";
import { IoMenu, IoClose } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      {/* <nav style={{ top: visible ? '0' : '-100px' }}> */}
      <nav className={isOpen ? "" : visible ? "slide-down" : "slide-up"}>
        <div className="nav-btns">
          <Link
            to="https://www.facebook.com/peter.john.reyes0326/"
            target="_blank"
          >
            <GrFacebookOption />
          </Link>
          <Link to="https://www.instagram.com/peterjohnreyes/" target="_blank">
            <RiInstagramFill />
          </Link>
          <a href="mailto:janleonardfaraon@gmail.com">
            <SiGmail />
          </a>
        </div>
        <Link to="/">
          <Logo />
        </Link>

        <div className="menu" onClick={handleIsOpen}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
        <div className="nav-btns">
          <Link to="/gallery">Art Gallery</Link>
          <Link to="/artist">Artist</Link>
          <Link to="/contact" className="nav-contact">
            Contact
          </Link>
        </div>
      </nav>

      <div className={`burger-menu ${isOpen ? "open" : "close"}`}>
        <Link to="/gallery">Art Gallery</Link>
        <Link to="/artist">Artist</Link>
        <Link to="/contact" className="nav-contact">
          Contact
        </Link>
        <div className="burger-menu-btns">
          <Link
            to="https://www.facebook.com/peter.john.reyes0326/"
            target="_blank"
          >
            <GrFacebookOption />
          </Link>
          <Link to="https://www.instagram.com/peterjohnreyes/" target="_blank">
            <RiInstagramFill />
          </Link>
          <a href="mailto:janleonardfaraon@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
