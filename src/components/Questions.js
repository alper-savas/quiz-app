/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Question from "./Question";
import { quizActions } from "../store";
import classes from "./Questions.module.css";

const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const category = useSelector((state) => state.category);
  const difficulty = useSelector((state) => state.difficulty);
  const score = useSelector((state) => state.score);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [random, setRandom] = useState(null);

  let apiURL = "";

  if (category) {
    apiURL += `&category=${category}`;
  }
  if (difficulty) {
    apiURL += `&difficulty=${difficulty}`;
  }

  const { responseData, loading, error } = useFetch(`${apiURL}&type=multiple`);

  useEffect(() => {
    if (responseData?.results) {
      setQuestion(responseData.results[questionIndex].question);
      setCorrectAnswer(responseData.results[questionIndex].correct_answer);
      setIncorrectAnswers([
        ...responseData.results[questionIndex].incorrect_answers,
      ]);
      setRandom(Math.ceil(Math.random() * 4));
    }
  }, [responseData, apiURL, dispatch, questionIndex]);

  const handleAnswerSubmit = (boolValue) => {
    if (questionIndex < 9) {
      setQuestionIndex((prevIndex) => (prevIndex += 1));
      if (boolValue) {
        dispatch(quizActions.incrementScore());
      }
    } else {
      navigate("/result");
    }
  };

  if (loading) {
    return (
      <div className={classes.background}>
        <div className={classes.loading}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.background}>
        <div className={classes.loading}>{error}</div>
      </div>
    );
  }

  return (
    <Question
      question={question}
      correctAnswer={correctAnswer}
      incorrectAnswers={incorrectAnswers}
      random={random}
      score={score}
      onSubmit={handleAnswerSubmit}
      questionIndex={questionIndex + 1}
    ></Question>
  );
};

export default Questions;
