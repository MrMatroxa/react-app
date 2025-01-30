import React from "react";
import { useParams } from "react-router-dom";

import styles from "./ItemDetailsPage.module.css";

export default function ItemDetailsPage({dataFromMyParent}) {
  const { id } = useParams();
  const item = dataFromMyParent.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className={styles.itemDetails}>
      <h1>Item Details</h1>
      <p>
        <strong>Task:</strong> {item.task}
      </p>
      <p>
        <strong>Completed:</strong> {item.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}
