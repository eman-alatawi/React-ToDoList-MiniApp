// TodoList simple app
// TodoItem.js
import React from "react";

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <label
        class="container"
        style={{
          textDecoration: props.item.completed && "line-through",
          color: props.item.completed && "#ab9d9d",
        }}
      >
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.text}
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
