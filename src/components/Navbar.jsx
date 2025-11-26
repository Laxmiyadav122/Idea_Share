import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const onAddClick = () => navigate("/add");

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">IdeaShare</Link>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/explore">Explore</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </ul>

      <div className="nav-right">
        <button className="btn btn-green" onClick={onAddClick}>Add Idea</button>
        <NavLink to="/login" className="btn btn-outline">Login</NavLink>
      </div>
    </nav>
  );
}
