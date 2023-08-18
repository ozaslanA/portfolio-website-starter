import React from "react";

const Contact = () => {
  return (
    <section className="section bg-primary " id="contact">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title  ">Contact Me</h2>

          {/*form */}
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your Name" />
              <input className="input" type="email" placeholder="Your email" />
            </div>
            <input type="text" className="input" placeholder="subject" />
            <textarea
              className=" textarea"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-md bg-white text-black hover:bg-black hover:text-white  md:btn-lg ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
