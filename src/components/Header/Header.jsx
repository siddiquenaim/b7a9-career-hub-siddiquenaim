import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <nav className="navbar flex flex-col lg:flex-row lg:w-[90%] mx-auto py-8">
        <div className="lg:navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow rounded-box w-52 border font-bold bg-white"
            >
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/applied-jobs">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl font-extrabold"
          >
            Job Hunters
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 description">
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/applied-jobs">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="lg:navbar-end items-center mt-5 lg:mt-0">
          <a href="/#features" className="btn-primary normal-case">
            Start Applying
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
