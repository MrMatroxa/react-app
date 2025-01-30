import React, { useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List({ dataFromMyParent, sendToParent }) {
  const [clickedIndex, setClickedIndex] = useState(null);

  const getData = (data) => {
    setClickedIndex(data);
    sendToParent(data);
  };

  

  console.log("clicked index state:", clickedIndex);

  return (
    <div className={styles.listContainer}>
      {dataFromMyParent.map((item) => (
        <ListItem key={item.id} item={item} handleDelete={getData} />
      ))}
    </div>
  );
}
