import React from "react";

const TodoList = ({ todos, toggleTaks, deleteTaks }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleTaks(index)}>
            {todo.text}
          </span>
          <button onClick={() => deleteTaks(index)}>🗑</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
