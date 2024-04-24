import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// load assets
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="container contact-section">
      <div className="sub-section">
        <div className="title">
          <h2>Contact KronCash</h2>
          <span>Contact</span>
        </div>
        <div className="content">
          <p>
            Any question? Reach out to us and we'll get back to you shortly.
          </p>
        </div>
        <div className="contact-icon">
          <a href="https://t.me/KronCash" target="_blank" rel="noreferrer">
            <div className="item">
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faTwitter} />
            </div>
          </a>
          <a href="https://t.me/KronCash" target="_blank" rel="noreferrer">
            <div className="item">
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faTelegram} />
            </div>
          </a>
          <a href="https://t.me/KronCash" target="_blank" rel="noreferrer">
            <div className="item">
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faDiscord} />
            </div>
          </a>
          <a href="https://t.me/KronCash" target="_blank" rel="noreferrer">
            <div className="item">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faInstagram}
              />
            </div>
          </a>
        </div>
        <div className="form-section">
          <form action="/" method="post">
            <div className="form-field">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-field">
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="form-field">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
