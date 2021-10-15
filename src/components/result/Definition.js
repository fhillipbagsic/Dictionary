import { useContext } from "react";
import { DataContext } from "../../pages/Result";
import styles from "./Definition.module.css";

function Definition() {
  const { definitions } = useContext(DataContext);

  let meanings = definitions?.meanings;
  let result;
  console.log(meanings);
  if (meanings) {
    result = definitions.meanings.map((meaning) => {
      const speech = (
        <p key={meaning.partOfSpeech} className={styles.speech}>
          {meaning.partOfSpeech}
        </p>
      );
      const definition = meaning.definitions.map((definition, key) => (
        <>
          <p key={definition.definition} className={styles.definition}>
            {definition.definition}
          </p>
          <p key={definition.example} className={styles.example}>
            {definition.example}
          </p>
        </>
      ));
      return (
        <>
          {speech}
          {definition}
        </>
      );
    });
  } else {
    return <p>Sorry, no meanings found</p>;
  }

  return <div className={styles.container}>{result}</div>;
}

export default Definition;
