import styles from "./Todo.module.css";

const Todo = ({ content, toggleHandler, removeHandler }) => {
  return (
    <div className={styles.todo}>
      <h3
        onClick={() => toggleHandler(content.id)}
        className={content.isDone ? styles.done : styles.name}
      >
        {content.name}
      </h3>
      <button onClick={() => removeHandler(content.id)}>Remove</button>
    </div>
  );
};

export default Todo;
