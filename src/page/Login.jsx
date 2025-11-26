
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const { email, password } = loginInfo;
  
    if (!email || !password) {
      return alert("Email and password are required");
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.error) {
        return alert(data.error);
      }
  
      // Save token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
  
      alert("Login successful!");
      navigate("/");
  
    } catch (error) {
      alert("Login failed");
    }
  };
  

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>

        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
