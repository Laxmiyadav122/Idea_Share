import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(){
  return (
    <aside style={{background:'var(--light-blue)',padding:16,borderRadius:12,height:'fit-content'}}>
      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        <Link to="/dashboard">All Ideas</Link>
        <Link to="/dashboard?filter=my">My Ideas</Link>
        <Link to="/add">Add New</Link>
        <Link to="/auth">Profile</Link>
      </nav>
    </aside>
  );
}
