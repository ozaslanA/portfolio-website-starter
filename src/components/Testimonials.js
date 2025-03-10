import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="section bg-secondary" id="testiominals">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What Other People Say
          </h2>
          <p className=" subtitle "></p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
