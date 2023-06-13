import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../store";

const categories = [
  { name: "Any", value: null },
  { name: "General Knowledge", value: 9 },
  { name: "Books", value: 10 },
  { name: "Film", value: 11 },
  { name: "Music", value: 12 },
  { name: "Musicals & Theatres", value: 13 },
  { name: "Television", value: 14 },
  { name: "Video Games", value: 15 },
  { name: "Board Games", value: 16 },
  { name: "Science & Nature", value: 17 },
  { name: "Computers", value: 18 },
  { name: "Mathematics", value: 19 },
  { name: "Mythology", value: 20 },
  { name: "Sports", value: 21 },
  { name: "Geography", value: 22 },
  { name: "History", value: 23 },
  { name: "Politics", value: 24 },
  { name: "Art", value: 25 },
  { name: "Celebrities", value: 26 },
  { name: "Animals", value: 27 },
  { name: "Vehicles", value: 28 },
  { name: "Comics", value: 29 },
  { name: "Gadgets", value: 30 },
  { name: "Anime & Manga", value: 31 },
  { name: "Cartoon & Animations", value: 32 },
];

const Category = (props) => {
  const dispatch = useDispatch();

  const handleSelectedCategory = (event) => {
    const selectedCategory = event.target.value;
    event.preventDefault();
    dispatch(
      quizActions.setCategory({
        category: selectedCategory,
      })
    );
    props.onCategory();
  };

  return (
    <Fragment>
      <h1>Categories</h1>
      {categories.map((c, index) => {
        return (
          <button key={index} onClick={handleSelectedCategory} value={c.value}>
            {c.name}
          </button>
        );
      })}
    </Fragment>
  );
};

export default Category;
