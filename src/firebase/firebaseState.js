import React, { useReducer } from "react";
import axios from "axios";
import { FirebaseContext } from "./firebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import {
  ADD_NOTE,
  FETCH_NOTES,
  REMOVE_NOTE,
  SHOW_LOADER,
  // COMPLETE_NOTE,
} from "../types";

const url = "https://reactportfolioapp.firebaseio.com/";

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({ type: FETCH_NOTES, payload });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
      completed: false,
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({ type: ADD_NOTE, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };
  // const completeNote = async (id) => {
  //   const res = await axios.get(`${url}/notes/${id}.json`);
  //   res.completed = !res.completed;
  //   await axios.delete(`${url}/notes/${id}.json`);
  //   await axios.post(`${url}/notes.json`, res);
  //   dispatch({ type: COMPLETE_NOTE, payload: id });
  // };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        //     completeNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
