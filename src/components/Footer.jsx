import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="footer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        background: "#0f172a",
        color: "white"}}>
        <div className="footer-left">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
  
        <div className="footer-right">
        <a 
          href="https://github.com/Laxmiyadav122"   
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          </a>

          <a 
          href="https://www.linkedin.com/in/laxmi-yadav-4154b0300/"   
          target="_blank" 
          rel="noopener noreferrer"
        >
      <i class="fa-brands fa-linkedin-in"></i>     
     </a>
          <a 
          href="https://www.facebook.com/"   
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
          </a>
        </div>
      </footer>
    );
  }
  
