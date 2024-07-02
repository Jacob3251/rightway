import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../../assets/images/Logo_images/Logo.png";
import logo2 from "../../assets/images/Logo_images/Logo-2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center  h-24 w-full mx-auto px-4">
      <Link className="navbar-brand" to="/" id="logo">
        <img src={logo} alt="RightWay" />
      </Link>

      {/* <h1>Right Way</h1> */}

      <ul className="hidden md:flex m-auto text-blacks font-bold">
        <li className="p-4">
          <Link className="navbar-brand" to="/" id="home">
            Home
          </Link>{" "}
        </li>
        <li className="p-4">
          <Link className="navbar-brand" to="/About" id="about">
            About
          </Link>
        </li>
        <li className="p-4">Services</li>
        <li className="p-4">
          <Link className="navbar-brand" to="/University" id="university">
            Universities
          </Link>
        </li>
        <li className="p-4">
          <Link className="navbar-brand" to="/Resources" id="university">
            Resources
          </Link>
        </li>
      </ul>
      <div>
        <button className="hidden md:inline bg-[#1F3566] text-white w-[8rem] p-2  rounded-3xl">
          <Link className="navbar-brand" to="/Contact" id="contact">
            Contact Us
          </Link>
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden z-[41] ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#1F3566] ease-in-out duration-500 z-[40]  "
            : "fixed left-[-100%]"
        }
      >
        <Link className="navbar-brand" to="/" id="logo">
          <img src={logo2} alt="Right Way" className="p-4" />
        </Link>

        {/* MObile Navbar */}

        <ul className="p-4 uppercase font-bold text-white">
          <li className="p-4 border-b border-gray-400">
            <Link className="navbar-brand" to="/" id="home2">
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-400">
            <Link className="navbar-brand" to="/About" id="about2">
              About
            </Link>
          </li>

          <li className="p-4 border-b border-gray-400">
            <Link className="navbar-brand" to="/University" id="university">
              Universities
            </Link>
          </li>
          <li className="p-4 border-b border-gray-400">
            <Link className="navbar-brand" to="/Resources" id="resources">
              Resources
            </Link>
          </li>
          <li className="p-4 border-b border-gray-400">
            <Link className="navbar-brand" to="/Contact" id="contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
