import React, { useState } from 'react';
import styles from './ListItem.module.css';
import yes from '../assets/check_mark.png'; 
import no from '../assets/x.png'; 
import { Link } from "react-router-dom";
import {useState} from "react";

export default function ListItem({ item, onEdit, toggleCompletion, handleDelete, completed, toggleEdit }) {
  const [newText, setNewText] = useState(item.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(item.id, newText);
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
        <p>Task: {item.task}</p>
      </Link>
          <button onClick={toggleEdit}>Edit</button>
          <button
        className={styles.deleteButton}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
        </>
      )}
    </div>
  );
}
