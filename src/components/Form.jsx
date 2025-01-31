import styles from './Form.module.css';
import { useState } from 'react';



export default function Form(props) {
    const [task, setTask] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleTaskInput = (e) => {
        setTask(e.target.value);
        setCompleted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        const newTask = {
            task,
            completed,
        };

        props.addItem(newTask);

        setTask('');

    }



  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} onChange={handleTaskInput} />
      <button type="submit" className={styles.button}>
        Add Task
      </button>
    </form>
  );
}