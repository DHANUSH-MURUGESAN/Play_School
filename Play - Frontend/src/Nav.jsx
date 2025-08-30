import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import logo from "./assets/playschoollogo2.png";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <header className="bg-gradient-to-r from-[#232526] to-[#414345]
      w-full flex flex-wrap justify-center md:justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-2 text-white gap-4 md:gap-10 text-center md:text-left">
        {/* Address */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaLocationDot className="flex-shrink-0" />
          <span className="font-medium">
            96, Rajaji Salai, Egmore, Chennai, Tamilnadu 600 008
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <FaMobileAlt className="flex-shrink-0" />
          <span className="font-medium">+91 81225 95789 / +91 81225 95799</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-3">
          <Link to="https://www.linkedin.com/in/dhanush-murugesan-stm/"><FaLinkedin className="rounded-full text-white border-2 h-6 w-6 sm:h-7 sm:w-7 p-1 transition-colors hover:text-[#0A66C2] hover:border-[#0A66C2]" /></Link>
          <Link to="https://www.instagram.com/dhanushm_md/"><FaInstagram className="rounded-full text-white border-2 h-6 w-6 sm:h-7 sm:w-7 p-1 transition-colors hover:text-[#E1306C] hover:border-[#E1306C]" /></Link>
          <FaFacebook className="rounded-full text-white border-2 h-6 w-6 sm:h-7 sm:w-7 p-1 transition-colors hover:text-[#1877F2] hover:border-[#1877F2]" />
          <TiSocialYoutube className="rounded-full text-white border-2 h-6 w-6 sm:h-7 sm:w-7 p-1 transition-colors hover:text-[#FF0000] hover:border-[#FF0000]" />
        </div>
      </header>

      {/* Navbar */}
      <header className="px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white flex justify-between items-center sticky top-0 shadow-2xl z-50 h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14 sm:h-16 md:h-20 w-auto" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-base lg:text-lg font-bold gap-6 lg:gap-12">
          <Link
            to="/"
            className="hover:text-[#FFD600] transition-transform duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-[#FFD600] transition-transform duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            About Us
          </Link>
          <Link
            to="/admission"
            className="hover:text-[#FFD600] transition-transform duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            Admissions
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#FFD600] transition-transform duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            Blog
          </Link>
          <Link
            to="/contact-form"
            className="hover:text-[#FFD600] transition duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            Contact
          </Link>
          <Link
            to="/shop"
            className="hover:text-[#FFD600] transition-transform duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
          >
            Shop
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white flex flex-col items-center gap-6 py-6 text-lg font-bold shadow-lg md:hidden">
            <Link
              to="/"
              className="relative hover:text-[#FFD600] after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#FFD600] after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#FFD600] transition-transform duration-300 hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/admission"
              className="relative hover:text-[#FFD600] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFD600] after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </Link>
            <Link
              to="/shop"
              className="hover:text-[#FFD600] transition-transform duration-300 hover:rotate-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#FFD600] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#FFD600] transition duration-300 hover:drop-shadow-[0_0_8px_#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Contact-Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;