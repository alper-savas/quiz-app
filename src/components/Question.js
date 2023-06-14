import React, { useEffect, useState, useCallback } from "react";
import { decode } from "html-entities";
import classes from "./Question.module.css";
import useCountDown from "react-countdown-hook";
import hourglass from "../assets/icons/hourglass.png";

const Question = (props) => {
  const correctAnswer = props.correctAnswer;
  const answers = [...props.incorrectAnswers];
  answers.splice(props.random, 0, correctAnswer);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [rightIndex, setRightIndex] = useState(null);
  const [wrongIndex, setWrongIndex] = useState(null);
  const [timeleft, { start, pause }] = useCountDown(15000, 1000);

  useEffect(() => {
    start();
  }, [start]);

  const restart = useCallback(() => {
    start();
  }, [start]);

  if (timeleft === 1000) {
    const timer = setTimeout(() => {
      setWrongIndex(answers.indexOf(correctAnswer));
      const timer2 = setTimeout(() => {
        restart();
        props.onSubmit(false);
        setWrongIndex(null);
        return () => clearTimeout(timer2);
      }, 2000);
      return () => clearTimeout(timer);
    }, 1000);
  }

  const handleSelectedAnswer = (index, q) => {
    setSelectedIndex(index);
    pause();
    const selectedIndexTimer = setTimeout(() => {
      setSelectedIndex(null);
      setRightIndex(answers.indexOf(correctAnswer));
      if (q === correctAnswer) {
        setRightIndex(index);
        const correctAnswerTimer = setTimeout(() => {
          props.onSubmit(true);
          setRightIndex(null);
          restart();
          return () => clearTimeout(correctAnswerTimer);
        }, 2000);
        return () => clearTimeout(selectedIndexTimer);
      } else {
        setRightIndex(answers.indexOf(correctAnswer));
        setWrongIndex(index);
        const correctAnswerTimer = setTimeout(() => {
          props.onSubmit(false);
          setRightIndex(null);
          setWrongIndex(null);
          restart();
          return () => clearTimeout(correctAnswerTimer);
        }, 2000);
        return () => clearTimeout(selectedIndexTimer);
      }
    }, 1000);
  };

  return (
    <div className={classes.background}>
      <div className={classes.question}>
        <h3 className={classes.index}>
          Question {props.questionIndex} out of 10
        </h3>
        <h1>{decode(props.question)}</h1>
        <div className={classes.buttons}>
          {answers.map((q, index) => {
            return (
              <button
                key={index}
                onClick={() => handleSelectedAnswer(index, q)}
                value={q}
                className={`${selectedIndex === index && classes.active} ${
                  rightIndex === index && classes.right
                } ${wrongIndex === index && classes.wrong}`}
              >
                {decode(q)}
              </button>
            );
          })}
        </div>
        <div className={classes.timer}>
          <img src={hourglass} alt="Hourglass" className={classes.icon}></img>
          <p>{timeleft / 1000}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
