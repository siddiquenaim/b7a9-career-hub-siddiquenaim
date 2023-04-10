import React from "react";
import JobCard from "../JobCard/JobCard";

const Featured = ({ featuredJobs }) => {
  return (
    <div className="mt-32 w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="section-title">Featured Jobs</h2>
        <p className="description mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {featuredJobs.map((singleJob) => (
          <JobCard key={singleJob.id} singleJob={singleJob}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Featured;
