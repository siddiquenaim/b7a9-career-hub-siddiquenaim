import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  const { logo, title, jobsAvailable } = category;
  return (
    <div className="category-main bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] my-7 p-10 pr-20 rounded-lg">
      <div className="category-logo-container">
        <img className="category-logo" src={logo} alt="" />
      </div>
      <h3 className="text-xl font-extrabold mb-2">{title}</h3>
      <p className="font-medium text-[#A3A3A3]">
        {jobsAvailable} Jobs Available
      </p>
    </div>
  );
};

export default CategoryCard;
