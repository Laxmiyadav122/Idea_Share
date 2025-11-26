// // src/components/IdeaList.jsx
// import React from "react";
// import IdeaCard from "./IdeaCard";

// export default function IdeaList({ ideas = [] }) {
//   if (!ideas.length) {
//     return <div className="empty">No ideas yet. Be the first to add one!</div>;
//   }
//   return (
//     <div className="idea-list">
//       {ideas.map((i) => (
//         <IdeaCard key={i.id} idea={i} />
//       ))}
//     </div>
//   );
// }



import React from "react";
import IdeaCard from "./IdeaCard";

export default function IdeaList({ ideas, onDelete, onLike, onComment }) {
  return (
    <div className="idea-list">
      {ideas.map(i => (
         <IdeaCard 
         key={i._id }
          idea={i}
          onDelete={onDelete}
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
}
