import React from "react";
import data from "../assets/data.json";
import "./List.module.css";

export default function List() {
  console.log('data',data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Task: {item.task}</p>
          <p>Complete: {item.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}
