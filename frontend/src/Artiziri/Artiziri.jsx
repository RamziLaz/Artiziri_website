import React from "react";
import hands from "../Groupe76.png";
import styles from "./style.module.css";

const features = [
  {
    title: "Digital Art Renting and Lending",
    description:
      "The unique feature to rent or lend your art collection provides flexibility and a new way to enjoy digital art.",
  },
  {
    title: "Hardware for Digital Art Display",
    description:
      "Offering specialized hardware with integrated software for displaying digital art, enhancing the physical experience of owning digital artwork.",
  },
  {
    title: "Monetising Classical Art pieces via digital technology",
    description:
      "For the custodians of classical art pieces, Artiziri provides opportunities to monetise these collectibles by making them shareable digitally.",
  },
  {
    title: "Authenticity and Provenance Tracking",
    description:
      "Utilization of blockchain technology to ensure and track the authenticity and provenance of each piece of art.",
  },
  {
    title: "Curation as a service",
    description:
      "Art curation services provided for each artist on the platform as well as for the knowledge of the buyer.",
  },
];

const Artiziri = () => {
  return (
    <section  className={styles.artiziriFeatures}>
      <div className={styles.container}>
        <div className={styles.title}>
          {/* <h2>
            What makes <span className={styles.brand}>artiziri</span> stand out
            from other art marketplaces?
          </h2> */}
          <img src={hands} alt="Hands" className={styles.handsImage} />
        </div>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h3>{feature.title}</h3>
              <p className={styles.line}> &nbsp;</p>
              <p>{feature.description}</p>
            </div>
          ))}
          
        </div>
        <br />      
      </div>
    </section>
  );
};

export default Artiziri;
