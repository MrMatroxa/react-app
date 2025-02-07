import styles from "./List.module.css";
import ListItem from "./ListItem";
import Form from "./Form";
import useToDosContext from '../context/useToDosContext';

export default function List() {
  const { toDos, addNewToDo, editToDo, toggleEditToDo, toggleCompletion, deleteToDo } = useToDosContext();

  return (
    <div className={styles.listContainer}>
      <Form addItem={addNewToDo} />
      {toDos.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onEdit={editToDo}
          toggleCompletion={toggleCompletion}
          handleDelete={deleteToDo}
          completed={item.completed}
          toggleEdit={() => toggleEditToDo(item.id)}
        />
      ))}
    </div>
  );
}
