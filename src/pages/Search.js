import Box from "../components/search/Box";
import Input from "../components/search/Input";
import styles from "./Search.module.css";
function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <Input />
      </div>
      <div className={styles.word_container}>
        <div className={styles.box_container}>
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

export default Search;
