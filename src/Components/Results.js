import React from 'react'
import { useCountState, useCountDispatch } from "../ScoreContext";
import { NavLink } from 'react-router-dom';

function CountDisplay() {
    const { count } = useCountState();
    return <h1>{`Your score is ${count}`}</h1>;
  }


const Results = () => {
  const dispatch = useCountDispatch();

    return(

        <div>
            <CountDisplay />
            <NavLink to="/trivia" onClick={() => dispatch({ type: "over" })}><h3>Take Again?</h3></NavLink> 

        </div>


    );
};

export default Results