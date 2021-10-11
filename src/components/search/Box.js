import styles from "./Box.module.css";

function Box() {
  return (
    <article className={styles.box}>
      <h3 className={styles.title}>Word of the day</h3>
      <h2 className={styles.word}>cosmopolis</h2>
      <div className={styles.phonetics}>
        <p className={styles.phonetics_text}>/həˈloʊ/</p>
        {/* <p className={styles.phonetics_audio}>S</p> */}
        {/* <audio
          controls
          src="https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3"
        >
          Your browser does not support the <code>audio</code> element.
        </audio> */}
      </div>
      <p className={styles.speech}>noun</p>
      <p className={styles.definition}>
        an internationally important city inhabited by many different peoples
        reflecting a great variety of cultures, attitudes, etc.
      </p>

      <button className={styles.readMore}>Read more</button>
    </article>
  );
}

export default Box;
