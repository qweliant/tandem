import React, { useState } from "react";
import { Card  } from "antd";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const TriviaQuestions = ({ question, answer, rightAnswer }) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Choose wisely');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');

  const handleRadioChange = (event) => {
    
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  let arr = [rightAnswer].concat(answer);
  arr = arr.sort(() => Math.random() - 0.5);
  let array = arr;

  if (!question) return <div />;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === rightAnswer) {
      setHelperText('You got it!');
      setError(false);
      setScore(score+10)
    } else if (value !== rightAnswer) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
      setScore(score-10)

    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };


  return (
    <table align="center" style={{backgroundColor: "black"}}>
      <tbody>
        <tr>
          <td>
            <Card title={question} bordered={false}>
            <div> 

            
              
              </div>
              <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" error={error} className={classes.formControl}>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                {array.map(item => (
                  <div key={item}>
                  <FormControlLabel value={item} control={<Radio />} label={item} />
                      
                  </div>
                ))}

                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                  Check Answer
                </Button>
              </FormControl>
            </form>    
            </Card>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TriviaQuestions;