import { Link, useParams } from "react-router-dom";
import yes from "../assets/check_mark.png";
import no from "../assets/x.png";

import styles from "./ItemDetailsPage.module.css";
import useToDosContext from "../context/useToDosContext";

export default function ItemDetailsPage() {
  const { toDos, toggleCompletion } = useToDosContext();

  const { id } = useParams();
  const item = toDos.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <div className={styles.itemDetails}>
        <div>
          <h1>Item Details</h1>
          <p>
            <strong>Task:</strong> {item.task}
          </p>
          <p>
            <strong>Completed:</strong> {item.completed ? "Yes" : "No"}
          </p>
        </div>
        <div className={styles.imgAndBack}>
          <img
            src={item.completed ? yes : no}
            alt={item.completed ? "Completed" : "Not Completed"}
            onClick={() => toggleCompletion(item.id)}
          />
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
