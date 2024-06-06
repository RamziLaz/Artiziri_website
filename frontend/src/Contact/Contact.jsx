import React, { useState } from "react";
import classes from "./style.module.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://artiziri.io/api/contact", formData);
      // Optionally, clear the form fields after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className={classes.contact_form_container}>
      <br />
      <h2 className={classes.contact_title}>Contact</h2>
      <br />
      <br />
      <div className={classes.contact_form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={classes.contact_input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={classes.contact_input}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={classes.contact_input}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={classes.contact_textarea}
          ></textarea>
          <br />
          <button type="submit" className={classes.contact_button}>
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Contact;
