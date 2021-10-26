import { Fragment } from "react";
import styles from "./Definition.module.css";

function Definition({ definitions }) {
  // let meanings = definitions?.meanings;
  let meanings = definitions.meanings.map((meaning, key) => {
    const speech = (
      <p key={meaning.partOfSpeech} className={styles.subheading}>
        {meaning.partOfSpeech}
      </p>
    );
    const definition = meaning.definitions.map((definition, key) => (
      <Fragment key={key}>
        <p className={styles.subtitle}>• {definition.definition}</p>
        {definition.example && (
          <p className={styles.example}>
            &nbsp;&nbsp; e.g. {definition.example}
          </p>
        )}
      </Fragment>
    ));
    return (
      <Fragment key={key}>
        {speech}
        {definition}
      </Fragment>
    );
  });

  let phonetics = definitions.phonetics.map((phonetic, index) => {
    return (
      <Fragment key={index}>
        {phonetic.text && (
          <>
            <p className={styles.subheading}>Phonetic {index + 1}</p>
            <p className={`${styles.subtitle} ${styles.subtitle_italicized}`}>
              • {phonetic.text}
            </p>
          </>
        )}
        {phonetic.audio && (
          <audio src={phonetic.audio} controls>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        )}
      </Fragment>
    );
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Definitions</p>
      <hr className={styles.divider} />
      {meanings}
      <br />

      <p className={styles.heading}>Ponethics</p>
      <hr className={styles.divider} />
      {phonetics}
    </div>
  );
}

export default Definition;
