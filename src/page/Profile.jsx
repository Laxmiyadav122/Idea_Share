import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile({ user }) {
  const navigate = useNavigate();
  if (!user) return null; 
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.photo} alt="User" className="profile-img" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-bio">{user.bio}</p>
        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
        <button className="edit-btn" onClick={() => navigate("/edit-profile")}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}
