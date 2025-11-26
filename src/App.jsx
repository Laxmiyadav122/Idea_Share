// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
// import Navbar from "../../SupportTeam/src/components/Navbar";
// // import Dashboard from "../../SupportTeam/src/page/Dashboar";
// // import Home from "../../SupportTeam/src/page/Home";
// // import AddIdea from "../../SupportTeam/src/components/IdeaCard";
// // import EditIdea from "../../SupportTeam/src/page/AddIdea";
// // import Login from "../../SupportTeam/src/page/Login";
// // import Signup from "../../SupportTeam/src/page/Signup";
// function App() {
//   return (
//     <>
//      <BrowserRouter>
//      <Routes>
//        <Route path="/" element={<Navbar/>}/>
//        {/* <Route path="/home" element={<Home />} /> */}
//         {/* <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add" element={<AddIdea />} />
//         <Route path="/edit/:id" element={<EditIdea />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} /> */}
//      </Routes>
//      </BrowserRouter> 
//     </>
//   )
// }

// export default App


// import React from 'react'
// import IdeaCard from './components/IdeaCard'
// import Dashboard from './page/Dashboar'
// import AddEditIdea from './page/AddEditIdea'
// import Login from './page/Login'
// import Signup from './page/Signup'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import Home from './page/Home'
// import Sidebar from './components/Sidebar'


// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//       <Sidebar/>
//       <IdeaCard/>
//       <Dashboard/>
//       <AddEditIdea/>
//       <Login/>
//       <Signup/>
//     </div>
//   )
// }

// export default App




// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import ProtectedRoute from "./ProtectedRoute";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./page/Home";
// import Dashboard from "./page/Dashboar";
// import AddEditIdea from "./page/AddEditIdea";
// import Login from "./page/Login";
// import Signup from "./page/Signup";

// function App() {
  
//   const [user, setUser] = useState(null);
//   const [ideas, setIdeas] = useState([]);
  
//   // Login
//   function handleLogin(u) {
//     setUser(u);
//   }

//   // Signup
//   function handleSignup(u) {
//     setUser(u);
//   }

//   // Add or Edit Idea
//   function handleSubmitIdea(idea) {
//     if (idea.id) {
//       setIdeas(prev =>
//         prev.map(i => (i.id === idea.id ? idea : i))
//       );
//     } else {
//       setIdeas(prev => [
//         ...prev,
//         { ...idea, id: Date.now(), author: user?.name }
//       ]);
//     }
//   }

//   // Delete
//   function handleDelete(id) {
//     setIdeas(prev => prev.filter(i => i.id !== id));
//   }

//   // Like
//   function handleLike(id) {
//     setIdeas(prev =>
//       prev.map(i =>
//         i.id === id ? { ...i, likes: (i.likes || 0) + 1 } : i
//       )
//     );
//   }

//   // Comment
//   function handleComment(id, comment) {
//     setIdeas(prev =>
//       prev.map(i =>
//         i.id === id
//           ? { ...i, comments: [...(i.comments || []), comment] }
//           : i
//       )
//     );
//   }

//   return (
//     // <div className="app-layout">
//     //   <Navbar user={user} />
//     //    <div className="content">
//     //   <Routes>
//     //     <Route path="/" element={<Home />} />

//     //     <Route
//     //       path="/dashboard"
//     //       element={
//     //         user ? (
//     //           <Dashboard
//     //             ideas={ideas}
//     //             user={user}
//     //             onDelete={handleDelete}
//     //             onLike={handleLike}
//     //             onComment={handleComment}
//     //           />
//     //         ) : (
//     //           <Login onLogin={handleLogin} />
//     //         )
//     //       }
//     //     />

//     //     <Route
//     //       path="/add"
//     //       element={
//     //         user ? (
//     //           <AddEditIdea ideas={ideas} onSubmit={handleSubmitIdea} />
//     //         ) : (
//     //           <Login onLogin={handleLogin} />
//     //         )
//     //       }
//     //     />

