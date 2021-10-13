import { useState } from "react";
import styles from "./Tabs.module.css";

const tabs = ["definition", "synonyms", "phonetics"];

function Tabs() {
  const [selected, setSelected] = useState("definition");

  const onTabClick = (tab) => {
    setSelected(tab);
  };

  return (
    <div className={styles.tab_container}>
      {tabs.map((tab) => (
        <button
          className={`${styles.tab} ${selected === tab ? styles.selected : ""}`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
