import React from 'react'

const Home = () =>{
    return (
      <div>
        <header className="header">
          Greetings! 
        </header>
        <h2> The rules are:
        <ul>You can only choose one answer</ul>
        <ul>When you are ready to submit, click "Check Answer" to see if it was correct or not</ul>
        <ul>Click next, and a card at the top right will pop up with the correct answer</ul>
        <ul>At the end of the round, you will see your score</ul>
        <ul>Good luck!</ul>
        </h2>
        <h2>To get started, click on trivia above.</h2>
      </div>
    );
};

export default Home;