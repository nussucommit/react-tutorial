import Todo from "../Todo";

import styles from "./TodoList.module.css";

const TodoList = ({ tasks, toggleHandler, removeHandler }) => {
  return (
    <div className={styles.list}>
      {tasks.map((todo, index) => (
        <Todo
          key={index}
          content={todo}
          toggleHandler={toggleHandler}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
