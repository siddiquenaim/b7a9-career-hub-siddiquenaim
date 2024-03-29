import React from "react";
import "./AppliedJobsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ singleAppliedJob }) => {
  const { id, company_name, company_logo, title, job_type, location, salary } =
    singleAppliedJob;
  return (
    <div className="border my-6 rounded-lg p-8">
      <div className="card lg:card-side">
        <figure className="bg-[#F4F4F4] job-logo-container flex justify-center items-center rounded-lg mx-auto lg:mx-0">
          <img className="job-logo " src={company_logo} alt="Job" />
        </figure>
        <div className="card-body pb-0 lg:flex-row">
          <div className="lg:w-[80%] text-center lg:text-start">
            <h2 className="card-title job-title text-center lg:text-start mx-auto flex-col lg:flex-row">
              {title}
            </h2>
            <p className="company-title">{company_name}</p>
            <div className="my-5 font-extrabold text-gradient">
              <span className="mr-4 job-border py-2 px-5">{job_type[0]}</span>{" "}
              <span className="job-border py-2 px-5">{job_type[1]}</span>
            </div>

            <div className="lg:flex justify-center items-center gap-6 text-[#757575] lg:w-[80%]">
              <p className="font-medium text-xl">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                {location}
              </p>
              <p className="font-medium text-xl mt-3 lg:mt-0">
                <FontAwesomeIcon className="mr-2" icon={faDollar} />
                {salary}
              </p>
            </div>
          </div>
          <div className="lg:w-[20%] mx-auto flex items-center justify-center">
            <Link to={`/jobDetails/${id}`}>
              <button className="btn-details normal-case mt-4 lg:mt-0 text-center text-xl font-extrabold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
