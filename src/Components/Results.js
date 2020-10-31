import React from 'react'
import { useCountState } from "../ScoreContext";

function CountDisplay() {
    const { count } = useCountState();
    return <h1>{`Your score is ${count}`}</h1>;
  }


const Results = () => {
    return(

        <div>
    <CountDisplay />
        </div>


    );
};

export default Results