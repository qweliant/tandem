import React, { useState } from "react";
import { triviaData } from "./data/data";
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
  console.log(triviaData.length)

  
  function onClick(){
    if(count < triviaData.length - 1) {
      console.log("not fin")
      setCount(count + 1)
    } else{
      console.log(" fin")

    }
    
  }
  return (
    <>
      <HomePageHeader />

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
