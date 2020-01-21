import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./TodoList.scss";

function TodoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  console.log("re-render", text, items);
  return (
    <div className="todoContainer">
      <h1>Todo List</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button
        onClick={() => {
          setItems(items => items.concat(text));
          setText("");
        }}
      >
        Add
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                console.log("items before", items);
                const newItems = items.filter((_, ix) => ix !== index);
                console.log(newItems);
                setItems(newItems);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
