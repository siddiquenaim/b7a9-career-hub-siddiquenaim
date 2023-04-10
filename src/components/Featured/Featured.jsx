import React, { useState } from "react";
import JobCard from "../JobCard/JobCard";

const Featured = ({ featuredJobs }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mt-32 w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="section-title">Featured Jobs</h2>
        <p className="description mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredJobs.slice(0, showAll ? 8 : 4).map((singleJob) => (
          <JobCard key={singleJob.id} singleJob={singleJob}></JobCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        {showAll ? (
          <button onClick={handleShowAll} className="btn-details">
            Show Less
          </button>
        ) : (
          <button onClick={handleShowAll} className="btn-details">
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
