import React, { useState, useContext, useEffect } from "react";
//import { Context } from "../context/Context";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../firebase/firebaseContext";
import { Loader } from "../components/Loader";
export const Form = () => {
  const { loading, notes, fetchNotes, addNote } = useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);
  // const [notes, setNotes] = useState([
  //   {
  //     id: Date.now(),
  //     title: "Какая-то заметка",
  //     completed: false,
  //   },
  // ]);
  const [note, setNote] = useState("");
  // const RemoveNote = (id) => {
  //   setNotes(
  //     notes.filter((note) => {
  //       return note.id !== id;
  //     })
  //   );
  // };

  return (
    //<Context.Provider value={{ RemoveNote }}>
    <>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={note}
          placeholder="Введите и нажмите 'Enter'"
          onChange={(event) => setNote(event.target.value)}
          onKeyPress={(arg) => {
            if (arg.key === "Enter") {
              // setNotes([
              //   ...notes,
              //   { id: Date.now(), title: note, completed: false },
              // ]);
              addNote(note);
              setNote("");
              console.log(notes);
            }
          }}
        />
      </div>
      {loading ? <Loader /> : <Notes notes={notes} />}
    </>
    //</Context.Provider>
  );
};
