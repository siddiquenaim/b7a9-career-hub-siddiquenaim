import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const allJobs = useLoaderData();
  const selectedJob = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(allJobs);
    if (allJobs) {
      let jobDetail = allJobs.find((job) => job.id === selectedJob.jobId);
      console.log(" 1 dhukse");
      if (jobDetail) {
        console.log("2 dhukse");
        setData(jobDetail);
      }
    }
  }, [allJobs, selectedJob]);

  return (
    <div className="mb-20">
      <div className="bg-[#F9F9FF] pt-24 pb-32 text-center">
        <h1 className="font-extrabold text-3xl">Job Details</h1>
      </div>
      <div className="mt-16 md:mt-32 w-[90%] mx-auto md:flex">
        <div className="md:w-[68%]">
          <p>
            <span className="detailTitle">Job Description: </span>
            <span className="detailDesc">{data.description}</span>
          </p>
          <p className="my-6">
            <span className="detailTitle">Job Responsibility: </span>
            <span className="detailDesc">{data.responsibility}</span>
          </p>
          <p>
            <span className="detailTitle">
              Educational Requirements: <br />
            </span>
            <span className="detailDesc">{data.educational_requirement}</span>
          </p>
          <p className="mt-6">
            <span className="detailTitle">
              Experiences: <br />
            </span>
            <span className="detailDesc">{data.experience}</span>
          </p>
        </div>
        <div className="md:w-[32%]"> 32</div>
      </div>
    </div>
  );
};

export default JobDetails;
