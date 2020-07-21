import React, { useContext } from "react";
import { Context } from "../context/Context";
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
