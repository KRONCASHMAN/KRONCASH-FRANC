import React from "react";
import ContactPage from "./home_data/ContactPage";

// loading assets
import "./Contact.scss";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="main-background">
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
