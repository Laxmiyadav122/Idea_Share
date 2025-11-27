import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Explore from "./page/Explore";
import Dashboard from "./page/Dashboard";
import AddEditIdea from "./page/AddEditIdea";
import About from "./page/About";
import Contact from "./page/Contact";
import Profile from "./page/Profile";
import EditProfile from "./page/EditProfile";
import Login from "./page/Login";
import Signup from "./page/Signup";

export default function App() {
  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([]);

  async function loadIdeas() {
    const res = await fetch("http://localhost:5000/api/ideas");
    const data = await res.json();
    setIdeas(data);
  }

  useEffect(() => {
    loadIdeas();
  }, []);

  async function handleSubmit(idea) {
    if (idea.id) {
      await fetch(`http://localhost:5000/api/ideas/${idea.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idea),
      });
    } else {
      await fetch("http://localhost:5000/api/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idea),
      });
    }

    await loadIdeas();
    navigate("/explore");
  }

  async function handleDelete(id) {
    await fetch(`http://localhost:5000/api/ideas/${id}`, {
      method: "DELETE",
    });

    loadIdeas();
  }

  async function handleLike(id) {
    await fetch(`http://localhost:5000/api/ideas/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    loadIdeas();
  }

  async function handleComment(id, msg) {
    await fetch(`http://localhost:5000/api/ideas/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: msg }),
    });

    loadIdeas();
  }

  const [user, setUser] = useState({
    name: "Laxmi Yadav",
    email: "laxmi@example.com",
    location: "Jashpur, India",
    role: "Student Developer",
    bio: "Passionate Web Developer • React • JavaScript",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DQ-tp12zlDGEUfulC2NNYwJ7vvskGXip6w&s",
  });

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/explore"
          element={
            <Explore
              ideas={ideas}
              onLike={handleLike}
              onDelete={handleDelete}
              onComment={handleComment}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              ideas={ideas}
              onDelete={handleDelete}
              onLike={handleLike}
              onComment={handleComment}
              user={{ name: "Laxmi" }}
            />
          }
        />

        <Route
          path="/add"
          element={<AddEditIdea onSubmit={handleSubmit} ideas={ideas} />}
        />

        <Route
          path="/edit/:id"
          element={<AddEditIdea onSubmit={handleSubmit} ideas={ideas} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Profile user={user} />} />
        <Route
          path="/edit-profile"
          element={<EditProfile user={user} onSave={setUser} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

