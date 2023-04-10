import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./AppliedJobs.css";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const loadedJobs = useLoaderData();

  useEffect(() => {
    setAppliedJobs(loadedJobs);
  }, []);

  const handleShowOnsite = () => {
    const onsiteJobs = loadedJobs.filter((job) => job.job_type[1] === "Onsite");
    if (onsiteJobs) {
      setAppliedJobs(onsiteJobs);
    }
  };
  const handleShowRemote = () => {
    const remoteJobs = loadedJobs.filter((job) => job.job_type[1] === "Remote");
    if (remoteJobs) {
      setAppliedJobs(remoteJobs);
    }
  };

  const handleShowAll = () => {
    setAppliedJobs(loadedJobs);
  };

  return (
    <div>
      <div className="bg-[#F9F9FF] pt-12 pb-16 text-center">
        <h1 className="font-extrabold text-3xl">Applied Jobs</h1>
      </div>
      <div className="mt-16 lg:mt-24 lg:w-[90%] mx-auto">
        <div className="flex justify-center mb-8">
          <div className="dropdown dropdown-hover">
            <label
              tabIndex="0"
              className="btn normal-case m-1 text-black bg-white hover:bg-[#F5F1FF] filter-text"
            >
              Filter By <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow rounded-box w-52 border font-bold bg-white"
            >
              <li onClick={handleShowRemote}>
                <a>Show Remote Jobs</a>
              </li>
              <li onClick={handleShowOnsite}>
                <a>Show Onsite Jobs</a>
              </li>
              <li onClick={handleShowAll}>
                <a>Show All Jobs</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {appliedJobs.map((singleAppliedJob) => (
            <AppliedJobsCard
              key={singleAppliedJob.id}
              singleAppliedJob={singleAppliedJob}
            ></AppliedJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
