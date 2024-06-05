// src/Team/Team.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Style.module.css";
import ramzi from "./ramzi.jpg";
import title from "../title.svg";
import mouh from "./mouh.png";
import samy from "./samy.png"
import moundhir from "./moundhir.jpg";
import anis from "./anis.jpg"
import nassim from "./nassim.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Team = () => {
  const teamMembers = [
    {
      name: "Ramzi Lazouni",
      image: ramzi,
      position: "Blockchain and Web3 Specialist",
      linkedin: "https://www.linkedin.com/in/samy-benbahmed-36465616b/",
    },
    {
      name: "Samy Benbahmed",
      image: samy,
      position: "Chief Operation Officer",
      linkedin: "https://www.linkedin.com/in/ramzi-lazouni-37b088177/",
    },
    {
      name: "Mohamed Mbarek Azzi",
      image: mouh,
      position: "Chief Business Development Officer",
      linkedin: "https://www.linkedin.com/in/mohamed-mbarek-azzi-03a85bab/",
    },
    {
      name: "Anis Hamidi",
      image: anis,
      position: "Content Manger",
      linkedin: "https://www.linkedin.com/in/anis-hamidi-62783b263/",
    },
    {
      name: "Moundhir Bachene",
      image: moundhir,
      position: "Blockchain & Data Analyst",
      linkedin: "https://www.linkedin.com/in/moundhir-bachene/",
    },
    {
      name: "Nassim Tebbani",
      image: nassim,
      position: "Senior Designer",
      linkedin: "https://www.linkedin.com/in/nassim-tebbani/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Team" className={classes.big_container}>
      <img src={title} className={classes.Artizan} />

      <div className={classes.carousel_container}>
        <Slider {...settings}>
          {teamMembers.map((person, index) => (
            <div className={classes.container} key={index}>
              <div className={classes.image_container}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={classes.image}
                />
                <div className={classes.overlay}>
                  <span className={classes.title}>{person.name}</span>
                  <br />
                  <p>{person.position}</p>
                  <br />
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkedin_icon}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Team;
