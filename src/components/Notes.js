import React from "react";
import { Note } from "../components/Note";
export const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </ul>
  );
};
