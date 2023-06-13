import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quizActions } from "../store";
import { useNavigate } from "react-router-dom";

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
    <Fragment>
      <div>{score}</div>
      <button onClick={handlePlayAgain}>Play Again!</button>
    </Fragment>
  );
};

export default Result;
