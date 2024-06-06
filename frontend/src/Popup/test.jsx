import React, { useState } from "react";
import axios from "axios";
import "./test.css";

const Test = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubscribeClick = () => {
    setIsExpanded(true);
  };

  const handleAddMeClick = async () => {
    setErrorMessage("");
    setIsSubscribed(false);
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/api/subscribe`, {
        email,
      });
      console.log(response.data);
      setIsSubscribed(true);
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data : "Error saving email"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`main ${isExpanded ? "expanded" : ""}`}>
      <form id="singular-form" onSubmit={(e) => e.preventDefault()}>
        {!isExpanded && !isSubscribed && (
          <button
            className="shown"
            type="button"
            id="subs"
            onClick={handleSubscribeClick}
          >
            Subscribe
          </button>
        )}
        {isExpanded && !isSubscribed && (
          <div id="email-input" className="shown">
            <input
              type="text"
              placeholder="E-mail"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shown"
              style={{ color: isEmailValid ? "#2bb673" : "red" }}
            />
            <button
              type="button"
              className="addbut1 shown"
              disabled={!isEmailValid || loading}
              onClick={handleAddMeClick}
            >
              {loading ? "Adding..." : "Add Me"}
            </button>
          </div>
        )}
        {isSubscribed && (
          <div id="success" className="shown">
            Congrats!
          </div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Test;
