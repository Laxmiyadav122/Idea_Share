import React from "react";
import IdeaList from "../components/IdeaList";

const mockIdeas = [
    { id: "1", author: "Asha", title: "Study Group App", description: "A small app to find study partners", tags: ["study","app"], comments: [], likes: 0 },
    { id: "2", author: "Ravi", title: "Recycle Plan", description: "Collect bottles and recycle", tags: ["environment"], comments: [], likes: 0 },
  ];
  
export default function Explore({ ideas, onDelete, onLike, onComment }) {
  return (
    <div className="page-container">
      <h1>Explore Ideas</h1>
      <IdeaList
        ideas={ideas}
        onDelete={onDelete}
        onLike={onLike}
        onComment={onComment}
      />
    </div>
  );
}
