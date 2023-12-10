import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {

  return (
    <li className="TodoItem">
        <div className={`check-container ${props.completed && 'completed'}`}>
      <span className={`check ${props.completed && 'completed'}`} onClick={props.onComplete}>✓</span>
        </div>
      <p className={`todo ${props.completed && 'completed'}`}>{props.text}</p>
      <div className="closer-container">
      <span className="closer" onClick={props.onDelete}>X</span>
      </div>
    </li>
  );
};

export { TodoItem };
