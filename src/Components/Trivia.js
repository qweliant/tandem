import React, { useState } from "react";
import { triviaData } from "../data/data";
import Progression from "./Progress";
import { useHistory } from "react-router-dom";
import { notification } from 'antd';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Tandem Quiz!</h2>
     
    </header>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


let triviaDataState = triviaData;
triviaDataState = triviaDataState.sort(() => Math.random() - 0.5);
let array = triviaDataState;
var index = 0
for (index = 0; index < array.length; index++) { 
  array[index].questions = array[index].incorrect.concat(array[index].correct).sort(() => Math.random() - 0.5)
  
} 
console.log(array); 
const Trivia = () => {
  const [count, setCount] = useState(0);
  const [percent, setPrecent] = useState(1);
  const [buttonText, setButtonText] = useState("Next");
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Shoot your shot');
  const [value, setValue] = useState('');
  const [score, setScore] = useState(0);

  // const [disable, setDisable] = useState(false);
  
  if (!array) return <div />

  function onClick() {
    notification.open({
      message: 'Correct Answer',
      description:
        `The correct answer was ${array[count].correct}.`,
    });
    if (count < 10 - 1) {
      setCount(count + 1);

      setPrecent(count + 2);

    } else {

      let path = `results`;
      setButtonText("Done!")
      triviaDataState = triviaDataState.sort(() => Math.random() - 0.5);
      history.push(path);
    }
  }

  const handleRadioChange = (event) => {
    
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);

    if (value === array[count].correct) {
      setScore(score + 10)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === array[count].correct) {
      setHelperText('You got it!');
      setError(false);
      setScore(0)
    } else if (value !== array[count].correct) {
      setHelperText('Sorry, wrong answer!');
      setError(true);

    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  return (
    <div align="center">
    <HomePageHeader />
<Progression percent={percent} />
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">{array[count].question}</FormLabel>

            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
              {array[count].questions.map(answer =>(
                <div key={answer}>
                  <FormControlLabel value={answer}   control={<Radio />} label={answer} />
                </div>
                ))}
            </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button type="submit" variant="outlined" color="primary" className={classes.button}>
            Check Answer
          </Button>
        </FormControl>
      </form> 
<button onClick={onClick}> {buttonText} </button>

    </div>
  );
};



export default Trivia;