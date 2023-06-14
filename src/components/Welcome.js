import React from "react";
import classes from "./Welcome.module.css";

const Welcome = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.onStart();
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1>Quizzy</h1>
        <p>
          Test your knowledge and have fun with 1.000+ quizzes. Challenge
          yourself and see how much you know about various topics.
        </p>
        <button onClick={handleClick}>Start</button>
      </div>
      <p className={classes.credit}>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/paper-style-smooth-background_14646176.htm#query=illustrator%20background&position=48&from_view=search&track=ais">
          Freepik
        </a>
      </p>
    </div>
  );
};

export default Welcome;
