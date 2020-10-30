import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/"><h3>Home</h3></NavLink> | 
          <NavLink to="/trivia"><h3>Trivia</h3></NavLink> |
          <NavLink to="/results"><h3>Results</h3></NavLink>
          _________________________________________________
       </div>
    );
}
 
export default Navigation;