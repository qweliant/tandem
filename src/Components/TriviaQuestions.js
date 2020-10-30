import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));



const TriviaQuestions = ({ question, answers, rightAnswer }) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Shoot your shot');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');
  const handleRadioChange = (event) => {
    
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    if (value === rightAnswer) {

      setScore(score+10)
    } else {
      setScore(score)
    }
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === rightAnswer) {
      setHelperText('You got it!');
      setError(false);
    } else if (value !== rightAnswer) {
      setHelperText('Sorry, wrong answer!');
      setError(true);

    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
  <div align="center">
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">{question}</FormLabel>

        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          {answers.map(answer =>(
            <div key={answer}>
            <FormControlLabel value={answer} control={<Radio />} label={answer} />
            </div>
            ))}
          </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button>
      </FormControl>
    </form>    
  </div>
  );
};

export default TriviaQuestions;