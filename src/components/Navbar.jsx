// import React from 'react'
// import "./Navbar.css"

// function Navbar() {
//   return (
//     <div className='nav'>
//       <nav className='navbar'>
//       <h1 className='logo'>IdeaShare</h1>
//         <ul className='nav-links'>
//           <li><a href="#home" >Home</a></li>
//           <li><a href="#about" >Explore</a></li>
//           <li><a href="#skills">add Idea</a></li>
//           <li><a href="#projects" >Login/Signup</a></li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



// import React from 'react';
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <div className='nav'>
//       <nav className='navbar'>
//         <h1 className='logo'>IdeaShare</h1>

//         <ul className='nav-links'>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/dashboard">Explore</Link></li>
//           <li><Link to="/add">Add Idea</Link></li>
//           <li><Link to="/login">Login/Signup</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;




import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">IdeaShare</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/add">Add Idea</Link></li>
        <li><Link to="/login">Login / Signup</Link></li>
      </ul>
    </nav>
  );
}
