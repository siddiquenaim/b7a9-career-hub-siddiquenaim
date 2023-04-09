import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-32 w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="section-title">Job Category List</h2>
        <p className="description mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-around mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
