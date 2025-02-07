import React, { useState } from "react";
import styles from "./ListItem.module.css";
import yes from "../assets/check_mark.png";
import no from "../assets/x.png";
import { Link } from "react-router-dom";
import useToDosContext from "../context/useToDosContext";

export default function ListItem({ item }) {
  const { editToDo, toggleEditToDo, toggleCompletion, deleteToDo } =
    useToDosContext();

  const [newText, setNewText] = useState(item.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editToDo(item.id, newText);
  };

  return (
    <div className={styles.listItem}>
      {item.isEditing ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <img
            src={item.completed ? yes : no}
            onClick={() => toggleCompletion(item.id)}
            alt="Completion status"
          />
          <Link to={`/item/${item.id}`} className={styles.listItemP}>
            <p>{item.task}</p>
          </Link>
          <button onClick={() => toggleEditToDo(item.id)}>Edit</button>
          <button
            className={styles.deleteButton}
            onClick={() => deleteToDo(item.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
