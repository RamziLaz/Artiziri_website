import React from "react";
import Header from "../Header/Header";
import Header2 from "../Header2/Header2";
import About from "../About/About";
import Features from "../Features/Features";
import Artiziri from "../Artiziri/Artiziri";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

import "./style.css"
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Helmet>
        <title>Artiziri</title>
        <link rel="icon" type="image/png" href="." />
      </Helmet>
      <Header2 />
      <About />
      <Features />
      <Artiziri />
      <Team />
      <Footer />
      <div className="scrollToTop" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} className="scrollIcon" />
      </div>
    </div>
  );
}
