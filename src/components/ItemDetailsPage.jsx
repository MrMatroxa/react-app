import React from "react";
import { useParams } from "react-router-dom";
import yes from "../assets/check_mark.png";
import no from "../assets/x.png"; 
import {useState} from "react";

import styles from "./ItemDetailsPage.module.css";

export default function ItemDetailsPage({dataFromMyParent}) {
  const { id } = useParams();
  const item = dataFromMyParent.find((item) => item.id === id);
  const [completed, setCompleted] = useState(item.completed)

  const trueFalseToggle = () => {
    setCompleted(prevCompleted => !prevCompleted)
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
        <div className={styles.itemDetails}>
      <div>
          <h1>Item Detailssss</h1>
          <p>
            <strong>Task:</strong> {item.task}
          </p>
          <p>
            <strong>Completed:</strong> {completed ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <img
            src={completed ? yes : no}
            alt={completed ? "Completed" : "Not Completed"}
            onClick={trueFalseToggle}
          />
        </div>
      </div>
    </>
  );
}
