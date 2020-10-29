import React, { useState } from "react";
import { triviaData } from "../data/data";
import TriviaQuestions from './TriviaQuestions';
import Progression from './Progress'

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
  const [percent, setPrecent] = useState(1);

  console.log(count)
  console.log(triviaData.length)

  function onClick(){
    if(count < triviaData.length - 1) {
      console.log("not fin")
      setCount(count + 1)

      setPrecent(count+2)
    } else{
      console.log(" fin")

    };
    
  };

  return (
    <>
      <HomePageHeader />
      <Progression percent={percent}/>
      <TriviaQuestions
        question={triviaDataState[count].question}
        answer={triviaDataState[count].incorrect}
        rightAnswer={triviaDataState[count].correct}
      />

      <button  onClick={onClick}> Click me </button> 
    </>
  );
};



export default Trivia;