//     //     <Route path="/login" element={<Login onLogin={handleLogin} />} />
//     //     <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
//     //   </Routes>
//     //   </div>

//     //   <Footer />
//     // </div>


//     <Routes>
//     {/* Default → Signup */}
//     <Route path="/" element={<Signup />} />

//     <Route path="/signup" element={<Signup />} />
//     <Route path="/login" element={<Login />} />

//     {/* Protected Pages */}
//     <Route 
//       path="/home" 
//       element={
//         <ProtectedRoute>
//           <Home />
//         </ProtectedRoute>
//       } 
//     />

//     <Route 
//       path="/dashboard" 
//       element={
//         <ProtectedRoute>
//           <Dashboard />
//         </ProtectedRoute>
//       } 
//     />
//   </Routes>
//   );
// }

// export default App;




// // src/App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./page/Home";
// import Explore from "./page/Explore";
// import Dashboard from "./page/Dashboard";
// import AddEditIdea from "./page/AddEditIdea";
// import Login from "./page/Login";
// import Signup from "./page/Signup";

// export default function App() {
//   return (
//     <div className="app-root">
//       <Navbar />
//       <main style={{ minHeight: "calc(100vh - 160px)" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/add" element={<AddEditIdea />} />
//           <Route path="/edit/:id" element={<AddEditIdea />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* Add fallback */}
//           <Route path="*" element={<div style={{ padding: 30 }}>Page not found</div>} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }



// src/App.jsx
import React, { useState } from "react";
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

  const [ideas, setIdeas] = useState([
    {
      id: 1,
      author: "Laxmi",
      title: "Idea Share App",
      description: "A platform to share ideas",
      tags: ["react"],
      likes: 0,
      comments: []
    }
  ]);


const [user, setUser] = useState({
  name: "Laxmi Yadav",
  email: "laxmi@example.com",
  location: "Jashpur, India",
  role: "Student Developer",
  bio: "Passionate Web Developer • React • JavaScript",
  photo: "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142845/anime-cool-profile-pictures-21-780x1024.webp"
});


  // ADD or UPDATE
  function handleSubmit(idea) {
    // Edit mode
    if (idea.id) {
      setIdeas(prev =>
        prev.map(i => (i.id === idea.id ? { ...i, ...idea } : i))
      );
    } else {
      // Add mode
      setIdeas(prev => [
        ...prev,
        {
          id: Date.now(),
          author: "Laxmi",
          likes: 0,
          comments: [],
          ...idea
        }
      ]);
    }

    navigate("/explore");
  }

  // DELETE
  function handleDelete(id) {
    setIdeas(prev => prev.filter(i => i.id !== id));
  }

  // LIKE
  function handleLike(id) {
    setIdeas(prev =>
      prev.map(i =>
        i.id === id ? { ...i, likes: i.likes + 1 } : i
      )
    );
  }

  // COMMENT
  function handleComment(id, msg) {
    setIdeas(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, comments: [...i.comments, msg] }
          : i
      )
    );
  }

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
              <Route path="/auth" element={<Profile user={user}/>}/>
              <Route 
              path="/edit-profile" 
              element={<EditProfile user={user} onSave={(updated)=>{
              setUser(updated);
              }} />} />
      </Routes>
      <Footer />
    </div>
  );
}




// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./page/Home";
// import Explore from "./page/Explore";
// import Dashboard from "./page/Dashboard";
// import AddEditIdea from "./page/AddEditIdea";
// import About from "./page/About";
// import Contact from "./page/Contact";
// import Profile from "./page/Profile";
// import EditProfile from "./page/EditProfile";

// export default function App() {
//   const navigate = useNavigate();

//   const API = "http://localhost:5000/api/ideas";

//   const [ideas, setIdeas] = useState([]);
  
//   useEffect(() => {
//     fetch(API)
//       .then(res => res.json())
//       .then(data => setIdeas(data));
//   }, []);
  
