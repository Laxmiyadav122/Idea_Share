import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-left">
          <h1>Turn Your Ideas<br />Into Reality</h1>
          <p>Share, Learn and Build Together</p>
          <Link to="/explore" className="btn-start">Get Started</Link>
        </div>

        <div className="hero-right">
          <img src="/Hero.png" alt="team" />
        </div>
      </div>
    </div>
  );
}

  