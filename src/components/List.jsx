import React, { useState } from "react";
import data from "../assets/data.json";
import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List() {
  const [items, setItems] = useState(data);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}
