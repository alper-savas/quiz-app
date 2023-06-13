import React, { Fragment } from "react";

const Welcome = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.onStart();
  };

  return (
    <Fragment>
      <h1>Welcome</h1>
      <button onClick={handleClick}>Start</button>
    </Fragment>
  );
};

export default Welcome;
