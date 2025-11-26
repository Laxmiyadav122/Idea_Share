import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import IdeaCard from "../components/IdeaCard";

export default function Dashboard({ ideas = [], onDelete, onLike, onComment, user }) {
  const [filter, setFilter] = useState("all");

  const visible = ideas.filter(i => filter === "all" || (filter === "mine" && i.author === (user?.name || "Anonymous")));

  return (
    <div style={{display:"grid",gridTemplateColumns:"220px 1fr 260px",gap:16}}>
      <Sidebar onSelect={(f)=>{
        if (f==="add") window.location.href="/idea/new";
        else setFilter(f);
      }} />
      <section>
        <h2 style={{marginTop:0}}>Ideas</h2>
        {visible.length === 0 && <div className="muted">No ideas yet — add one!</div>}
        {visible.map(i => (
          <IdeaCard
            key={i.id}
            idea={i}
            onDelete={onDelete}
            onLike={onLike}
            onAddComment={onComment}
            user={user}
          />
        ))}
      </section>
      <aside style={{padding:16, borderRadius:12}}>
        <h3>Trending</h3>
        <div className="muted">Top ideas by likes</div>
        <ul style={{marginTop:12}}>
          {ideas.slice().sort((a,b)=>b.likes-a.likes).slice(0,5).map(i=>(
            <li key={i.id} style={{padding:"8px 0"}}>{i.title} <span className="muted">({i.likes})</span></li>
          ))}
        </ul>
      </aside>

    </div>
  );
}
