import React, { useState } from "react";
import { triviaData } from "./data";
import "antd/dist/antd.css";
import TriviaQuestions from './TriviaQuestions';

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Tandem Quiz!</h2>
    </header>
  );
};

const Trivia = () => {
  const [triviaDataState] = useState(triviaData);
  const [count, setCount] = useState(0);
  console.log(count)

  
  return (
    <>
      <HomePageHeader />

      <TriviaQuestions
        question={triviaDataState[count].question}
        answer={triviaDataState[count].incorrect}
        rightAnswer={triviaDataState[count].correct}
      />

      <button  onClick={() => setCount(count + 1)}> Click me </button>
    </>
  );
};



export default Trivia;
