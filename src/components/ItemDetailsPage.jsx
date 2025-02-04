import React from "react";
import { Link, useParams } from "react-router-dom";
import yes from "../assets/check_mark.png";
import no from "../assets/x.png"; 
import {useState} from "react";

import styles from "./ItemDetailsPage.module.css";

export default function ItemDetailsPage({dataFromMyParent, toggleCompletion}) {
  const { id } = useParams();
  const item = dataFromMyParent.find((item) => item.id === id);


  // const trueFalseToggle = () => {
  //   setCompleted(prevCompleted => !prevCompleted)
  // };

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
            // onClick={trueFalseToggle}
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
