import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import Difficulty from "./Difficulty";
import Welcome from "./Welcome";
import { quizActions } from "../store";

const Home = () => {
  const pageIndex = useSelector((state) => state.pageIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageIndex === 3) {
      navigate("/questions");
    }
  }, [pageIndex, navigate]);

  const incrementIndex = () => {
    dispatch(quizActions.incrementPageIndex());
  };

  return (
    <Fragment>
      {pageIndex === 0 && <Welcome onStart={incrementIndex} />}
      {pageIndex === 1 && <Category onCategory={incrementIndex} />}
      {pageIndex === 2 && <Difficulty onDifficulty={incrementIndex} />}
    </Fragment>
  );
};

export default Home;
