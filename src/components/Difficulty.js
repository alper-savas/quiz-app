import React from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../store";
import classes from "./Difficulty.module.css";

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
    <div className={classes.background}>
      <div className={classes.container}>
        <h1>Difficulty</h1>
        <div className={classes.options}></div>
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
      </div>
    </div>
  );
};

export default Difficulty;
