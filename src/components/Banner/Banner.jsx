import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <section className="md:flex bg-[#F9F9FF]">
      <div className="md:w-[50%] flex justify-center items-center">
        <div className="w-[90%] md:w-[70%] text-center md:text-start my-10">
          <div className="text-5xl md:text-7xl font-extrabold ">
            <p>One Step</p>
            <p className="my-5"> Closer To Your</p>
            <p className="text-gradient">Dream Job</p>
          </div>
          <p className="my-6 description">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a href="#features">
            <button className="btn-primary">Get Started</button>
          </a>
        </div>
      </div>
      <div className="md:w-[50%] flex justify-center">
        <img className="banner-img" src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
