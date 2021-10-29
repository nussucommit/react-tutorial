import { useTodos, removeTodo, addTodo, updateIsDone } from "./api/todo";
import useRequestState from "./hooks/useRequestState";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SubmitForm from "./components/SubmitForm";

import "./App.css";

function App() {
  const { data = { todos: [] }, mutate } = useTodos();
  const { start, end, loading } = useRequestState();

  const handleToggle = async (id) => {
    start();
    await updateIsDone(id);
    mutate();
    end();
  };

  const handleRemove = async (id) => {
    start();
    await removeTodo(id);
    mutate();
    end();
  };

  const handleSubmit = async (taskName) => {
    start();
    const newTask = {
      id: data.todos.length + 1,
      name: taskName,
      isDone: false,
    };
    await addTodo(newTask);
    mutate();
    end();
  };

  return (
    <div className="App">
      <Header numberOfTodos={data.todos.length} />
      <TodoList
        tasks={data.todos}
        toggleHandler={handleToggle}
        removeHandler={handleRemove}
      />
      <SubmitForm onFormSubmit={handleSubmit} />
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
