import React from "react";
import { useNavigate } from "react-router-dom";

export default function IdeaCard({ idea = {}, onLike, onDelete, onComment }) {
  const navigate = useNavigate();
  const id = String(idea.id);
  return (
    <div className="idea-card">
      <div className="idea-header">
        <strong>{idea.author}</strong>
      </div> <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <div className="tags"> {(idea.tags || []).map(t => (<span key={t} className="tag">{t}</span>))}
      </div> {idea.comments && idea.comments.length > 0 && (
        <div style={{ marginTop: 10, fontSize: 14, opacity: 0.8 }}>
          💬 {idea.comments.length} comments
        </div>
      )}
      <div style={{ marginTop: 10 }}> ❤️ {idea.likes} </div>
      <div className="card-actions">
        <button className="btn" onClick={() => onLike(id)}>Like</button>
        <button className="btn btn-ghost" onClick={() => { const msg = prompt("Add comment:"); if (msg) onComment(idea.id, msg); }}>
          Comment
        </button>
        <button className="btn btn-warning" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </button>
        <button onClick={() => {
          console.log("IDEA COMING →", idea);
          console.log("DELETING →", idea.id); onDelete(idea.id);
        }} >
          Delete
        </button>
      </div> </div>
  );
}