import React, { useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import Form from "./Form";

import { v4 as uuidv4 } from "uuid";

export default function List({ dataFromMyParent, idOnDelete, sendBack }) {
  const [items, setItems] = useState(dataFromMyParent);

  const toggleCompletion = (id) => {
    const itemsCopy = [...items];

    const findIndex = items.findIndex((eachEl) => {
      return eachEl.id === id;
    });

    if (itemsCopy[findIndex].completed) {
      itemsCopy[findIndex].completed = false;
    } else {
      itemsCopy[findIndex].completed = true;
    }

    setItems(itemsCopy);
    sendBack(items);
  };

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
    idOnDelete(id);
  };

  // const toggleEdit = (id) => {
  //   const updatedItems = items.map((item) =>
  //     item.id === id ? { ...item, isEditing: !item.isEditing } : item
  //   );
  //   setItems(updatedItems);
  // };

  const toggleEdit = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onEdit={handleEdit}
          toggleCompletion={toggleCompletion}
          handleDelete={handleDelete}
          completed={item.completed}
          toggleEdit={() => toggleEdit(item.id)}
        />
      ))}
    </div>
  );
}
