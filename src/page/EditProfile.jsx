import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function EditProfile({ user = {}, onSave }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    role: "",
    bio: "",
    photo: ""
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        location: user.location || "",
        role: user.role || "",
        bio: user.bio || "",
        photo: user.photo || "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142845/anime-cool-profile-pictures-21-780x1024.webp"
      });
    }
  }, [user]);

  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm(prev => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Saving profile:", form);
    if (typeof onSave !== "function") {
      console.error("onSave prop missing! Make sure App.jsx passes setUser as onSave.");
      return;
    }
    onSave(form);         
    navigate("/auth");    
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Edit Profile</h2>

        <img src={form.photo} className="profile-img" alt="user" />

        <div style={{ margin: "12px 0" }}>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <input
            type="text"
            value={form.name}
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            value={form.email}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            value={form.location}
            placeholder="Location"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <input
            type="text"
            value={form.role}
            placeholder="Role"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
          <textarea
            value={form.bio}
            placeholder="Bio"
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />

          <button className="edit-btn" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
