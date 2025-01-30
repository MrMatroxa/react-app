import React from 'react';
import styles from './ListItem.module.css';
import yes from '../assets/check_mark.png'; 
import no from '../assets/x.png'; 
import { Link } from "react-router-dom";

export default function ListItem({ item, onDelete }) {
  return (
    <div className={styles.listItem}>
      <img
        src={item.completed ? yes : no}
        alt={item.completed ? "Completed" : "Not Completed"}
      />

      <Link to={`/item/${item.id}`} className={styles.itemLink}>
        <p>Task: {item.task}</p>
      </Link>
      <button onClick={onDelete} className={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
}
