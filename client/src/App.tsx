import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import "./styles.css";

import { useState, useEffect, useRef } from "react";
import BaseAxios from "./api/BaseAxios";
import RegisterForm from "./components/RegisterForm";
import CompletedTask from "./components/CompletedTask";
import UpcomingTask from "./components/UpcomingTask";

interface Todo {
  id: number;
  name: string;
  priority: string;
  deadline: string;
  done: number;
}

const TODAY = new Date().toISOString().slice(0, 10);

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>({});
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState<string>("priority1");
  const [date, setDate] = useState<string>(TODAY);

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await BaseAxios.get(
      `/api/v1/users/login?username=${username}&password=${password}`
    );

    setCurrentUser(user.data.data);
    setIsLogin(true);
  };

  async function fetchTodo() {
    await BaseAxios.get("/api/v1/todos")
      .then((res) => setTodos(res.data.data.todos))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodoHandler = async (todoText: string) => {
    await BaseAxios.post("/api/v1/todos", {
      name: todoText,
      priority: priority,
      deadline: date,
      done: 0,
    });
    fetchTodo();
  };

  const handleUpdateTodo = async (todo: Todo) => {
    await BaseAxios.put(`/api/v1/todos/${todo.id}`, todo);
    fetchTodo();
  };

  const removeTodoHandler = async (todoId: number) => {
    await BaseAxios.delete(`/api/v1/todos/${todoId}`);
    fetchTodo();
  };

  const completedTasks = todos.filter((todo: Todo) => todo.done == 1);
  const uncomingTasks = todos.filter((todo: Todo) => todo.done == 0);
  console.log(uncomingTasks);
  console.log(completedTasks);

  return (
    <div>
      {!isLogin ? (
        <RegisterForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          onHandleLogin={loginHandler}
        />
      ) : (
        <>
          {" "}
          <NewTodo
            onAddTodo={addTodoHandler}
            todoInputRef={todoInputRef}
            priority={priority}
            setPriority={setPriority}
            date={date}
            setDate={setDate}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <CompletedTask
              items={completedTasks}
              onRemoveTodo={removeTodoHandler}
              onUpdateTodo={handleUpdateTodo}
              todoInputRef={todoInputRef}
            />
            <UpcomingTask
              items={uncomingTasks}
              onRemoveTodo={removeTodoHandler}
              onUpdateTodo={handleUpdateTodo}
              todoInputRef={todoInputRef}
            />
          </div>
        </>
      )}
    </div>
  );
}
