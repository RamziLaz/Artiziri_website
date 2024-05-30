import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import classes from "./style2.module.css";
import logo from "../artiziri.png"; // Path to your logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);

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

  return (
    <nav
      className={`${classes.navbar} ${menuOpen ? classes.active : ""} ${
        navbarFixed ? classes.fixed : ""
      }`}
    >
      <div>
        <RouterLink to="/Home">
          <img src={logo} alt="Artiziri Logo" className={classes.logoN} />
        </RouterLink>
      </div>
      <ul className={menuOpen ? classes.active : ""}>
        <li>
          <RouterLink to="/Home">Home</RouterLink>
        </li>
        <li>
          <ScrollLink to="About" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="Features" smooth={true} duration={500}>
            Features
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/Home">
            <ScrollLink to="Team" smooth={true} duration={500}>
              Team
            </ScrollLink>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact">Contact</RouterLink>
        </li>
      </ul>
      <button className={classes.menuToggle} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Header;
