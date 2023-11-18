import React, { useState } from "react";
import { Link } from "react-router-dom";
import LinkedInLogo from "../../images/linkedin-logo.png";
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const isFormValid = validateForm();

    if (isFormValid) {
      // Add logic to handle form submission (e.g., send data to a server)
      console.log("Form submitted:", formData);
      // You can add your logic here to send the form data to a server or perform any other action
    }
  };

  const validateForm = () => {
    // Validate form fields
    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isMessageValid = formData.message.trim() !== "";

    // Set touched for all fields
    setTouchedFields({
      name: true,
      email: true,
      message: true,
    });

    // Return true if all fields are valid
    return isNameValid && isEmailValid && isMessageValid;
  };

  return (
    <div>
      <Navigation /> {/* Include Navigation here */}
      <h2>
        Contact
        <a href="tel:+19048609241">
          <span className="emojis">📱</span>
        </a>
        <a href="mailto:cicconeworldwide@gmail.com">
          <span className="emojis">📨</span>
        </a>
        <a
          href="https://www.linkedin.com/in/anthony-ciccone-9a0495178"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="LinkedInLogo"
            className="emojis"
            src={LinkedInLogo}
            alt="Linkedin Logo"
          />
        </a>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* ... rest of your form code */}
      </form>
      <p><Link to="/">Return to homepage</Link></p>
      <Footer />
    </div>
  );
};

export default Contact;
