import styles from "./Result.module.css";
import Input from "../components/result/Input";
import Tabs from "../components/result/Tabs";
import Definition from "../components/result/Definition";
import { useLocation } from "react-router";
import { createContext, useEffect, useState } from "react";
import fetchData from "../components/utils";

const DataContext = createContext(null);

function Result() {
  const { search } = useLocation();
  const [definitions, setDefinitions] = useState(null);
  const word = search.split("=")[1];

  useEffect(() => {
    fetchData(word).then((result) => {
      if (result) {
        setDefinitions(result);

        localStorage.setItem("word", word);
        localStorage.setItem("definitions", result);
      }
    });
  }, []);

  return (
    <DataContext.Provider value={{ definitions }}>
      <div className={styles.search_container}>
        <Input term={word} />
        {/* <Tabs /> */}
      </div>

      <div className={styles.box_container}>
        <Definition />
      </div>
    </DataContext.Provider>
  );
}

export { DataContext };
export default Result;
