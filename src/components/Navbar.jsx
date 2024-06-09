import React, { useEffect, useState, useRef } from "react";
import KYC from "./KYC";
import { Link } from "react-scroll";

const Navbar = () => {


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const elementRef = useRef(document.documentElement);
  useEffect(() => {
    const element = elementRef.current;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme, elementRef]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={700} >
          Home
        </Link>
      </li>
      <li>
        <Link to="services" spy={true} smooth={true} offset={-100} duration={700}>
          Services
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={700}>
          About
        </Link>
      </li>
      <li>
        <Link to="career" spy={true} smooth={true} offset={-100} duration={700}>
          Career
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={700}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-full container mx-auto md:px-20 px-4 bg-white text-black dark:bg-slate-800 dark:text-white sticky top-0 left-0 right-0 z-50 ${
        sticky
          ? "shadow-md bg-base-200 duration-200 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black dark:bg-slate-800 dark:text-white bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <svg
            className="h-16 w-16 fill-black dark:fill-white "
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="212.000000pt"
            height="164.000000pt"
            viewBox="0 0 212.000000 164.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)">
              <path d="M741 1568 c-16 -35 -79 -171 -141 -303 -62 -132 -130 -277 -151 -323 l-38 -83 145 3 146 3 77 170 c43 94 82 170 86 170 5 0 137 -268 295 -595 l288 -595 331 -3 331 -2 0 575 0 575 -130 0 -130 0 0 -439 0 -439 -106 -7 c-58 -4 -109 -4 -114 1 -5 5 -157 310 -338 679 l-330 670 -96 3 -97 3 -28 -63z" />
              <path d="M1850 1490 l0 -140 130 0 130 0 0 140 0 140 -130 0 -130 0 0 -140z" />
              <path d="M282 618 c-100 -217 -275 -594 -279 -600 -2 -5 183 -8 411 -8 l415 0 90 160 91 160 -62 142 c-34 79 -67 149 -74 157 -11 12 -19 1 -52 -70 -22 -46 -63 -132 -90 -192 l-51 -107 -135 0 -135 0 19 43 c10 23 52 114 93 202 41 88 74 161 73 161 0 1 -65 5 -143 9 l-142 7 -29 -64z" />
            </g>
          </svg>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          {/* theme button */}
          <div className="">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {/* Login button */}
          <div className="">
            <KYC />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
