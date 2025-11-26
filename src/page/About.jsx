import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About IdeaShare</h1>

      <p>
        IdeaShare is a platform created to help people share their ideas,
        collaborate with others, and bring creativity to life.
      </p>

      <p>
        You can explore ideas, post your own ideas, like, comment and interact
        with others. This small platform is built using React, MongoDB, Express
        and Node.
      </p>

      <h2>Our Mission</h2>
      <ul>
        <li>Encourage creativity</li>
        <li>Help people share ideas easily</li>
        <li>Build a supportive and collaborative community</li>
      </ul>
    </div>
  );
}
