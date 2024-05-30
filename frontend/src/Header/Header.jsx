import React, { useState, useEffect } from "react";
import classes from "./style.module.css";
import logo from "../artiziri.png"; // Path to your logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/Popup";
import Test from "../Popup/test";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const handlePopupOpen = () => {
      setPopupVisible(true);
    };

    const handlePopupClose = () => {
      setPopupVisible(false);
    };

  return (
    <header className={classes.header}>
      <nav
        className={`${classes.navbar} ${menuOpen ? classes.active : ""} ${
          navbarFixed ? classes.fixed : ""
        }`}
      >
        <div>
          <a href="/">
            <img src={logo} alt="Artiziri Logo" className={classes.logoN} />
          </a>
        </div>
        <ul className={menuOpen ? classes.active : ""}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/join">Join us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <button className={classes.menuToggle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      <div className={classes.logo_container}>
        <img src={logo} alt="Artiziri Logo" className={classes.logo} />
        <br /> <br /> <br />
        <span>Buy - Sell - Rent - Display</span>
        <br />
        <span style={{ color: "", fontWeight: "bold" }}>Digital Art</span>
        <br />
        <br />
        {/* <button className={classes.cta} onClick={handlePopupOpen}>
          Get Notified &nbsp;
          <FontAwesomeIcon icon={faBell} />
        </button> */}

        <Test></Test>
      </div>

      <Popup show={popupVisible} onClose={handlePopupClose} />
    </header>
  );
};

export default Header;
