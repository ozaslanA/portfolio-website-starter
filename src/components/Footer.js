import React from "react";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
        <div className="flex space-x-6 items-center justify-center">
          {social.map((item, index) => {
            const { href, icon } = item;
            return (
              <a className="text-white text-base " href={href} key={index}>
                {icon}
              </a>
            );
          })}
        </div>

        {/*copyright*/}

        <p className="text-center ">
          &copy; 2023 Abdurahim Özaslan.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
