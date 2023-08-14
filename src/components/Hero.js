import React from "react";
import WomanImg from "../assets/img/banner-woman2.webp";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85] flex items-center bg-primary lg:bg-cover lg:bg-center lg-bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="conteiner mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/*left side */}
          <div className="flex-1 flex-col items-center lg:items-start">
            <p className="text-white text-lg mb-[22px]">
              Hey, I'm Abdurrahim 👋
            </p>
            <h1
              className="text-3xl leading-[44px]
            md:text-5xl md:leading-tight lg:text-7xl
            lg:leading-[1.2] font-bold md:tracking-[-2px] "
            >
              I Build & Design <br /> Web Developer.
            </h1>
            <button
              className="btn btn-md bg-white text-black hover:bg-black hover:text-white  md:btn-lg my-5"
              transition-all
            >
              {" "}
              Work With Me
            </button>
          </div>

          {/*right side */}
          <div className=" hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt=" " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
