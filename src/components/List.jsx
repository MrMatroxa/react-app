import React, { useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List({ dataFromMyParent, idOnDelete,  sendBack }) {
  const [items, setItems] = useState(dataFromMyParent);

  const toggleCompletion = (id) => {
    const itemsCopy = [...items]

    const findIndex = items.findIndex((eachEl)=> {
      return eachEl.id === id
    })

    if(itemsCopy[findIndex].completed){
      itemsCopy[findIndex].completed = false
    } else {     
     itemsCopy[findIndex].completed = true;
    }

    setItems(itemsCopy)
    sendBack(items)
  };


  
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    idOnDelete(id);
  };

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          toggleCompletion={toggleCompletion}
          handleDelete={handleDelete}
          completed={item.completed}
        />
      ))}
    </div>
  );
}
