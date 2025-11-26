// import React, { useState } from "react";
// import "./IdeaCard.css";
// import { Link } from "react-router-dom";

// export default function IdeaCard({ idea, onDelete, onLike, onAddComment, user }) {
//     if (!idea) return null;

//   const [comment, setComment] = useState("");

//   function submitComment(e) {
//     e.preventDefault();
//     if (!comment.trim()) return;
//     onAddComment(idea.id, { author: user?.name || "Guest", text: comment });
//     setComment("");
//   }

//   return (
//     <div className="idea-card">
//       <div className="idea-header">
//         <div>
//           <strong>{idea.author}</strong>
//           <div className="muted small">{idea.tags?.join(", ")}</div>
//         </div>
//         <div className="idea-actions">
//           <button onClick={() => onLike(idea.id)}>👍 {idea.likes}</button>
//           <Link to={`/idea/edit/${idea.id}`} className="small-btn">Edit</Link>
//           <button onClick={() => onDelete(idea.id)} className="small-btn danger">Delete</button>
//         </div>
//       </div>

//       <h3>{idea.title}</h3>
//       <p>{idea.description}</p>

//       <div className="comments">
//         {idea.comments?.map((c, idx) => <div key={idx} className="comment"><strong>{c.author}:</strong> {c.text}</div>)}
//       </div>

//       <form onSubmit={submitComment} className="comment-form">
//         <input placeholder="Write a comment..." value={comment} onChange={e=>setComment(e.target.value)} />
//         <button type="submit">Comment</button>
//       </form>
//     </div>
//   );
// }





import React, { useState } from "react";
import "./IdeaCard.css";
import { Link } from "react-router-dom";

export default function IdeaCard({ idea, onDelete, onLike, onAddComment, user }) {

  // ⭐ Prevents crash if idea is undefined
  if (!idea) return null;

  // ⭐ Prevents crash if author is missing
  const author = idea.author || "Unknown";

  // ⭐ Prevents crash if likes missing
  const likes = idea.likes || 0;

  const comments = idea.comments || [];

  const [comment, setComment] = useState("");

  function submitComment(e) {
    e.preventDefault();
    if (!comment.trim()) return;

    onAddComment(idea.id, {
      author: user?.name || "Guest",
      text: comment
    });

    setComment("");
  }

  return (
    <div className="idea-card">
      <div className="idea-header">
        <div>
          <strong>{author}</strong>
          <div className="muted small">
            {idea.tags?.length ? idea.tags.join(", ") : "No tags"}
          </div>
        </div>

        <div className="idea-actions">
          <button onClick={() => onLike(idea.id)}>👍 {likes}</button>
          <Link to={`/idea/edit/${idea.id}`} className="small-btn">Edit</Link>
          <button onClick={() => onDelete(idea.id)} className="small-btn danger">Delete</button>
        </div>
      </div>

      <h3>{idea.title || "Untitled Idea"}</h3>
      <p>{idea.description || "No description provided."}</p>

      <div className="comments">
        {comments.map((c, idx) => (
          <div key={idx} className="comment">
            <strong>{c.author}:</strong> {c.text}
          </div>
        ))}
      </div>

      <form onSubmit={submitComment} className="comment-form">
        <input
          placeholder="Write a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
