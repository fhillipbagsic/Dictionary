import styles from "./Result.module.css";
import Input from "../components/result/Input";
import Tabs from "../components/result/Tabs";
import Definition from "../components/result/Definition";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

function Result({ meanings }) {
  const { search } = useLocation();
  const searchWord = search.split("=")[1];

  return (
    <>
      <div className={styles.search_container}>
        <Input term={searchWord} />
        {/* <Tabs /> */}
      </div>
      <div className={styles.box_container}>
        <Definition meanings={data} />
        {/* <Definition meanings={data} /> */}
      </div>
    </>
  );
}

export default Result;

const data = [
  {
    partOfSpeech: "exclamation",
    definitions: [
      {
        definition: "Used as a greeting or to begin a phone conversation.",
        example: "hello there, Katie!",
      },
      {
        definition: "Used as a greeting or to begin a phone conversation.",
        example: "hello there, Katie!",
      },
    ],
  },
  {
    partOfSpeech: "noun",
    definitions: [
      {
        definition: "An utterance of “hello”; a greeting.",
        example: "she was getting polite nods and hellos from people",
        synonyms: [
          "greeting",
          "welcome",
          "salutation",
          "saluting",
          "hailing",
          "address",
          "hello",
          "hallo",
        ],
      },
    ],
  },
  {
    partOfSpeech: "intransitive verb",
    definitions: [
      {
        definition: "Say or shout “hello”; greet someone.",
        example: "I pressed the phone button and helloed",
      },
    ],
  },
];
