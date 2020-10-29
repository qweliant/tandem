import React, { useState } from "react";
import { triviaData } from "../data/data";
import TriviaQuestions from "./TriviaQuestions";
import Progression from "./Progress";
import { useHistory } from "react-router-dom";



const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Tandem Quiz!</h2>
    </header>
  );
};


let triviaDataState = triviaData;
triviaDataState = triviaDataState.sort(() => Math.random() - 0.5);
const array = triviaDataState;

const Trivia = () => {
  // const [triviaDataState] = useState(triviaData);


  const [count, setCount] = useState(0);
  const [percent, setPrecent] = useState(1);
  const [buttonText, setButtonText] = useState("Next");
  const history = useHistory();

  function onClick() {
    if (count < 10 - 1) {
      setCount(count + 1);

      setPrecent(count + 2);
    } else {

      let path = `results`;
      setButtonText("Done!")
      triviaDataState = triviaDataState.sort(() => Math.random() - 0.5);
      history.push(path);
    }
  }

  return (
    <>
      <HomePageHeader />
      <Progression percent={percent} />
      <TriviaQuestions
        question={array[count].question}
        answer={array[count].incorrect}
        rightAnswer={array[count].correct}
      />

      <button onClick={onClick}> {buttonText} </button>
    </>
  );
};

export default Trivia;
