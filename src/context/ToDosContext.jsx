import { createContext, useState } from "react";
import data from "../assets/data.json";
import { v4 as uuidv4 } from "uuid";

const ToDosContext = createContext();

function ToDosContextWrapper(props) {
  const [toDos, setToDos] = useState(data);

  const deleteToDo = (id) => {
    setToDos((prevState) => {
      return prevState.filter((eachEl) => eachEl.id !== id);
    });
  };

  const toggleCompletion = (id) => {
    const itemsCopy = [...toDos];
    const findIndex = toDos.findIndex((eachEl) => {
      return eachEl.id === id;
    });

    if (itemsCopy[findIndex].completed) {
      itemsCopy[findIndex].completed = false;
    } else {
      itemsCopy[findIndex].completed = true;
    }

    setToDos(itemsCopy);
  };

  const addNewToDo = (newItem) => {
    const updatedItems = [...toDos, { id: uuidv4(), ...newItem }];
    setToDos(updatedItems);
  };

  const editToDo = (id, newText) => {
    const updatedItems = toDos.map((item) =>
      item.id === id ? { ...item, task: newText, isEditing: false } : item
    );
    setToDos(updatedItems);
  };

  const toggleEditToDo = (id) => {
    const updatedItems = toDos.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setToDos(updatedItems);
  };

  return (
    <ToDosContext.Provider
      value={{
        toDos,
        deleteToDo,
        toggleCompletion,
        addNewToDo,
        editToDo,
        toggleEditToDo,
      }}
    >
      {props.children}
    </ToDosContext.Provider>
  );
}

export { ToDosContext, ToDosContextWrapper };
