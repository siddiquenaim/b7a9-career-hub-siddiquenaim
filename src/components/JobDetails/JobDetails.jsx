import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faBriefcase,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="bg-[#F9F9FF] pt-12 pb-16 text-center">
        <h1 className="font-extrabold text-3xl">Job Details</h1>
      </div>
      <div className="mt-16 md:mt-24 w-[90%] mx-auto md:flex gap-6">
        <div className="md:w-[68%] w-[95%] mx-auto">
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

        <div className="w-[95%] md:w-[32%] mt-10 md:mt-0 mx-auto">
          <div className="bg-gradient p-8">
            <h3 className="text-xl font-extrabold">Job Details</h3>
            <hr className="horizontal-line" />
            <p className="text-xl font-bold text-[#474747]">
              <FontAwesomeIcon
                className="mr-2 text-[#7E90FE]"
                icon={faDollarSign}
              />
              Salary:{" "}
              <span className="font-medium text-[#757575]">{data.salary}</span>
            </p>
            <p className="text-xl font-bold text-[#474747] mt-4">
              <FontAwesomeIcon
                className="mr-2 text-[#7E90FE]"
                icon={faBriefcase}
              />
              Job Title:{" "}
              <span className="font-medium text-[#757575] ">{data.title}</span>
            </p>
            <h3 className="text-xl font-extrabold mt-6">Contact Information</h3>
            <hr className="horizontal-line" />
            <p className="text-xl font-bold text-[#474747]">
              <FontAwesomeIcon className="mr-2 text-[#7E90FE]" icon={faPhone} />
              Phone:{" "}
              <span className="font-medium text-[#757575]">{data.phone}</span>
            </p>
            <p className="text-xl font-bold text-[#474747] my-4">
              <FontAwesomeIcon
                className="mr-2 text-[#7E90FE]"
                icon={faEnvelope}
              />
              Email:{" "}
              <span className="font-medium text-[#757575] ">{data.email}</span>
            </p>
            <p className="text-xl font-bold text-[#474747]">
              <FontAwesomeIcon
                className="mr-2 text-[#7E90FE]"
                icon={faLocationDot}
              />
              Address:{" "}
              <span className="font-medium text-[#757575]">{data.address}</span>
            </p>
          </div>
          <div className="mt-6">
            <button className="btn-details w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
