// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import "./Home.css";

// export default function Home() {
//   return (
//     <>
//       {/* <Navbar /> */}

//       <div className="hero">
//         <div className="left">
//           <h1>Turn Your Ideas Into Reality</h1>
//           <p>Share, Learn and Build Together</p>
//           <button className="start-btn">Get Started</button>
//         </div>

//         <div className="right">
//           <img src="https://media.istockphoto.com/id/655108926/photo/business-people-group-works-at-a-table-table.jpg?s=612x612&w=0&k=20&c=QuklwouGDa7JuwXC9_jvrmRYmIz7DcTrvL_1lRQXSgc=" alt="Idea Share"/>
//         </div>
//         <Link to="/login">
//         <button className="start-btn">Get Started</button>
//         </Link>

//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-left">
          <h1>Turn Your Ideas<br />Into Reality</h1>
          <p>Share, Learn and Build Together</p>

          <Link to="/Navbar">
            <button className="btn-start">Get Started</button>
          </Link>
        </div>

        <div className="hero-right">
          <img src="/Hero.png" alt="team" />
        </div>
      </div>
    </div>
  );
}
