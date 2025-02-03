import { useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import Form from "./Form";

import { v4 as uuidv4 } from "uuid";

export default function List({ dataCopy, setDataCopy, idOnDelete }) {
  // const [items, setItems] = useState(dataCopy)
  const toggleCompletion = (id) => {
    const itemsCopy = [...dataCopy];
    const findIndex = dataCopy.findIndex((eachEl) => {
      return eachEl.id === id;
    });

    if (itemsCopy[findIndex].completed) {
      itemsCopy[findIndex].completed = false;
    } else {
      itemsCopy[findIndex].completed = true;
    }

    setDataCopy(itemsCopy);
    // sendBack(itemsCopy);
  };

  const addNewItem = (newItem) => {
    const updatedItems = [...dataCopy, { id: uuidv4(), ...newItem }];
    setDataCopy(updatedItems);
  };

  const handleEdit = (id, newText) => {
    const updatedItems = dataCopy.map((item) =>
      item.id === id ? { ...item, task: newText, isEditing: false } : item
    );
    setDataCopy(updatedItems);
  };

  const handleDelete = (id) => {
    setDataCopy(dataCopy.filter((item) => item.id !== id));
    idOnDelete(id);
  };

  // const toggleEdit = (id) => {
  //   const updatedItems = items.map((item) =>
  //     item.id === id ? { ...item, isEditing: !item.isEditing } : item
  //   );
  //   setItems(updatedItems);
  // };

  const toggleEdit = (id) => {
    const updatedItems = dataCopy.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setDataCopy(updatedItems);
  };

  return (
    <div className={styles.listContainer}>
      <Form addItem={addNewItem} />
      {dataCopy.map((item) => (
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
