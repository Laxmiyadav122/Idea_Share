import React from "react"; 
import IdeaCard from "./IdeaCard"; 
export default function IdeaList({ ideas = [], onDelete, onLike, onComment })
 { if (!ideas || ideas.length === 0) {
   return <div className="empty">No ideas yet. Be the first to add one!</div>;
   } return (
   <div className="idea-list">
     {ideas.map(i => 
     (<IdeaCard 
      key={i._id} 
      idea={{...i, id: i._id}} onDelete={onDelete} 
      onLike={onLike} 
      onComment={onComment} 
      />
      ))} 
      </div>); }