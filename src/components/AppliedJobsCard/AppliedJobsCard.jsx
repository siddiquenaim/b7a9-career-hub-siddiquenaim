import React from "react";
import "./AppliedJobsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";

const AppliedJobsCard = ({ singleAppliedJob }) => {
  const { company_name, company_logo, title, job_type, location, salary } =
    singleAppliedJob;
  return (
    <div className="border my-6 rounded-lg p-8">
      <div className="card md:card-side">
        <figure className="bg-[#F4F4F4] job-logo-container flex justify-center items-center rounded-lg mx-auto">
          <img className="job-logo " src={company_logo} alt="Job" />
        </figure>
        <div className="card-body pb-0 md:flex-row">
          <div className="md:w-[80%] text-center md:text-start">
            <h2 className="card-title job-title">{title}</h2>
            <p className="company-title">{company_name}</p>
            <div className="my-5 font-extrabold text-gradient">
              <span className="mr-4 job-border py-2 px-5">{job_type[0]}</span>{" "}
              <span className="job-border py-2 px-5">{job_type[1]}</span>
            </div>

            <div className="md:flex justify-center items-center gap-6 text-[#757575] md:w-[80%]">
              <p className="font-medium text-xl">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                {location}
              </p>
              <p className="font-medium text-xl mt-3 md:mt-0">
                <FontAwesomeIcon className="mr-2" icon={faDollar} />
                {salary}
              </p>
            </div>
          </div>
          <div className="md:w-[20%] mx-auto flex items-center justify-center">
            <button className="btn btn-details normal-case mt-4 md:mt-0">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
