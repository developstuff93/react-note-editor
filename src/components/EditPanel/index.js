import React, { useMemo } from "react";
import _debounce from "lodash/debounce";
import useAppState from "../../hooks/useAppState";
import "./style.css";
import { API_URL } from "../../constants";
import axios from "axios";

export default function EditPanel() {
  const { selectedNoteId, notes, setNotes } = useAppState();

  const selectedNote = useMemo(
    () => notes.find((note) => note.id === selectedNoteId),
    [notes, selectedNoteId]
  );

  if (!selectedNote) {
    return <div className="edit-panel">No notes</div>;
  }

  const updateNote = (newNote) => {
    const newNotes = notes.map((note) =>
      note.id === selectedNoteId ? newNote : note
    );
    setNotes(newNotes);
    axios.put(`${API_URL}/${selectedNoteId}`, newNote);
  };

  const handleTitleChange = (e) => {
    const newDate = new Date();

    updateNote({
      ...selectedNote,
      title: e.target.value,
      date_created: newDate.toISOString(),
    });
  };
  const debouncedTitleChange = _debounce(handleTitleChange, 1000);

  const handleContentChange = (e) => {
    const newDate = new Date();
    updateNote({
      ...selectedNote,
      content: e.target.value,
      date_created: newDate.toISOString(),
    });
  };
  const debouncedContentChange = _debounce(handleContentChange, 1000);

  return (
    <div className="edit-panel">
      <div className="edit-panel__title">
        <input
          defaultValue={selectedNote.title}
          onChange={debouncedTitleChange}
        />
      </div>
      <div className="edit-panel__content">
        <textarea
          defaultValue={selectedNote.content}
          onChange={debouncedContentChange}
        />
      </div>
    </div>
  );
}
