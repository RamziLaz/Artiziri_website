import React, { useState } from "react";
import classes from "./Popup.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popup = ({ show, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/subscribe', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscription successful");
        onClose();
      } else {
        alert("Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={classes.popupOverlay}>
      <div className={classes.popupContent}>
        <button className={classes.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>Subscribe to Notifications</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" >Email:</label> &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <button type="submit" className={classes.sendButton}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
