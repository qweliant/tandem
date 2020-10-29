import React, { useState } from "react";
import { Card, Radio } from "antd";

const TriviaQuestions = ({ question, answer, rightAnswer }) => {
  const [value] = useState(0);
  // const [score, setScore] = useState(0);
  let arr = [answer[0], answer[1], answer[2], rightAnswer];
  arr = arr.sort(() => Math.random() - 0.5);
  let array = arr;

  if (!question) return <div />;
  const onChange = (e) => {
    if (e.target.value === rightAnswer) {
      console.log("Correct", value);
    } else {
      console.log("haha you mad STOOPED!!", value);
    }
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  return (
    <table align="center" style={{backgroundColor: "black"}}>
      <tbody>
        <tr>
          <td>
          
            <Card title={question} bordered={false}>
              <Radio.Group onChange={onChange}>
                <Radio style={radioStyle} value={array[0]}>
                  {array[0]}
                </Radio>
                <Radio style={radioStyle} value={array[1]}>
                  {array[1]}
                </Radio>
                <Radio style={radioStyle} value={array[2]}>
                  {array[2]}
                </Radio>
                <Radio style={radioStyle} value={array[3]}>
                  {array[3]}
                </Radio>
              </Radio.Group>
            </Card>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TriviaQuestions;