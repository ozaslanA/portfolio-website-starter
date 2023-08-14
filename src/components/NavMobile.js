import React, { useState } from "react";
import { navigation } from "../data";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsopen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsopen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className=" w-8 h-8  " />
      </div>
      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-slate-600 fixed top-0 right-0"
      ></motion.div>
      {/*Menu*/}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={` $ {isOpen ? 'right-0' : '-right-full' }fixed top-0 bottom-0 w-full flex flex-col justify-center transition-all duration-300 overflow-hidden `}
      >
        {/*Closeİcon*/}
        <div
          onClick={() => setIsopen(false)}
          className="cursor-pointer absolute top-8 right-8 "
        >
          <XIcon className="w-8 h-8" />

          {navigation.map((item, index) => {
            return (
              <li key={index} className=" m-8">
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-xl cursor-pointer capitalize"
                >
                  {" "}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </div>
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
