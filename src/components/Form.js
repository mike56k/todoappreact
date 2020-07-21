import React, { useState } from "react";
import { Context } from "../context/Context";
import { Notes } from "../components/Notes";

export const Form = () => {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "Какая-то заметка",
      completed: false,
    },
  ]);
  const [note, setNote] = useState("");
  const RemoveNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  return (
    <Context.Provider value={{ RemoveNote }}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={note}
          placeholder="Введите и нажмите 'Enter'"
          onChange={(event) => setNote(event.target.value)}
          onKeyPress={(arg) => {
            if (arg.key === "Enter") {
              setNotes([
                ...notes,
                { id: Date.now(), title: note, completed: false },
              ]);
              setNote("");
            }
          }}
        />
      </div>

      <Notes notes={notes} />
    </Context.Provider>
  );
};
