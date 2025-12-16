import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p>If you have any questions or suggestions, feel free to reach out!</p>

      <div className="contact-card">
        <p><strong>Email:</strong> support@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Jashpur Campus, India</p>
      </div>

      <p>We will respond within 24 hours. 😊</p>
    </div>
  );
}
