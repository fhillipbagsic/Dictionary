import Day from "../components/search/Day";
import Input from "../components/search/Input";
import Recent from "../components/search/Recent";
import styles from "./Search.module.css";
function Search() {
  return (
    <>
      <div className={styles.search_container}>
        <Input />
      </div>
      <div className={styles.word_container}>
        <div className={styles.box_container}>
          <Day />
          <Recent />
        </div>
      </div>
    </>
  );
}

export default Search;
