import { useLayoutEffect } from "react";
import { useState } from "react/cjs/react.development";
import styles from "./Box.module.css";

function Recent() {
  const [word, setWord] = useState(null);
  const [definitions, setDefinitions] = useState(null);

  useLayoutEffect(() => {
    const word = localStorage.getItem("word");
    const definitions = localStorage.getItem("definitions");
    if (word) {
      setWord(word);
      setDefinitions(definitions);
    }
  }, []);

  return (
    word && (
      <article className={styles.box}>
        <h3 className={styles.title}>Recent Search</h3>
        <h2 className={styles.word}>{word.toLowerCase()}</h2>
        <div className={styles.phonetics}>
          <p className={styles.phonetics_text}>/həˈloʊ/</p>
        </div>
        <p className={styles.speech}>noun</p>
        <p className={styles.definition}>
          an internationally important city inhabited by many different peoples
          reflecting a great variety of cultures, attitudes, etc.
        </p>

        <button className={styles.readMore}>Read more</button>
      </article>
    )
  );
}

export default Recent;
