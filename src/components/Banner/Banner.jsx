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
            Our company is an independent agency that offers everyone the
            opportunity to demonstrate their ability, skill and talent. Our
            company offers a competitive money earning and guarantees the high
            quality of your efficiency to grow and build your future successful
            life.
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
