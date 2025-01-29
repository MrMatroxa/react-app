import React from 'react';
import styles from './ListItem.module.css';
import yes from '../assets/check_mark.png'; 
import no from '../assets/x.png'; 

export default function ListItem({ item, onDelete }) {
  return (
    <div className={styles.listItem}>
      <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
      <img src={item.completed ? yes : no} alt={item.completed ? "Completed" : "Not Completed"} />
      <p>Task: {item.task}</p>
    </div>
  );
}
