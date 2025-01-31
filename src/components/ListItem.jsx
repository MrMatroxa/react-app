import React, { useState } from 'react';
import styles from './ListItem.module.css';
import yes from '../assets/check_mark.png'; 
import no from '../assets/x.png'; 
import { Link } from "react-router-dom";
import {useState} from "react";

export default function ListItem({ item, toggleCompletion, handleDelete, completed }) {
  return (
    <div className={styles.listItem}>
      <img
        src={item.completed ? yes : no}
        onClick={() => toggleCompletion(item.id)}
        alt="Completion status"
      />
      <Link to={`/item/${item.id}`} className={styles.listItemP}>
        <p>Task: {item.task}</p>
      </Link>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
