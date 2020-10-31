import React from 'react';
import { useCountDispatch } from "../ScoreContext";
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
  const dispatch = useCountDispatch();

    return (
       <div>
          <NavLink to="/"><h3>Home</h3></NavLink> | 
          <NavLink to="/trivia" onClick={() => dispatch({ type: "over" })}><h3>Trivia</h3></NavLink> |
          <NavLink to="/results"><h3>Results</h3></NavLink>
          _________________________________________________
       </div>
    );
}
 
export default Navigation;