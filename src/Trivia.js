import React, {setState} from "react";
import "./App.css";
import { triviaData } from "./data";

export const Trivia = () => {
  const [stuff, setStuff] = setState(triviaData)
  return (
      <div>
      {triviaData.map((data, key) => {
        return (
          <div key={key}>
          
            {data.question}
            {data.incorrect}
            {data.correct}
          </div>
        );
      })}
      </div>
  );
};