import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  function checkNumber(number) {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  }
  function handleClickprev() {
    setIndex((prev) => {
      let newIndex = prev - 1;
      return checkNumber(newIndex);
    });
  }
  function handleClicknext() {
    setIndex((prev) => {
      let newIndex = prev + 1;
      return checkNumber(newIndex);
    });
  }
  function handleCLickRandom() {
    let newIndex = Math.floor(Math.random() * 4);
    if (newIndex === index) {
      newIndex = index + 1;
    }
    setIndex(checkNumber(newIndex));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handleClickprev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleClicknext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleCLickRandom}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
