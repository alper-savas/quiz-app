import React from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../store";
import classes from "./Category.module.css";
import icon01 from "../assets/icons/any.png";
import icon02 from "../assets/icons/general-knowledge.png";
import icon03 from "../assets/icons/book.png";
import icon04 from "../assets/icons/cinema.png";
import icon05 from "../assets/icons/music.png";
// import icon06 from "../assets/icons/theater.png";
import icon07 from "../assets/icons/television.png";
import icon08 from "../assets/icons/video-game.png";
// import icon09 from "../assets/icons/board-game.png";
import icon10 from "../assets/icons/science.png";
import icon11 from "../assets/icons/computer.png";
// import icon12 from "../assets/icons/math.png";
// import icon13 from "../assets/icons/mythology.png";
import icon14 from "../assets/icons/sport.png";
import icon15 from "../assets/icons/geography.png";
import icon16 from "../assets/icons/history.png";
import icon17 from "../assets/icons/politics.png";
// import icon18 from "../assets/icons/art.png";
// import icon19 from "../assets/icons/celebrity.png";
// import icon20 from "../assets/icons/animal.png";
import icon21 from "../assets/icons/vehicle.png";
// import icon22 from "../assets/icons/comic.png";
// import icon23 from "../assets/icons/gadget.png";
import icon24 from "../assets/icons/anime.png";
import icon25 from "../assets/icons/cartoon.png";

const categories = [
  { name: "Any", value: null, url: icon01 },
  { name: "General Knowledge", value: 9, url: icon02 },
  { name: "Books", value: 10, url: icon03 },
  { name: "Cinema", value: 11, url: icon04 },
  { name: "Music", value: 12, url: icon05 },
  // { name: "Musicals & Theatres", value: 13, url: icon06 },
  { name: "Television", value: 14, url: icon07 },
  { name: "Video Games", value: 15, url: icon08 },
  // { name: "Board Games", value: 16, url: icon09 },
  { name: "Science & Nature", value: 17, url: icon10 },
  { name: "Computers", value: 18, url: icon11 },
  // { name: "Mathematics", value: 19, url: icon12 },
  // { name: "Mythology", value: 20, url: icon13 },
  { name: "Sports", value: 21, url: icon14 },
  { name: "Geography", value: 22, url: icon15 },
  { name: "History", value: 23, url: icon16 },
  { name: "Politics", value: 24, url: icon17 },
  // { name: "Art", value: 25, url: icon18 },
  // { name: "Celebrities", value: 26, url: icon19 },
  // { name: "Animals", value: 27, url: icon20 },
  { name: "Vehicles", value: 28, url: icon21 },
  // { name: "Comics", value: 29, url: icon22 },
  // { name: "Gadgets", value: 30, url: icon23 },
  { name: "Anime & Manga", value: 31, url: icon24 },
  { name: "Cartoon & Animations", value: 32, url: icon25 },
];

const Category = (props) => {
  const dispatch = useDispatch();

  const handleSelectedCategory = (value) => {
    dispatch(
      quizActions.setCategory({
        category: value,
      })
    );
    props.onCategory();
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1>Categories</h1>
        <div className={classes.options}>
          {categories.map((c, index) => {
            return (
              <button key={index} value={c.value}>
                <div>
                  <img
                    src={c.url}
                    alt="Film"
                    className={classes.icon}
                    onClick={() => handleSelectedCategory(c.value)}
                  ></img>
                  <p className={classes.categoryName}>{c.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <p className={classes.credit}>
        <a href="https://www.flaticon.com/free-icons/books" title="books icons">
          All icons created by Freepik - Flaticon
        </a>
      </p>
    </div>
  );
};

export default Category;
