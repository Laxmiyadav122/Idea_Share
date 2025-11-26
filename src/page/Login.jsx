// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   function submit(e) {
//     e.preventDefault();
//     if (!email || !name) return alert("Fill name and email");
//     onLogin({ name, email });
//   }

//   return (
//     <div style={{display:"flex",gap:20,alignItems:"center",justifyContent:"center",padding:20}}>
//       <div style={{flex:1,maxWidth:420}}>
//         <div style={{background:"linear-gradient(180deg,#1E3A8A,#2563EB)",color:"white",padding:28,borderRadius:12}}>
//           <h2>Welcome back</h2>
//           <p>Every big idea starts with a small step.</p>
//         </div>
//       </div>
//       <div style={{flex:1,maxWidth:420}}>
//         <form onSubmit={submit} style={{background:"white",padding:20,borderRadius:12,boxShadow:"var(--card-shadow)"}}>
//           <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
//           <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
//           <button style={{background:"var(--navy)",color:"#fff",padding:10,borderRadius:8}}>Login</button>
//           <div style={{marginTop:8}}>No account? <Link to="/signup">Sign up</Link></div>
//         </form>
//       </div>
//     </div>
//   );
// }


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

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return alert("Email and password are required");
    }

    // 🔥 Get user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      return alert("No account found! Please signup first.");
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate("/"); // redirect
    } else {
      alert("Invalid email or password");
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
