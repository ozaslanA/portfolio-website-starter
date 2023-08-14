import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";
import { BsLightbulb, BsMoonFill } from "react-icons/bs";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "gray";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false); //50 ye scrollardığımda devreye girer
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-black h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/*logo*/}
        <a href="#">
          <h1 className="text-black bg-slate-500">Abdurrahim Özaslan</h1>
        </a>
        {/*nav*/}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/*socials*/}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/*nav mobile */}
        <div className="hidden lg:hidden">
          <NavMobile />
        </div>
        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsMoonFill size={25} className="cursor-pointer" />
          ) : (
            <BsLightbulb size={25} className="cursor-pointer" />
          )}
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
