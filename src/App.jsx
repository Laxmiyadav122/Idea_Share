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




import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Dashboard from "./page/Dashboar";
import AddEditIdea from "./page/AddEditIdea";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App() {
  
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);
  
  // Login
  function handleLogin(u) {
    setUser(u);
  }

  // Signup
  function handleSignup(u) {
    setUser(u);
  }

  // Add or Edit Idea
  function handleSubmitIdea(idea) {
    if (idea.id) {
      setIdeas(prev =>
        prev.map(i => (i.id === idea.id ? idea : i))
      );
    } else {
      setIdeas(prev => [
        ...prev,
        { ...idea, id: Date.now(), author: user?.name }
      ]);
    }
  }

  // Delete
  function handleDelete(id) {
    setIdeas(prev => prev.filter(i => i.id !== id));
  }

  // Like
  function handleLike(id) {
    setIdeas(prev =>
      prev.map(i =>
        i.id === id ? { ...i, likes: (i.likes || 0) + 1 } : i
      )
    );
  }

  // Comment
  function handleComment(id, comment) {
    setIdeas(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, comments: [...(i.comments || []), comment] }
          : i
      )
    );
  }

  return (
    // <div className="app-layout">
    //   <Navbar user={user} />
    //    <div className="content">
    //   <Routes>
    //     <Route path="/" element={<Home />} />

    //     <Route
    //       path="/dashboard"
    //       element={
    //         user ? (
    //           <Dashboard
    //             ideas={ideas}
    //             user={user}
    //             onDelete={handleDelete}
    //             onLike={handleLike}
    //             onComment={handleComment}
    //           />
    //         ) : (
    //           <Login onLogin={handleLogin} />
    //         )
    //       }
    //     />

    //     <Route
    //       path="/add"
    //       element={
    //         user ? (
    //           <AddEditIdea ideas={ideas} onSubmit={handleSubmitIdea} />
    //         ) : (
    //           <Login onLogin={handleLogin} />
    //         )
    //       }
    //     />

    //     <Route path="/login" element={<Login onLogin={handleLogin} />} />
    //     <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
    //   </Routes>
    //   </div>

    //   <Footer />
    // </div>


    <Routes>
    {/* Default → Signup */}
    <Route path="/" element={<Signup />} />

    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />

    {/* Protected Pages */}
    <Route 
      path="/home" 
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } 
    />

    <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } 
    />
  </Routes>
  );
}

export default App;
