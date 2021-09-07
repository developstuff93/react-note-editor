import React from "react";
import useAppState from "../../hooks/useAppState";
import "./style.css";

export default function EditPanel() {
  const { selectedNote } = useAppState();

  if (!selectedNote) {
    return <div className="edit-panel">No notes</div>;
  }

  return (
    <div className="edit-panel">
      <div className="edit-panel__title">
        <input value={selectedNote.title} />
      </div>
      <div className="edit-panel__content">
        <textarea value={selectedNote.content} />
      </div>
    </div>
  );
}
