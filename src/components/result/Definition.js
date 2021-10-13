import styles from "./Definition.module.css";
function Definition({ meanings }) {
  const definitions = meanings.map((meaning) => {
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

  return <div className={styles.container}>{definitions}</div>;
}

export default Definition;
