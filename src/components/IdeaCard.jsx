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





// import React, { useState } from "react";
// import "./IdeaCard.css";
// import { Link } from "react-router-dom";

// export default function IdeaCard({ idea, onDelete, onLike, onAddComment, user }) {

//   // ⭐ Prevents crash if idea is undefined
//   if (!idea) return null;

//   // ⭐ Prevents crash if author is missing
//   const author = idea.author || "Unknown";

//   // ⭐ Prevents crash if likes missing
//   const likes = idea.likes || 0;

//   const comments = idea.comments || [];

//   const [comment, setComment] = useState("");

//   function submitComment(e) {
//     e.preventDefault();
//     if (!comment.trim()) return;

//     onAddComment(idea.id, {
//       author: user?.name || "Guest",
//       text: comment
//     });

//     setComment("");
//   }

//   return (
//     <div className="idea-card">
//       <div className="idea-header">
//         <div>
//           <strong>{author}</strong>
//           <div className="muted small">
//             {idea.tags?.length ? idea.tags.join(", ") : "No tags"}
//           </div>
//         </div>

//         <div className="idea-actions">
//           <button onClick={() => onLike(idea.id)}>👍 {likes}</button>
//           <Link to={`/idea/edit/${idea.id}`} className="small-btn">Edit</Link>
//           <button onClick={() => onDelete(idea.id)} className="small-btn danger">Delete</button>
//         </div>
//       </div>

//       <h3>{idea.title || "Untitled Idea"}</h3>
//       <p>{idea.description || "No description provided."}</p>

//       <div className="comments">
//         {comments.map((c, idx) => (
//           <div key={idx} className="comment">
//             <strong>{c.author}:</strong> {c.text}
//           </div>
//         ))}
//       </div>

//       <form onSubmit={submitComment} className="comment-form">
//         <input
//           placeholder="Write a comment..."
//           value={comment}
//           onChange={e => setComment(e.target.value)}
//         />
//         <button type="submit">Comment</button>
//       </form>
//     </div>
//   );
// }





// // src/components/IdeaCard.jsx
// import React from "react";

// export default function IdeaCard({ idea }) {
//   return (
//     <div className="idea-card">
//       <div className="idea-header">
//         <strong>{idea.author}</strong>
//         <span className="tags">{(idea.tags||[]).map(t => <span key={t} className="tag">{t}</span>)}</span>
//       </div>
//       <h3>{idea.title}</h3>
//       <p>{idea.desc}</p>
//       <div className="card-actions">
//         <button className="btn">Like</button>
//         <button className="btn btn-ghost">Comment</button>
//         <button className="btn btn-warning">Edit</button>
//         <button className="btn btn-danger">Delete</button>
//       </div>
//     </div>
//   );
// }


// src/components/IdeaCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function IdeaCard({ idea, onLike, onDelete, onComment }) {
  const navigate = useNavigate();

  return (
    <div className="idea-card">
      <div className="idea-header">
        <strong>{idea.author}</strong>
      </div>

      <h3>{idea.title}</h3>
      <p>{idea.description}</p>

      <div className="tags">
        {(idea.tags || []).map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        ❤️ {idea.likes}
      </div>

      <div className="card-actions">
        <button className="btn" onClick={() => onLike(idea.id)}>Like</button>

        <button className="btn btn-ghost" onClick={() => {
          const msg = prompt("Add comment:");
          if (msg) onComment(idea.id, msg);
          <p>{idea.description}</p>

{idea.comments && idea.comments.length > 0 && (
  <div style={{marginTop: 10, fontSize: 14, opacity: 0.8}}>
    💬 {idea.comments.length} comments
  </div>
)}

        }}>
          Comment
        </button>

        <button className="btn btn-warning" onClick={() => navigate(`/edit/${idea.id}`)}>
          Edit
        </button>

        <button className="btn btn-danger" onClick={() => onDelete(idea.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
