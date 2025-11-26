import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
export default function Sidebar({ onSelect }) {
  return (
    <aside style={{
      background: 'var(--light-blue)',
      padding: 16,
      borderRadius: 12,
      height: 'fit-content'
    }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

        <button
          onClick={() => onSelect("all")}
          className="sidebar-btn"
        >
          All Ideas
        </button>

        <button
          onClick={() => onSelect("mine")}
          className="sidebar-btn"
        >
          My Ideas
        </button>

        <Link to="/add" className="sidebar-btn">
          Add New
        </Link>

        <Link to="/auth" className="sidebar-btn">
          Profile
        </Link>

      </nav>
    </aside>
  );
}
