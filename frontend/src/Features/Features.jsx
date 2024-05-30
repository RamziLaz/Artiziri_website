import React from "react";
import classes from "./style.module.css"; // Make sure to import your stylesheet
import image from "../art.jpg";
import image2 from "../art2.jpg";
import image3 from "../art3.jpg";
import image4 from "../art4.jpg";


const features = [
  {
    imgSrc: image,
    title: "Buy",
    description: `If you are a collector of digital art or want to create a digital
    collection from classical to contemporary artists, Artiziri offers
    the most diverse collection of digital art across different genres
    and moods for you to buy and collect`,
  },
  {
    imgSrc: image2,
    title: "Sell",
    description: `Are you an artist, reseller or owner of art that you want to reach
    its next owner? Find the right offers for your art right here on
    Artiziri through our secure digital art sales platform.`,
  },
  {
    imgSrc: image3,
    title: "Rent/Lend",
    description: `Not too eager to commit to sell or buy Digital Art? Aritiziri
    offers the unique way of renting or lending out digital art
    through our avant garde plagiarism-proof lending protocol.`,
  },
  {
    imgSrc: image4,
    title: "Display",
    description: `Want to upgrade the look of your venue with the most astounding
    displays of art? Artiziri also offers special Display Screen
    Frames to go with the theme of your venue.`,
  },
  
];

function Features() {
  return (
    <div id="Features" className={classes.big_container}>
      <h2>
        Join us on a Journey to Democratise Art for Creators, Collectors and
        Aficionados
      </h2>
      <br />
      <br />

      <div className={classes.images}>
        {features.map((feature, index) => (
          <div className={classes.container} key={index}>
            <img
              src={feature.imgSrc}
              alt={feature.title}
              className={classes.image}
            />
            <div className={classes.overlay}>
              <span className={classes.title}>{feature.title}</span>
              <br />
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
