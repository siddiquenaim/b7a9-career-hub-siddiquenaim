import React, { useEffect } from "react";
import "./JobCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobCard = ({ singleJob }) => {
  const { id, title, company_name, company_logo, job_type, location, salary } =
    singleJob;

  return (
    <div className="p-10 border rounded-lg">
      <div className="image-container">
        <img className="logo" src={company_logo} alt="" />
      </div>
      <h1 className="mt-8 mb-2 text-2xl font-extrabold">{title}</h1>
      <p className="text-xl font-semibold text-[#757575]">{company_name}</p>
      <div className="my-5 font-extrabold text-gradient">
        <span className="mr-4 job-border py-2 px-5">{job_type[0]}</span>{" "}
        <span className="job-border py-2 px-5">{job_type[1]}</span>
      </div>
      <div className="md:flex gap-6 text-[#757575]">
        <p className="font-medium text-xl">
          <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
          {location}
        </p>
        <p className="font-medium text-xl">
          <FontAwesomeIcon className="mr-2" icon={faDollar} />
          {salary}
        </p>
      </div>
      <Link to={`jobDetails/${id}`}>
        <button className="btn-details mt-6">View Details</button>
      </Link>
    </div>
  );
};

export default JobCard;
