import React from "react";
import Image from "../assets/img/about.webp";
import { contact } from "../data";

const About = () => {
  return (
    <section className="section bg-secondary " id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Abdurrahim Özaslan
              </h2>
              <p className="mb-4 text-gray-50 "> Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hakkımda - Hakkımda-
                HakkımdaHakkımdaHakkımdaHakkımdaHakkımdaHakkımdaHakkımdaHakkımda
              </p>
            </div>
            <button
              onClick={<contact />}
              className="btn btn-md bg-white text-black hover:bg-black hover:text-white  md:btn-lg my-5"
              transition-all
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
