import styles from "./Input.module.css";
function Input() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="What would you like to search?"
    />
  );
}

export default Input;
