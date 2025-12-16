import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AddEditIdea({ onSubmit, ideas = [] }) {
  const { id } = useParams();
  const editing = !!id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (!editing) return;
  
    if (ideas.length > 0) {
      const found = ideas.find(x => String(x._id) === String(id));
      console.log("Ideas:", ideas);

      if (found) {
        setTitle(found.title);
        setDescription(found.description);
        setTags(found.tags?.join(", ") || "");
      }
    }
  }, [id, ideas.length]);
  

  function submit(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Add a title");
    const idea = {
      _id: editing ? String(id) : undefined,
      title,
      description,
      tags: tags.split(",").map(t => t.trim()).filter(Boolean)
    };
    onSubmit(idea);
  }


  return (
    <div style={{
      maxWidth: 720, margin: "20px auto",
      background: "white", padding: 20, borderRadius: 12,
      boxShadow: "var(--card-shadow)"
    }}>
      <h2>{editing ? "Edit Idea" : "Add New Idea"}</h2>
      <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Idea title" />
        <textarea value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description" rows={6} />
        <input value={tags} onChange={e => setTags(e.target.value)}
          placeholder="Tags (comma separated)" /> <div style={{ display: "flex", gap: 8 }}>
          <button type="submit"
            style={{
              background: "var(--green)", color: "#fff",
              padding: "10px 18px", borderRadius: 10
            }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
