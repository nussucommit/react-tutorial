import axios from "axios";
import useSWR from "swr";

const baseUrl = "https://api.npoint.io/d96bb9837f322483ab04";

const fetcher = (url) => axios.get(url).then((res) => res.data);

/**
 * Function to get list of todos
 */
export const useTodos = () => useSWR(baseUrl, fetcher);

/**
 * Function to add a new todo
 */
export const addTodo = async (todo) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: [...prevData.todos, todo].map((e, i) => ({ ...e, id: i })),
  };
  const response = await axios.post(baseUrl, newData);

  return response.data.todos;
};

/**
 * Function to remove a todo
 */
export const removeTodo = async (id) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: prevData.todos.filter((e) => e.id !== id),
  };
  const response = await axios.post(baseUrl, newData);

  return response.data.todos;
};

/**
 * Function to toggle done status
 */
export const updateIsDone = async (id) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: prevData.todos.map((e) =>
      e.id === id ? { ...e, isDone: !e.isDone } : e
    ),
  };
  const response = await axios.post(baseUrl, newData);
  return response.data.todos;
};

// async function execute() {
//     try {
//         const r1 = await getTodos();
//         console.log(r1);
//         const r2 = await updateIsDone(5);
//         console.log(r2);
//         const r3 = await getTodos();
//         console.log(r3);
//     } catch(e) {
//         console.log("error");
//         console.log(e);
//     }
//     console.log("finished");
// }

// Promise.all([execute()]);
// console.log("still running");
