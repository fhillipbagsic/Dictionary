import { useEffect, useState } from "react";
import styles from "./Input.module.css";

function Input(props) {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log(props.term);
    setWord(props.term);
  }, []);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="What would you like to search?"
      value={word}
    />
  );
}

export default Input;
