import React, { useState } from "react";
import { triviaData } from "./data";
import { List } from "antd";
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
  const [update, setUpdate] = useState(0);

  return (
    <>
      <HomePageHeader />
      <List
        itemLayout="vertical"
        bordered
        dataSource={triviaDataState}
        renderItem={(data) => (
          <List.Item>
            <TriviaQuestions
              question={data.question}
              answer={data.incorrect}
              rightAnswer={data.correct}
            />
          </List.Item>
        )}
      />
      <button  onClick={() => setCount(count + 1)> Click me </button>
    </>
  );
};



export default Trivia;
