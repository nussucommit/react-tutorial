import { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SubmitForm from "./components/SubmitForm";

import "./App.css";

const TODOS = [
  {
    id: 1,
    name: "Watch lecture",
    isDone: false,
  },
  {
    id: 2,
    name: "Buy groceries",
    isDone: false,
  },
  {
    id: 3,
    name: "Sleep",
    isDone: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS);

  const handleToggle = (id) => {
    const newTodos = todos.map((task) => {
      return task.id === id ? { ...task, isDone: !task.isDone } : task;
    });

    setTodos(newTodos);
  };

  const handleRemove = (id) => {
    const newTodos = todos.filter((task) => task.id !== id);

    setTodos(newTodos);
  };

  const handleSubmit = (taskName) => {
    const newTask = {
      id: todos.length + 1,
      name: taskName,
      isDone: false,
    };
    const newTodos = [...todos, newTask];

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header numberOfTodos={todos.length} />
      <TodoList
        tasks={todos}
        toggleHandler={handleToggle}
        removeHandler={handleRemove}
      />
      <SubmitForm onFormSubmit={handleSubmit} />
    </div>
  );
}

export default App;
