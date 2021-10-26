import { useLayoutEffect, useState } from "react";

import styles from "./Box.module.css";

function Recent() {
  const [word, setWord] = useState(null);
  const [definitions, setDefinitions] = useState(null);

  useLayoutEffect(() => {
    const word = localStorage.getItem("word");
    const definitions = localStorage.getItem("definitions");
    if (word) {
      setWord(word);
      setDefinitions(JSON.parse(definitions));
    }
  }, []);

  return (
    word && (
      <article className={styles.box}>
        <h3 className={styles.title}>Recent Search</h3>
        <h2 className={styles.word}>{word.toLowerCase()}</h2>
        <div className={styles.phonetics}>
          <p className={styles.phonetics_text}>{definitions.phonetic}</p>
        </div>
        <p className={styles.speech}>{definitions.meanings[0].partOfSpeech}</p>
        <p className={styles.definition}>
          {definitions.meanings[0].definitions[0].definition}
        </p>

        <a href={`/search?word=${word}`} className={styles.readMore}>
          Read more
        </a>
      </article>
    )
  );
}

export default Recent;
