import React from "react";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <section className="lg:flex bg-[#F9F9FF]">
      <div className="lg:w-[50%] flex justify-center items-center">
        <div className="w-[90%] lg:w-[70%] text-center lg:text-start my-10">
          <div className="text-5xl lg:text-7xl font-extrabold ">
            <p>Next Step</p>
            <p className="my-5">Towards Your</p>
            <p className="text-gradient">Dream Career</p>
          </div>
          <p className="my-6 description">
            Our job hunting website is the perfect platform for job seekers
            looking to find their dream job. With a user-friendly interface and
            a wide range of job listings across various industries, we make the
            job hunting process easy and efficient. Whether you're a recent
            graduate or an experienced professional, our website has everything
            you need to take the next step in your career. Start exploring today
            and discover your perfect job match!
          </p>
          <a href="#features">
            <button className="btn-primary">Get Started</button>
          </a>
        </div>
      </div>
      <div className="lg:w-[50%] flex justify-center">
        <img className="banner-img" src={banner} alt="" />
      </div>
    </section>
  );
};

export default Banner;
