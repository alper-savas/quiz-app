import React, { Fragment, useState } from "react";
import { decode } from "html-entities";

const Question = (props) => {
  const correctAnswer = props.correctAnswer;
  const answers = [...props.incorrectAnswers];
  answers.splice(props.random, 0, correctAnswer);

  const handleSelectedAnswer = (event) => {
    const selectedAnswer = event.target.value;
    if (selectedAnswer === correctAnswer) {
      props.onSubmit(true);
    } else {
      props.onSubmit(false);
    }
  };

  return (
    <Fragment>
      <h1>{decode(props.question)}</h1>
      {answers.map((q, index) => {
        return (
          <button key={index} onClick={handleSelectedAnswer} value={q}>
            {decode(q)}
          </button>
        );
      })}
      <p>{props.score}</p>
      <p>{props.questionIndex}</p>
    </Fragment>
  );
};

export default Question;
