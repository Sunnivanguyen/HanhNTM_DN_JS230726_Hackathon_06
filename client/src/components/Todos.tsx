import React from "react";

import TodoItem from "../components/TodoItem";

interface Todo {
  id: number;
  name: string;
  priority: string;
  deadline: string;
  done: number;
}

const Todos: React.FC<{
  items: Todo[];
  todoInputRef: React.RefObject<HTMLInputElement>;
  onRemoveTodo: (id: number) => void;
  onUpdateTodo: (todo: Todo) => void;
}> = (props) => {
  return (
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
  );
};

export default Todos;
