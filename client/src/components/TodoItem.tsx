import React, { useState } from "react";

interface Todo {
  id: number;
  name: string;
  priority: string;
  deadline: string;
  done: number;
}

const TodoItem: React.FC<{
  todo: Todo;
  todoInputRef: React.RefObject<HTMLInputElement>;
  onRemoveTodo: (id: number) => void;
  onUpdateTodo: (todo: Todo) => void;
}> = ({ todo, onRemoveTodo, onUpdateTodo, todoInputRef }) => {
  const [checked, setChecked] = useState(todo.done === 1 ? true : false);
  const inputText = todoInputRef.current!.value;

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(!checked);

    const newTodo = {
      ...todo,
      done: !checked === true ? 1 : 0,
    };
    onUpdateTodo(newTodo);
  };

  return (
    <li
      style={{
        margin: "1rem 0",
        boxShadow: "0 1px 4px rgb(0, 0, 0, 0.2)",
        padding: "1rem",
        backgroundColor: "#f7f5ef",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
        }}
      >
        {todo.name}
      </span>
      <span
        style={{
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
        }}
      >
        {todo.priority}
      </span>
      <span
        style={{
          fontWeight: "bold",
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
        }}
      >
        {todo.deadline}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <input
          type="checkbox"
          style={{
            width: "1rem",
            height: "1rem",
            cursor: "pointer",
            accentColor: "#f7f5ef",
            backgroundColor: "#f7f5ef",
            borderRadius: "0.25rem",
            border: "1px solid #f7f5ef",
            boxShadow: "0 1px 4px rgb(0, 0, 0, 0.2)",
          }}
          checked={checked}
          onChange={checkboxHandler}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          onClick={() => {
            onUpdateTodo({
              ...todo,
              name: inputText ? inputText : todo.name,
            });
            console.log({ ...todo, name: "fuck you" });
          }}
        >
          <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          onClick={() => onRemoveTodo(todo.id)}
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 9l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3m-3 12a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
          />
        </svg>
      </div>
    </li>
  );
};

export default TodoItem;
