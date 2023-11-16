import React from "react";
import Priority from "./Priority";
import Date from "./Date";

const NewTodo: React.FC<{
  onAddTodo: (text: string) => void;
  todoInputRef: React.RefObject<HTMLInputElement>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}> = ({ onAddTodo, todoInputRef, priority, setPriority, date, setDate }) => {
  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    const inputText = todoInputRef.current!.value;

    if (inputText?.trim().length === 0) {
      return;
    }
    onAddTodo(inputText);
  };

  return (
    <form
      style={{
        width: "100%",
        margin: "2rem auto",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={submitHandler}
    >
      <div style={{ width: "20rem" }}>
        <label
          style={{
            marginRight: "0.5rem",
            fontWeight: "bold",
            display: "block",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
          }}
          htmlFor="text"
        >
          Todo Text
        </label>
        <input
          style={{
            display: "block",
            width: "100%",
            font: "inherit",
            fontSize: "1.5rem",
            padding: "0.5rem",
            borderRadius: "4px",
            backgroundColor: "#f7f5ef",
            border: "none",
            borderBottom: "2px solid #494844",
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            marginBottom: "0.5rem",
          }}
          type="text"
          id="text"
          ref={todoInputRef}
        />
      </div>
      <Priority priority={priority} setPriority={setPriority} />
      <Date date={date} setDate={setDate} />
      <button
        style={{
          font: "inherit",
          height: "3rem",
          width: "10rem",
          backgroundColor: "#ebb002",
          border: "1px solid #ebb002",
          color: "#201d0f",
          padding: " 0.5rem 1.5rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
