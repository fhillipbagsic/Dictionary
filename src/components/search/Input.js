import { useState } from "react";
import { Redirect } from "react-router";
import styles from "./Input.module.css";
function Input() {
  const [word, setWord] = useState("");

  const onWordChange = (e) => {
    setWord(e.target.value);
  };

  const onWordPress = (e) => {
    if (e.key === "Enter") {
      window.location = `/search?word=${word}`;
    }
  };
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="What would you like to search?"
      value={word}
      onChange={onWordChange}
      onKeyPress={onWordPress}
    />
  );
}

export default Input;
