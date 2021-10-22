import styles from "./Header.module.css";

const Header = ({ numberOfTodos }) => {
  return (
    <div className={styles.header}>
      <h1>You have {numberOfTodos} Todos</h1>
    </div>
  );
};

export default Header;
