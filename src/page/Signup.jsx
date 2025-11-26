// import React, { useState } from "react";

// export default function Signup({ onSignup }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function submit(e) {
//     e.preventDefault();
//     if (!name || !email) return alert("Fill all fields");
//     onSignup({ name, email });
//   }

//   return (
//     <div style={{maxWidth:520,margin:"40px auto",background:"white",padding:20,borderRadius:12,boxShadow:"var(--card-shadow)"}}>
//       <h2>Create account</h2>
//       <form onSubmit={submit} style={{display:"grid",gap:12}}>
//         <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
//         <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
//         <button style={{background:"var(--green)",color:"#fff",padding:10,borderRadius:8}}>Sign up</button>
//       </form>
//     </div>
//   );
// }




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

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return alert("All fields are required!");
    }

    // 🔥 Save in localStorage
    localStorage.setItem("user", JSON.stringify(signupInfo));

    alert("Signup successful!");
    navigate("/login");
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
