import React from "react";
import useAppState from "../../hooks/useAppState";
import AddNewIcon from "../../icons/AddNewIcon";
import CaretRightIcon from "../../icons/CaretRightIcon";
import "./style.css";

export default function SidePanel() {
  const { notes, selectedNote, setSelectedNote } = useAppState();

  const handleSelectNote = (newNote) => {
    setSelectedNote(newNote);
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" });
  const formatDate = (date) => {
    return dateFormatter.format(new Date(date));
  };

  return (
    <div className="side-panel">
      <div className="side-panel_title">
        <div className="title">ForethoughtNote</div>
        <div className="add-new-icon">
          <AddNewIcon />
        </div>
      </div>
      {notes.map((note) => {
        const { id, title, date_created } = note;
        return (
          <div
            key={id}
            className="side-panel_note"
            onClick={() => handleSelectNote(note)}
          >
            <div className="note-details">
              <span className="details-title">{title}</span>
              <span className="details-date">{formatDate(date_created)}</span>
            </div>
            {id === selectedNote.id && (
              <div className="note-action">
                <CaretRightIcon />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
