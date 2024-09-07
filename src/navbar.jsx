import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/laxfo_logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="w-full bg-[rgba(242,235,224,1)] shadow-md fixed top-0 left-0 right-0 z-10 font-pt-serif">
      <nav className="flex justify-between items-center px-4 py-2 md:px-8 md:py-3">
        <a href="/home" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 md:h-10" />
        </a>

        <button
          className="text-2xl block md:hidden focus:outline-none z-20"
          onClick={toggleNavbar}
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`${
            isNavOpen
              ? "fixed top-0 left-0 w-full h-screen bg-[rgba(242,235,224,1)] flex flex-col justify-center items-center space-y-8 border-b border-gray-300"
              : "hidden"
          } md:flex md:flex-row md:justify-center md:items-center md:space-x-8 transition-transform duration-300 ease-in-out ml-auto mr-auto`}
        >
          <a href="/home" className="md:hidden">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
          </a>
          <li>
            <a href="/shop" className="text-gray-800 hover:text-gray-600 text-xl md:text-base">
              Shop
            </a>
          </li>
          <li>
            <a href="/prescription" className="text-gray-800 hover:text-gray-600 text-xl md:text-base">
              Prescription
            </a>
          </li>
          <li>
            <a href="/bookaTherapy" className="text-gray-800 hover:text-gray-600 text-xl md:text-base">
              Book a Therapy
            </a>
          </li>
          <li>
            <a href="/blog" className="text-gray-800 hover:text-gray-600 text-xl md:text-base">
              Blog
            </a>
          </li>
          <li className="md:hidden">
            <a href="/signIn" className="text-gray-800 hover:text-gray-600 text-xl md:text-base">
              Sign In
            </a>
          </li>
        </ul>
        <div className="md:flex items-center mr-8 space-x-6">
          <a href="/searchbar" className="text-gray-800 text-base md:text-base">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="me-1" />
          </a>
          <a href="/cartpage" className="text-gray-800 text-base md:text-base">
            <FontAwesomeIcon icon={faCartShopping} className="me-1" />
          </a>
          <div className="hidden md:flex items-center space-x-6 mr-8">
            <a href="/signIn" className="text-gray-800 hover:text-gray-600 text-base md:text-base">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;






