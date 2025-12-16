import React from "react";
import { useNavigate } from "react-router-dom";
import "./IdeaCard.css";

export default function IdeaCard({ idea = {}, onLike, onDelete, onComment }) {
  const navigate = useNavigate();
  const id = String(idea.id);

  return (
    <div className="idea-card">
      <div className="idea-header">
        <strong>{idea.author}</strong>
      </div>

      <h3>{idea.title}</h3>
      <p>{idea.description}</p>

      <div className="tags">
        {(idea.tags || []).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {idea.comments && idea.comments.length > 0 && (
        <div className="comment-count">
          💬 {idea.comments.length} comments
        </div>
      )}

      <div className="like-count">❤️ {idea.likes}</div>

      <div className="card-actions">
        <button className="btn btn-like" onClick={() => onLike(id)}>Like</button>

        <button
          className="btn btn-comment"
          onClick={() => {
            const msg = prompt("Add comment:");
            if (msg) onComment(idea.id, msg);
          }}
        >
          Comment
        </button>

        <button
          className="btn btn-edit"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>

        <button
          className="btn btn-delete"
          onClick={() => onDelete(idea.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
