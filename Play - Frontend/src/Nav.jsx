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
      <header className="bg-gradient-to-r from-[#9b0576] to-[#d05db3] h-10 inline-flex w-full justify-start items-center px-20 text-white gap-20">
        <div className="inline-flex gap-3">
          <FaLocationDot className="mt-1" />
          <h1 className="font-bold">
            96, Rajaji Salai, Egmore, Chennai, Tamilnadu 600 008
          </h1>
        </div>
        <div className="inline-flex gap-3">
          <FaMobileAlt className="mt-1" />
          <h1 className="font-bold">+91 81225 95789 / +91 81225 95799</h1>
        </div>
        <div className="mx-[42px] inline-flex justify-center items-center">
          <div className="inline-flex gap-3">
            <FaLinkedin className="rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120" />
            <FaInstagram className="rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120" />
            <FaFacebook className="rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120" />
            <TiSocialYoutube className="rounded-full text-white border-2 h-7 w-7 p-1 transition-transform hover:scale-120" />
          </div>
        </div>
      </header>
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

        {/* Desktop Menu (Visible on md & larger) */}
        <nav className="hidden md:flex items-center text-base lg:text-lg font-bold gap-6 lg:gap-12">
          <Link to="/" className="hover:text-[#FFD600]">
            Home
          </Link>
          <Link to="/time-table" className="hover:text-[#FFD600]">
            Time-Table
          </Link>
          <Link to="/aboutus" className="hover:text-[#FFD600]">
            About Us
          </Link>
          <Link to="/admissions" className="hover:text-[#FFD600]">
            Admissions
          </Link>
          <Link to="/shop" className="hover:text-[#FFD600]">
            Shop
          </Link>
          <Link to="/blog" className="hover:text-[#FFD600]">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white flex flex-col items-center gap-6 py-6 text-lg font-bold shadow-lg md:hidden">
            <Link
              to="/"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/time-table"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Time-Table
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/admissions"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Admissions
            </Link>
            <Link
              to="/shop"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#FFD600]"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
