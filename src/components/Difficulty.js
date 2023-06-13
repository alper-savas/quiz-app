import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../store";

const difficulties = [
  { name: "Any", value: null },
  { name: "Easy", value: "easy" },
  { name: "Medium", value: "medium" },
  { name: "Hard", value: "hard" },
];

const Difficulty = (props) => {
  const dispatch = useDispatch();

  const handleSelectedDifficulty = (event) => {
    const selectedDifficulty = event.target.value;
    event.preventDefault();
    dispatch(quizActions.setDifficulty({ difficulty: selectedDifficulty }));
    props.onDifficulty();
  };

  return (
    <Fragment>
      <h1>Difficulty</h1>
      {difficulties.map((d, index) => {
        return (
          <button
            key={index}
            onClick={handleSelectedDifficulty}
            value={d.value}
          >
            {d.name}
          </button>
        );
      })}
    </Fragment>
  );
};

export default Difficulty;
