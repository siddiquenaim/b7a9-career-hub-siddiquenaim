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
          Discover your dream job with comprehensive job listings and resources.
          Your future is waiting.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
