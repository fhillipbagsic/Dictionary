import styles from "./Result.module.css";
import Input from "../components/result/Input";
import Definition from "../components/result/Definition";
import { useLocation } from "react-router";
import { createContext, useEffect, useState } from "react";
import fetchData from "../components/utils";

const DataContext = createContext(null);

function Result() {
  const { search } = useLocation();
  const [definitions, setDefinitions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const word = search.split("=")[1];

  useEffect(() => {
    fetchData(word).then((result) => {
      console.log(result);
      if (result) {
        setDefinitions(result);
        setLoading(false);
        localStorage.setItem("word", word);
        localStorage.setItem("definitions", JSON.stringify(result));
      } else {
        setAlert(true);
        setLoading(false);
      }
    });
  }, [word]);

  return (
    <>
      <div className={styles.search_container}>
        <Input term={word} />
      </div>
      <div className={styles.box_container}>
        {loading && <p>Loading...</p>}
        {definitions && <Definition definitions={definitions} />}
        {alert && <p>no definitions found</p>}
      </div>
    </>
  );
}

export { DataContext };
export default Result;
