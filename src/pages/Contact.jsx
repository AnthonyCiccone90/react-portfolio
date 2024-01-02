import React, { useState, useRef } from "react";
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import CSS from '../../styles/styles.css';
import emailjs from '@emailjs/browser';

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

  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const form = useRef();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const isFormValid = validateForm();

    if (isFormValid) {
      // Use emailjs for sending email
      try {
        await emailjs.sendForm('service_bfz0z7a', 'template_zoocd2j', form.current, 'FDsarT-abCzA9bGxc');
        setConfirmationMessage("Your email was sent! Thank you for reaching out and I will get back to you soon.");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const validateForm = () => {
    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isMessageValid = formData.message.trim() !== "";

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
      <h2 className="page-titles">
        Contact
      </h2>
      <form className="contact-form"  ref={form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          className="contact-form"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          required
        />
        {touchedFields.name && !formData.name.trim() && (
          <p className="error-message">Name is required</p>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="contact-form"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          required
        />
        {touchedFields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
          <p className="error-message">Invalid email address</p>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          type="message"
          className="contact-form"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          required
        />
        {touchedFields.message && !formData.message.trim() && (
          <p className="error-message">Message is required</p>
        )}<br></br>
        <button id="submitbtn" type="submit">Submit</button>
      </form>
      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
