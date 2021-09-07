import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "../../constants";

export const AppStateContext = createContext(null);

export default function AppStateProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(API_URL);
        if (res.status !== 200) {
          return;
        }
        const { data: newNotes } = res;
        if (newNotes && newNotes.length) {
          setSelectedNoteId(newNotes[0].id);
          setNotes(newNotes);
        }
      } catch (error) {
        setNotes([]);
      }
    };
    fetchNotes();
  }, []);

  const value = {
    notes,
    setNotes,
    selectedNoteId,
    setSelectedNoteId,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
