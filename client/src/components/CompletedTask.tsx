import React from "react";

import TodoItem from "../components/TodoItem";

interface Todo {
  id: number;
  name: string;
  priority: string;
  deadline: string;
  done: number;
}

const CompletedTask: React.FC<{
  items: Todo[];
  todoInputRef: React.RefObject<HTMLInputElement>;
  onRemoveTodo: (id: number) => void;
  onUpdateTodo: (todo: Todo) => void;
}> = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "2rem" }}>
      {" "}
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        Completed Tasks
      </span>
      <ul
        style={{
          listStyle: "none",
          margin: "2rem auto",
          padding: 0,
          width: "40rem",
        }}
      >
        {props.items.map((item: Todo) => (
          <TodoItem
            key={item.id}
            todo={item}
            todoInputRef={props.todoInputRef}
            onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
            onUpdateTodo={props.onUpdateTodo.bind(null, item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTask;
