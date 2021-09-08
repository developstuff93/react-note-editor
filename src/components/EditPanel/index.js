import React, { useEffect, useState } from "react";
import useAppState from "../../hooks/useAppState";
import { API_URL } from "../../constants";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";
import "./style.css";

export default function EditPanel() {
  const { selectedNote, setSelectedNote, notes, setNotes } = useAppState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    setTitle(selectedNote?.title);
    setContent(selectedNote?.content);
  }, [selectedNote]);

  const updateNote = (newNote) => {
    setSelectedNote(newNote);
    const newNotes = notes.map((note) =>
      note.id === newNote.id ? newNote : note
    );
    setNotes(newNotes);
    axios.put(`${API_URL}/${newNote.id}`, newNote);
  };

  const handleTitleUpdate = (value) => {
    const newDate = new Date();
    updateNote({
      ...selectedNote,
      title: value,
      date_created: newDate.toISOString(),
    });
  };

  const handleContentUpdate = (value) => {
    const newDate = new Date();
    updateNote({
      ...selectedNote,
      content: value,
      date_created: newDate.toISOString(),
    });
  };

  const debouncedTitleChange = useDebounce(handleTitleUpdate, 1000);
  const debouncedContentChange = useDebounce(handleContentUpdate, 1000);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    debouncedTitleChange(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
    debouncedContentChange(e.target.value);
  };

  if (!selectedNote) {
    return <div className="edit-panel">No notes</div>;
  }

  return (
    <div className="edit-panel">
      <div className="edit-panel__title">
        <input value={title} onChange={handleTitleChange} />
      </div>
      <div className="edit-panel__content">
        <textarea value={content} onChange={handleContentChange} />
      </div>
    </div>
  );
}
