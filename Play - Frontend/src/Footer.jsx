import React from "react";
import { Link } from "react-router";
import logo from "./assets/playschoollogo2.png";
import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot
} from "react-icons/fa6";
import { FaMailBulk, FaMobileAlt } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { CgMail, CgMailForward } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-[#471da3] to-[#805dd0] text-white w-full px-20 py-10">
        <div className="flex justify-center mb-6">
          <img src={logo} className="h-50 w-auto" />
        </div>
        <div className="space-y-8 text-sm md:text-base">
          <div className="flex items-center justify-center gap-3">
            <FaLocationDot className="size-7" />
            <h1 className="font-bold text-[18px]">
              96, Rajaji Salai, Egmore, Chennai, Tamilnadu 600 008
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaClock className="size-7" />
            <h1 className="font-bold text-[18px]">
              Monday - Friday : 7:30 am - 5:00 pm, Saturday : 8:00 am - 5:30 pm
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaMobileAlt className="size-7" />
            <h1 className="font-bold text-[18px]">
              +91 81225 95789 / +91 81225 95799
            </h1>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CgMail className="size-9" />
            <h1 className="font-bold text-[18px]">
              dreamlandkids@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link to="https://www.linkedin.com/in/dhanush-murugesan-stm/"><FaLinkedin className="rounded-full text-white border-2 h-10 w-auto p-1 transition-transform hover:scale-120 hover:text-[#2f69e6e7]" /></Link>
          <Link to="https://www.instagram.com/dhanushm_md/"><FaInstagram className="rounded-full text-white border-2 h-10 w-auto p-1 transition-transform hover:scale-120 hover:text-[#ff0090e2]" /></Link>
          <FaFacebook className="rounded-full text-white border-2 h-10 w-auto p-1 transition-transform hover:scale-120 hover:text-[#004df2e7]" />
          <TiSocialYoutube className="rounded-full text-white border-2 h-10 w-auto p-1 transition-transform hover:scale-120 hover:text-[#d90202]" />
        </div>
      </footer>
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#9b0576] to-[#d05db3]">
        <div className="py-2 text-white font-bold">Copyright 2025 © dreamlandkids.in</div>
      </div>
    </div>
  );
};

export default Footer;
