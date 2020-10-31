import React from 'react'
import { useCountState } from "../ScoreContext";

function CountDisplay() {
    const { count } = useCountState();
    return <div>{`The current count is ${count}`}</div>;
  }


const Results = () => {
    return(

        <div>
    <CountDisplay />
    RESULTS PAGE
        </div>


    );
};

export default Results