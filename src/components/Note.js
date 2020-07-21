import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
export const Note = ({ title, id, completed }) => {
  const [checked, setChecked] = useState(completed);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const { RemoveNote } = useContext(Context);
  const cls = ["note"];
  if (checked) {
    cls.push("completed");
  }
  return (
    <li className={"list-group-item note " + cls.join(" ")} key={id}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => RemoveNote(id)}
        >
          Удалить
        </button>
      </label>
    </li>
  );
};