//   async function handleAddEdit(idea) {
//     if (idea.id) {
//       // UPDATE
//       await fetch(`${API}/${idea.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(idea),
//       });
//     } else {
//       // CREATE
//       await fetch(API, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(idea),
//       });
//     }
  
//     // RELOAD LIST
//     fetch(API)
//       .then(res => res.json())
//       .then(data => setIdeas(data));
//   }
  
//   async function handleDelete(id) {
//     await fetch(`${API}/${id}`, { method: "DELETE" });
//     fetch(API)
//       .then(res => res.json())
//       .then(data => setIdeas(data));
//   }
  
//   async function handleLike(id) {
//     await fetch(`${API}/${id}/like`, { method: "POST" });
//     fetch(API)
//       .then(res => res.json())
//       .then(data => setIdeas(data));
//   }
  
//   async function handleComment(id, text) {
//     await fetch(`${API}/${id}/comment`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });
  
//     fetch(API)
//       .then(res => res.json())
//       .then(data => setIdeas(data));
//   }
  
//   const [user, setUser] = useState({
//     name: "Laxmi Yadav",
//     email: "laxmi@example.com",
//     location: "Jashpur, India",
//     role: "Student Developer",
//     bio: "Passionate Web Developer • React • JavaScript",
//     photo:
//       "https://atd-bloges.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142845/anime-cool-profile-pictures-21-780x1024.webp",
//   });

//   // ⭐ Fetch ideas from backend
//   async function fetchIdeas() {
//     try {
//       const res = await fetch("http://localhost:5000/api/ideas");
//       const data = await res.json();
//       setIdeas(data);
//     } catch (err) {
//       console.log("Error fetching ideas:", err);
//     }
//   }

//   useEffect(() => {
//     fetchIdeas();
//   }, []);

//   // ADD or UPDATE
//   async function handleSubmit(idea) {
//     if (idea.id) {
//       // UPDATE
//       await fetch(`http://localhost:5000/api/ideas/${idea.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(idea),
//       });
//     } else {
//       // CREATE
//       await fetch("http://localhost:5000/api/ideas/post", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(idea),
//       });
//     }

//     fetchIdeas();
//     navigate("/explore");
//   }

//   // // DELETE
//   // async function handleDelete(id) {
//   //   await fetch(`http://localhost:5000/api/ideas/${id}`, {
//   //     method: "DELETE",
//   //   });

//   //   fetchIdeas();
//   // }

//   // LIKE (frontend only for now)
//   // function handleLike(id) {
//   //   setIdeas((prev) =>
//   //     prev.map((i) => (i.id === id ? { ...i, likes: i.likes + 1 } : i))
//   //   );
//   // }

//   // // COMMENT (frontend only)
//   // function handleComment(id, msg) {
//   //   setIdeas((prev) =>
//   //     prev.map((i) =>
//   //       i.id === id ? { ...i, comments: [...i.comments, msg] } : i
//   //     )
//   //   );
//   // }

//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/explore"
//           element={
//             <Explore
//               ideas={ideas}
//               onLike={handleLike}
//               onDelete={handleDelete}
//               onComment={handleComment}
//             />
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <Dashboard
//               ideas={ideas}
//               onDelete={handleDelete}
//               onLike={handleLike}
//               onComment={handleComment}
//               user={{ name: "Laxmi" }}
//             />
//           }
//         />

//         <Route
//           path="/add"
//           element={<AddEditIdea onSubmit={handleSubmit} ideas={ideas} />}
//         />

//         <Route
//           path="/edit/:id"
//           element={<AddEditIdea onSubmit={handleSubmit} ideas={ideas} />}
//         />

//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />

//         <Route path="/auth" element={<Profile user={user} />} />

//         <Route
//           path="/edit-profile"
//           element={
//             <EditProfile
//               user={user}
//               onSave={(updated) => {
//                 setUser(updated);
//               }}
//             />
//           }
//         />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }
