import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

const handleSignup = async (e) => {
  e.preventDefault();

  const response = await fetch("https://idea-share-backend.vercel.app/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupInfo),
  });

  const data = await response.json();

  if (data.msg === "User already exists") {
    alert("User already exists");
  } else {
    alert("Signup successful!");
    navigate("/login");
  }
};

  return (
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={handleSignup}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={signupInfo.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            value={signupInfo.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={signupInfo.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Signup</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
