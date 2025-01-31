import React, { useState } from "react";
import data from "../assets/data.json";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import Form from "./Form";

import { v4 as uuidv4 } from "uuid";

export default function List() {
  const [items, setItems] = useState(data);

  const addNewItem = (newItem) => {
    const updatedItems = [...items, { id: uuidv4(), ...newItem }];
    setItems(updatedItems);
  };

  const handleEdit = (id, newText) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, task: newText, isEditing: false } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleEdit = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setItems(updatedItems);
  };

  return (
    <>
    <div className={styles.listContainer}>
    <Form addItem={addNewItem} />
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onEdit={handleEdit}
          onDelete={() => handleDelete(item.id)}
          toggleEdit={() => toggleEdit(item.id)}
        />
      ))}
    </div>
    </>
  );
}


