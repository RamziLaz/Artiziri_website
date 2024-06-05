// src/Footer/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../artiziri2.png";
import classes from "./Style.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Artiziri Logo" className={classes.logo} />
        </div>
        <div className={classes.row}>
          <div className={classes.column}>
            <h4>About Us</h4>
            <p>
              At Artiziri, we are dedicated to delivering high-quality digital
              solutions that drive innovation and efficiency.
            </p>
          </div>
          <div className={classes.column}>
            <h4>Contact Us</h4>
            <p>Email: info@artiziri.io</p>
            <p>Phone: +97148347324</p>
          </div>
          <div className={classes.column}>
            <h4>Follow Us</h4>
            <a
              href="https://www.instagram.com/artiziriii"
              className={classes.icon}
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://x.com/artiziri"
              className={classes.icon}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.tiktok.com/@artizirii"
              className={classes.icon}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
