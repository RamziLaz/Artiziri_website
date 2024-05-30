import React from "react";
import classes from "./style2.module.css"; // Assuming your styles are defined here
import landscapeImage from "../test.png"; // Import landscape image
import artiziriLogo from "../artiziri.png"; // Import Artiziri logo

function About() {
  return (
    <div id ="About" className={classes.container}>
      <div className={classes.image_section}>
        <img src={landscapeImage} alt="Descriptive Alt Text" />
        <br />
        <br />
        <br />
      </div>
      <div className={classes.artiziri_text}>
        <img src={artiziriLogo} alt="Artiziri Logo" className={classes.logo} />
        <p>
          Artiziri is more than just a Digital Art marketplace, it is
          Art-as-a-service.
        </p>
        <p>
          Not only the Artiziri marketplace lets you buy and sell art and
          digital collectibles, but also allows you to rent and add them to your
          collection or display them on your preferred digital display devices.
        </p>
        <br />
      </div>
      <div className={classes.sastanaqqam_text}>
       
        <span className={classes.title_sastanaqqam}>Sastanaqqam</span>
        <p className={classes.sastanaqqam_p}>
          Sastanaqqam brings together decentralization, digitization, and
          entertainment in a Web 3.0 ecosystem. Through Artiziri, Sastanaqqam
          aims to revolutionize the traditional art market through offering a
          decentralized platform that empowers artists and offers a seamless yet
          innovative experience for art lovers and collectors.
        </p>
      </div>
      <br />

    </div>
  );
}

export default About;
