import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizActions } from "../store";
import { useNavigate } from "react-router-dom";
import classes from "./Result.module.css";

const Result = () => {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    dispatch(quizActions.resetScore());
    dispatch(quizActions.resetPageIndex());
    navigate("/");
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <p>Your Score</p>
        <p className={classes.score}>{score}/10</p>
        <button onClick={handlePlayAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Result;
