import React from "react";
import classes from "./style.module.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className={classes.contact_form_container}>
      <br />
      <h2 className={classes.contact_title}>Contact</h2>
      <br />
      <br />
      <div className={classes.contact_form}>
        <input
          type="text"
          placeholder="Name"
          className={classes.contact_input}
        />
        <input
          type="email"
          placeholder="Email"
          className={classes.contact_input}
        />
        <input
          type="text"
          placeholder="Subject"
          className={classes.contact_input}
        />
        <textarea
          placeholder="Message"
          className={classes.contact_textarea}
        ></textarea>
        <br />
        <button type="submit" className={classes.contact_button}>
          Submit
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
