import useToDosContext from "../context/useToDosContext";
import styles from "./Form.module.css";
import { useState } from "react";

export default function Form() {

  const { addNewToDo } = useToDosContext();

  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTaskInput = (e) => {
    setTask(e.target.value);
    setCompleted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    const newTask = {
      task,
      completed,
    };

    addNewToDo(newTask);

    setTask("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        className={styles.input}
        onChange={handleTaskInput}
      />
      <button type="submit" disabled={Boolean(!task.length)} className={styles.button}>
        Add Task
      </button>
    </form>
  );
}
