import React, { useState } from 'react';
import styles from './ListItem.module.css';
import yes from '../assets/check_mark.png'; 
import no from '../assets/x.png'; 
;

export default function ListItem({ item, onEdit, onDelete, toggleEdit }) {
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
          <img src={item.completed ? yes : no} alt={item.completed ? "Completed" : "Not Completed"} />
          <p>Task: {item.task}</p>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
