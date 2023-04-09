import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { logo, title, jobsAvailable } = category;
  return (
    <div className="bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] my-7 p-10 pr-20 rounded-lg">
      <div className="category-logo-container">
        <img className="category-logo" src={logo} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{jobsAvailable} Jobs Available</p>
    </div>
  );
};

export default CategoryCard;
